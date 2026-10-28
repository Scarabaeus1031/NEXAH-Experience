import type { APIRoute } from "astro";

export const prerender = true;

const schema = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  $id: "https://nexah.de/ai/ecosystem.schema.json",
  title: "NEXAH ecosystem identity projection",
  description:
    "The machine-readable public projection of the maintained NEXAH identity, hierarchy, authority map and interpretation boundaries.",
  type: "object",
  required: ["schema", "identity"],
  properties: {
    schema: { const: "https://nexah.de/ai/ecosystem.schema.json" },
    identity: {
      type: "object",
      required: [
        "name",
        "fullName",
        "publicUrl",
        "definition",
        "purpose",
        "compactBoundary",
        "instrumentBoundary",
        "nonClaims",
        "hierarchy",
        "publicViews",
        "orientationSequence",
        "publicPlaces",
        "authoritySources",
        "identifiers",
        "researchRelations",
        "publicRoutes",
      ],
      properties: {
        name: { const: "NEXAH" },
        fullName: { type: "string" },
        publicUrl: { type: "string", format: "uri" },
        definition: { type: "string" },
        purpose: { type: "string" },
        compactBoundary: { type: "string" },
        instrumentBoundary: { type: "string" },
        nonClaims: { type: "array", items: { type: "string" } },
        hierarchy: { type: "array", items: { $ref: "#/$defs/namedBoundary" } },
        publicViews: { type: "array", items: { type: "object" }, minItems: 3, maxItems: 3 },
        orientationSequence: { type: "array", items: { type: "object" }, minItems: 5, maxItems: 5 },
        publicPlaces: { type: "array", items: { type: "object" } },
        authoritySources: { type: "array", items: { type: "object" } },
        identifiers: { type: "array", items: { type: "object" } },
        researchRelations: { type: "array", items: { type: "object" } },
        publicRoutes: { type: "array", items: { type: "object" } },
      },
      additionalProperties: false,
    },
  },
  $defs: {
    namedBoundary: {
      type: "object",
      required: ["name", "role", "boundary"],
      properties: {
        name: { type: "string" },
        role: { type: "string" },
        boundary: { type: "string" },
      },
      additionalProperties: false,
    },
  },
  additionalProperties: false,
};

export const GET: APIRoute = () => new Response(JSON.stringify(schema, null, 2), {
  headers: {
    "Content-Type": "application/schema+json; charset=utf-8",
  },
});
