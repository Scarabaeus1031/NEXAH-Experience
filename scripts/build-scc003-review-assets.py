#!/usr/bin/env python3
"""Build the source-bound SCC-003-R1 review PDF and deterministic packet ZIP."""

from __future__ import annotations

import csv
import hashlib
import html
import json
import re
import shutil
import subprocess
import sys
import zipfile
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    PageBreak,
    Paragraph,
    Preformatted,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
ECOSYSTEM = ROOT.parents[1]
PACKET = ECOSYSTEM / (
    "30 SCIENCE LAB/NEXAH-Science-Lab/"
    "RESEARCH_PROGRAM_B_MATHEMATICAL_FOUNDATIONS/"
    "AXIOM0_QMODE_ORIENTATION_TO_MEASUREMENT_FOUNDATION_PACKAGE_2026-10-01/"
    "56_SCC_003_EXTERNAL_REVIEW_PACKET_2026-10-13"
)
OUT = ROOT / "public/review-assets/scc-003-r1"
PDF_OUTPUT = ROOT / "output/pdf"
EXPECTED_MANIFEST_SHA256 = "73b0322764620a5faef7a1b92f7cdb552ea39d09e3a79386b6454377679996f2"


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def clean_text(value: str) -> str:
    replacements = {
        "\u2010": "-",
        "\u2011": "-",
        "\u2012": "-",
        "\u2013": "-",
        "\u2014": "-",
        "\u2192": "->",
        "\u2264": "<=",
        "\u2265": ">=",
        "\u2212": "-",
        "\u2208": "in",
        "\u211d": "R",
        "\u2124": "Z",
        "\u00a0": " ",
    }
    for source, target in replacements.items():
        value = value.replace(source, target)
    return value


def inline_markup(value: str) -> str:
    value = html.escape(clean_text(value.strip()))
    value = re.sub(r"`([^`]+)`", r'<font name="Courier">\1</font>', value)
    value = re.sub(r"\*\*([^*]+)\*\*", r"<b>\1</b>", value)
    value = re.sub(r"\*([^*]+)\*", r"<i>\1</i>", value)
    value = re.sub(r"\[([^\]]+)\]\([^\)]+\)", r"\1", value)
    return value


def add_markdown(story: list, source: str, styles: dict) -> None:
    lines = clean_text(source).splitlines()
    paragraph: list[str] = []
    code: list[str] = []
    in_code = False
    skipping_metadata = False

    def flush_paragraph() -> None:
        if paragraph:
            story.append(Paragraph(inline_markup(" ".join(paragraph)), styles["body"]))
            story.append(Spacer(1, 2.8 * mm))
            paragraph.clear()

    for line in lines:
        stripped = line.strip()
        if skipping_metadata:
            if not stripped:
                skipping_metadata = False
            continue
        if stripped.startswith("```"):
            flush_paragraph()
            if in_code:
                story.append(Preformatted("\n".join(code), styles["code"]))
                story.append(Spacer(1, 3 * mm))
                code.clear()
            in_code = not in_code
            continue
        if in_code:
            code.append(line)
            continue
        if not stripped:
            flush_paragraph()
            continue
        if stripped.startswith("# "):
            flush_paragraph()
            continue
        if stripped.startswith("## "):
            flush_paragraph()
            story.append(Spacer(1, 4 * mm))
            story.append(Paragraph(inline_markup(stripped[3:]), styles["h2"]))
            continue
        if stripped.startswith("### "):
            flush_paragraph()
            story.append(Paragraph(inline_markup(stripped[4:]), styles["h3"]))
            continue
        if re.match(r"^[-*] ", stripped):
            flush_paragraph()
            story.append(Paragraph(inline_markup(stripped[2:]), styles["bullet"], bulletText="-"))
            continue
        if re.match(r"^\d+\. ", stripped):
            flush_paragraph()
            number, item = stripped.split(". ", 1)
            story.append(Paragraph(inline_markup(item), styles["bullet"], bulletText=f"{number}."))
            continue
        if stripped.startswith("> "):
            flush_paragraph()
            story.append(Paragraph(inline_markup(stripped[2:]), styles["quote"]))
            continue
        if stripped.startswith(("Subtitle:", "Date:", "Status:", "Identity:", "A0 role:")):
            skipping_metadata = True
            continue
        paragraph.append(stripped)
    flush_paragraph()


