import generatedInteraction from "@/data/generated/orion-interaction.json";

export type PlannedTransition = {
  sequence: number;
  transition_id: string;
  source_representation: string;
  target_representation: string;
  contract_version: string | null;
  evidence_level: string;
  operator_status: string;
  renderer_family: string | null;
};

export type TransformationIssue = {
  kind: string;
  reason: string;
  transition_id: string | null;
  evidence_level: string;
};

type GeneratedInteraction = {
  generator: string;
  orion_version: string;
  orion_source_sha256: string;
  request: {
    utterance: string;
    orientation_object: {
      orientation_object_id: string;
      source_references: string[];
      provenance: string[];
    };
  };
  translation: {
    intents: string[];
    source_representation: string;
    target: { representation_type: string; representation_version: string | null };
    vocabulary_version: string;
  };
  report: {
    report_id: string;
    status: "planned" | "blocked";
    schema_version: string;
    produced_representation: null;
    plan: {
      plan_id: string;
      source_representation: string;
      target_representation: string;
      graph_version: string;
      contract_registry_version: string;
      operator_registry_version: string;
      path: PlannedTransition[];
      alternative_paths: string[][];
      evidence_chain: string[];
      source_references: string[];
      source_provenance: string[];
      required_invariants: string[];
      preserved_invariants: string[];
      provenance_chain: Array<{
        sequence: number;
        transition_id: string;
        contract_version: string | null;
        source_representation: string;
        target_representation: string;
        evidence_level: string;
      }>;
    };
    validation: { valid: boolean; checks: string[]; errors: string[] };
    issues: TransformationIssue[];
  };
  explanation: {
    sentences: string[];
    text: string;
    status: string;
    evidence: string[];
    blockers: TransformationIssue[];
    alternatives: string[][];
  };
};

const interaction = generatedInteraction as GeneratedInteraction;

export const orientationAdapter = Object.freeze({
  generator: interaction.generator,
  orionVersion: interaction.orion_version,
  orionSourceSha256: interaction.orion_source_sha256,
  request: interaction.request,
  translation: interaction.translation,
  report: interaction.report,
  explanation: interaction.explanation,
});
