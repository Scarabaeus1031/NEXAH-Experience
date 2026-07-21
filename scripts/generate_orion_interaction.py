#!/usr/bin/env python3
"""Generate one canonical LYRA interaction for the static Experience build."""

from __future__ import annotations

from dataclasses import asdict
from hashlib import sha256
import json
import os
from pathlib import Path
import sys


REPOSITORY_ROOT = Path(__file__).resolve().parents[1]
OUTPUT_PATH = REPOSITORY_ROOT / "src" / "data" / "generated" / "orion-interaction.json"
CANONICAL_UTTERANCE = (
    "I want to understand how this observation reaches the calendar."
)


def locate_orion_repository() -> Path:
    configured = os.environ.get("ORION_REPOSITORY_PATH")
    candidates = (
        *((Path(configured).expanduser(),) if configured else ()),
        *REPOSITORY_ROOT.parents,
    )
    for candidate in candidates:
        resolved = candidate.resolve()
        if (resolved / "src" / "orion" / "lyra_execution.py").is_file():
            return resolved
    raise SystemExit(
        "ORION repository not found. Set ORION_REPOSITORY_PATH to the frozen "
        "ORION checkout before generating the Experience report."
    )


def source_digest(orion_root: Path) -> str:
    digest = sha256()
    for path in sorted((orion_root / "src" / "orion").rglob("*.py")):
        digest.update(path.relative_to(orion_root).as_posix().encode("utf-8"))
        digest.update(b"\0")
        digest.update(path.read_bytes())
        digest.update(b"\0")
    return digest.hexdigest()


def main() -> None:
    orion_root = locate_orion_repository()
    sys.path.insert(0, str(orion_root / "src"))

    from orion import (  # pylint: disable=import-outside-toplevel
        HumanLanguageRequest,
        LyraOrientationExecutor,
        OrientationObject,
        RepresentationRef,
    )

    orientation_object = OrientationObject(
        orientation_object_id="nexah-experience:observation-calendar",
        orientation_object_version="nexah-experience.orientation-object/0.1",
        representation=RepresentationRef(
            representation_id="nexah-experience:canonical-observation",
            representation_type="Observation",
            representation_version="representation/1",
            coordinate_profile="coordinate-profile/1",
        ),
        source_references=("experience:canonical-example",),
        provenance=("nexah-experience@0.1.0-alpha.0",),
    )
    interaction = LyraOrientationExecutor().execute(
        HumanLanguageRequest(CANONICAL_UTTERANCE, orientation_object)
    )

    payload = {
        "generator": "nexah-experience.build-integration/0.1",
        "orion_version": (orion_root / "VERSION").read_text(encoding="utf-8").strip(),
        "orion_source_sha256": source_digest(orion_root),
        "request": {
            "utterance": interaction.translation.request.utterance,
            "orientation_object": asdict(
                interaction.translation.request.orientation_object
            ),
        },
        "translation": {
            "intents": tuple(intent.value for intent in interaction.translation.intents),
            "source_representation": interaction.translation.source_representation,
            "target": asdict(interaction.translation.target),
            "vocabulary_version": interaction.translation.vocabulary_version,
        },
        "report": asdict(interaction.report),
        "explanation": {
            "sentences": interaction.explanation.sentences,
            "text": interaction.explanation.text,
            "status": interaction.explanation.status,
            "evidence": interaction.explanation.evidence,
            "blockers": tuple(asdict(issue) for issue in interaction.explanation.blockers),
            "alternatives": interaction.explanation.alternatives,
        },
    }

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2, sort_keys=True) + "\n",
        encoding="utf-8",
    )
    print(
        f"Generated {OUTPUT_PATH.relative_to(REPOSITORY_ROOT)} from ORION "
        f"{payload['orion_version']} ({interaction.report.report_id})."
    )


if __name__ == "__main__":
    main()