def build_pdf(pdf_path: Path, paper: str, claims: list[dict], reviewer_brief: str) -> None:
    page_width, page_height = A4
    doc = SimpleDocTemplate(
        str(pdf_path),
        pagesize=A4,
        rightMargin=20 * mm,
        leftMargin=20 * mm,
        topMargin=20 * mm,
        bottomMargin=19 * mm,
        title="SCC-003-R1 Open Review Copy",
        author="Thomas Hofmann / NEXAH",
        subject="Independent mathematical review request",
        invariant=1,
    )
    sample = getSampleStyleSheet()
    styles = {
        "eyebrow": ParagraphStyle(
            "Eyebrow", parent=sample["Normal"], fontName="Helvetica-Bold",
            fontSize=8, leading=10, textColor=colors.HexColor("#B38728"),
            spaceAfter=7, tracking=1.4,
        ),
        "title": ParagraphStyle(
            "Title", parent=sample["Title"], fontName="Times-Roman",
            fontSize=31, leading=33, alignment=TA_LEFT,
            textColor=colors.HexColor("#0B1722"), spaceAfter=8,
        ),
        "subtitle": ParagraphStyle(
            "Subtitle", parent=sample["Normal"], fontName="Helvetica",
            fontSize=12.5, leading=18, textColor=colors.HexColor("#4D5B66"),
            spaceAfter=12,
        ),
        "h2": ParagraphStyle(
            "H2", parent=sample["Heading2"], fontName="Times-Roman",
            fontSize=19, leading=23, textColor=colors.HexColor("#0B1722"),
            spaceBefore=8, spaceAfter=7, keepWithNext=True,
        ),
        "h3": ParagraphStyle(
            "H3", parent=sample["Heading3"], fontName="Helvetica-Bold",
            fontSize=10.5, leading=14, textColor=colors.HexColor("#213440"),
            spaceBefore=5, spaceAfter=4, keepWithNext=True,
        ),
        "body": ParagraphStyle(
            "Body", parent=sample["BodyText"], fontName="Helvetica",
            fontSize=9.2, leading=13.7, textColor=colors.HexColor("#273640"),
        ),
        "small": ParagraphStyle(
            "Small", parent=sample["BodyText"], fontName="Helvetica",
            fontSize=7.4, leading=10.5, textColor=colors.HexColor("#5E6B73"),
        ),
        "bullet": ParagraphStyle(
            "Bullet", parent=sample["BodyText"], fontName="Helvetica",
            fontSize=9, leading=13.2, leftIndent=12, firstLineIndent=-7,
            textColor=colors.HexColor("#273640"), spaceAfter=2.5,
        ),
        "quote": ParagraphStyle(
            "Quote", parent=sample["BodyText"], fontName="Times-Italic",
            fontSize=10.5, leading=15.5, leftIndent=11, rightIndent=5,
            borderColor=colors.HexColor("#D8B45B"), borderWidth=1,
            borderPadding=(0, 0, 0, 10), textColor=colors.HexColor("#263944"),
            spaceBefore=4, spaceAfter=8,
        ),
        "code": ParagraphStyle(
            "Code", parent=sample["Code"], fontName="Courier",
            fontSize=7.5, leading=10.2, leftIndent=8, rightIndent=8,
            borderColor=colors.HexColor("#CED5D8"), borderWidth=.5,
            borderPadding=7, backColor=colors.HexColor("#F1F3F2"),
            textColor=colors.HexColor("#1B2A33"),
        ),
        "center": ParagraphStyle(
            "Center", parent=sample["BodyText"], fontName="Helvetica",
            fontSize=8.2, leading=12, alignment=TA_CENTER,
            textColor=colors.HexColor("#5A6871"),
        ),
    }

    story: list = []
    story.append(Spacer(1, 15 * mm))
    story.append(Paragraph("SCC-003-R1 / OPEN REVIEW COPY", styles["eyebrow"]))
    story.append(Paragraph("Five Pascal Carriers.<br/>One Quotient.", styles["title"]))
    story.append(Paragraph(
        "Independent review of a finite typed graph with 106 vertices, "
        "180 directed recurrence edges and candidate full D5 symmetry.",
        styles["subtitle"],
    ))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor("#D8B45B"), spaceAfter=8 * mm))

    stats = Table([
        ["106", "180", "D5", "177 / 177"],
        ["quotient vertices", "directed edges", "candidate full typed group", "internal verifier checks"],
    ], colWidths=[doc.width / 4] * 4)
    stats.setStyle(TableStyle([
        ("FONTNAME", (0, 0), (-1, 0), "Times-Roman"),
        ("FONTSIZE", (0, 0), (-1, 0), 20),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.HexColor("#0B1722")),
        ("FONTNAME", (0, 1), (-1, 1), "Helvetica"),
        ("FONTSIZE", (0, 1), (-1, 1), 6.6),
        ("TEXTCOLOR", (0, 1), (-1, 1), colors.HexColor("#65727A")),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LINEBEFORE", (1, 0), (-1, -1), .5, colors.HexColor("#D5D9D8")),
        ("BOTTOMPADDING", (0, 0), (-1, 0), 3),
        ("TOPPADDING", (0, 1), (-1, 1), 2),
    ]))
    story.append(stats)
    story.append(Spacer(1, 11 * mm))

    story.append(Paragraph("WHY A HUMAN REVIEW", styles["eyebrow"]))
    story.append(Paragraph(
        "Mathematics can now be explored, challenged and documented with AI at unusual speed. "
        "What AI cannot provide is the independent human judgement that decides whether a definition "
        "is sound, a proof closes, a nearby construction has been missed, or a contribution is worth "
        "carrying forward. SCC-003-R1 is offered here to request that return.",
        styles["quote"],
    ))
    story.append(Paragraph(
        "AI systems assisted with exploration, criticism and documentation. Finite computational "
        "claims were also checked by deterministic programs. Neither layer is treated as independent "
        "scientific validation. The mathematical object, the claims and responsibility for their "
        "presentation remain with the author.",
        styles["body"],
    ))
    story.append(Spacer(1, 7 * mm))
    story.append(Paragraph(
        "OPEN REVIEW DRAFT / NOT PEER REVIEWED / NO NOVELTY OR PRIORITY CLAIM / "
        "INDEPENDENT HUMAN REVIEW REQUESTED",
        styles["center"],
    ))
    story.append(PageBreak())

    story.append(Paragraph("Claims presented for review", styles["h2"]))
    story.append(Paragraph(
        "The review is deliberately finite. A valid return may accept, revise or reject any claim, "
        "identify controlling prior art, or conclude that the review is incomplete.", styles["body"]
    ))
    story.append(Spacer(1, 4 * mm))
    claim_rows = [["ID", "Claim", "Current state"]]
    for claim in claims:
        claim_rows.append([
            Paragraph(claim["claim_id"], styles["small"]),
            Paragraph(inline_markup(claim["claim"]), styles["small"]),
            Paragraph(claim["status"].replace("_", " "), styles["small"]),
        ])
    claim_table = Table(claim_rows, colWidths=[24 * mm, 111 * mm, 33 * mm], repeatRows=1)
    claim_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#0B1C29")),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, 0), 7),
        ("GRID", (0, 0), (-1, -1), .4, colors.HexColor("#C8CECF")),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#F4F1E9")]),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    story.append(claim_table)
    story.append(PageBreak())

    add_markdown(story, paper, styles)
    story.append(Paragraph("Reviewer brief", styles["h2"]))
    add_markdown(story, reviewer_brief, styles)
    story.append(Spacer(1, 7 * mm))
    story.append(Paragraph("Return contract", styles["h2"]))
    for item in [
        "Name, field, relevant qualification and conflict-of-interest statement.",
        "Exact packet-manifest SHA-256 and replay environment.",
        "The earliest failing definition or inference if a proof does not close.",
        "A precise structural mapping for any proposed predecessor.",
        "One bounded disposition: accept correctness, revise, reject, prior art found, no equivalence found within scope, or review incomplete.",
    ]:
        story.append(Paragraph(inline_markup(item), styles["bullet"], bulletText="-"))
    story.append(Spacer(1, 10 * mm))
    story.append(Paragraph(
        f"Packet ID: SCC003-ERP-2026-10-13<br/>Manifest SHA-256: {EXPECTED_MANIFEST_SHA256}<br/>"
        "Identity reused: SCC-003 / A0OE:PASCAL_PENTAGON_D5_TEST",
        styles["small"],
    ))

    def footer(canvas, document) -> None:
        canvas.saveState()
        canvas.setStrokeColor(colors.HexColor("#D7D2C7"))
        canvas.setLineWidth(.35)
        canvas.line(20 * mm, 13 * mm, page_width - 20 * mm, 13 * mm)
        canvas.setFont("Helvetica", 6.7)
        canvas.setFillColor(colors.HexColor("#67737A"))
        canvas.drawString(20 * mm, 8.3 * mm, "SCC-003-R1 / OPEN REVIEW COPY")
        canvas.drawRightString(page_width - 20 * mm, 8.3 * mm, f"{document.page}")
        canvas.restoreState()

    doc.build(story, onFirstPage=footer, onLaterPages=footer)


def build_zip(zip_path: Path, manifest: dict) -> None:
    entries = [Path(item["path"]) for item in manifest["files"]]
    with zipfile.ZipFile(zip_path, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
        for relative in sorted(entries, key=lambda item: item.as_posix()):
            source = PACKET / relative
            info = zipfile.ZipInfo(f"SCC-003-R1_REVIEW_PACKET/{relative.as_posix()}")
            info.date_time = (2026, 10, 13, 0, 0, 0)
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o100644 << 16
            archive.writestr(info, source.read_bytes())


def main() -> None:
    if not PACKET.exists():
        raise SystemExit(f"Missing canonical review packet: {PACKET}")
    validation = subprocess.run(
        [sys.executable, "validate_review_packet.py"],
        cwd=PACKET,
        check=True,
        capture_output=True,
        text=True,
    )
    result = json.loads(validation.stdout)
    if result.get("status") != "PASS":
        raise SystemExit(f"Packet validation failed: {result}")

    manifest_path = PACKET / "PACKAGE_MANIFEST.json"
    observed = sha256(manifest_path)
    if observed != EXPECTED_MANIFEST_SHA256:
        raise SystemExit(f"Manifest drift: expected {EXPECTED_MANIFEST_SHA256}, observed {observed}")
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    with (PACKET / "CLAIM_TABLE.csv").open(encoding="utf-8", newline="") as stream:
        claims = list(csv.DictReader(stream))

    OUT.mkdir(parents=True, exist_ok=True)
    PDF_OUTPUT.mkdir(parents=True, exist_ok=True)
    pdf_final = PDF_OUTPUT / "SCC-003-R1_REVIEW_COPY.pdf"
    pdf_path = OUT / "SCC-003-R1_REVIEW_COPY.pdf"
    zip_path = OUT / "SCC-003-R1_REPRODUCIBLE_PACKET.zip"
    build_pdf(
        pdf_final,
        (PACKET / "paper/PAPER_A_SCC_003.md").read_text(encoding="utf-8"),
        claims,
        (PACKET / "REVIEWER_BRIEF.md").read_text(encoding="utf-8"),
    )
    shutil.copyfile(pdf_final, pdf_path)
    build_zip(zip_path, manifest)
    (OUT / "REVIEW_FORM.md").write_bytes((PACKET / "REVIEW_FORM.md").read_bytes())
    (OUT / "PACKAGE_MANIFEST.json").write_bytes(manifest_path.read_bytes())
    projection = {
        "schema": "nexah.scc003.open-review-projection/1.0.0",
        "identity_reused": manifest["identity_reused"],
        "source_packet_id": manifest["packet_id"],
        "source_manifest_sha256": observed,
        "source_validation": result,
        "projection_state": "OWNER_AUTHORIZED_PUBLIC_REVIEW",
        "intended_url": "https://nexah.de/scc-003-r1/",
        "navigator_effect": {
            "new_entities": 0,
            "new_relations": 0,
            "new_aliases": 0,
            "note": "Public presentation candidate over the existing SCC-003 identity.",
        },
        "outputs": {
            "pdf": {"path": pdf_path.name, "sha256": sha256(pdf_path), "bytes": pdf_path.stat().st_size},
            "zip": {"path": zip_path.name, "sha256": sha256(zip_path), "bytes": zip_path.stat().st_size},
        },
    }
    (OUT / "PUBLIC_REVIEW_SOURCE_MANIFEST.json").write_text(
        json.dumps(projection, indent=2) + "\n", encoding="utf-8"
    )
    print(json.dumps(projection, indent=2))


if __name__ == "__main__":
    main()
