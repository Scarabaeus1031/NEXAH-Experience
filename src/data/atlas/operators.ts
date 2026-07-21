import type { EditorialOperator } from "./types";

export const operators = [
  {
    id: "observe",
    title: "Observe",
    summary: "Attend before naming.",
    description: "Keeps the source visible while distinctions are gathered.",
    gesture: "Pause · notice · record",
  },
  {
    id: "map",
    title: "Map",
    summary: "Place landmarks and relations into a bounded view.",
    description: "Arranges known editorial relationships without creating new ones.",
    gesture: "Locate · relate · bound",
  },
  {
    id: "connect",
    title: "Connect",
    summary: "Make an explicit bridge between existing elements.",
    description: "Records a curated relation while preserving the identity of each side.",
    gesture: "Distinguish · bridge · preserve",
  },
  {
    id: "navigate",
    title: "Navigate",
    summary: "Move through a declared path without confusing the path with a decision.",
    description: "Supports movement between rooms, works and perspectives.",
    gesture: "Locate · choose · move",
  },
  {
    id: "transform",
    title: "Transform",
    summary: "Follow what changes between one form and another.",
    description: "Directs attention to preserved, hidden and changed information.",
    gesture: "Compare · change · inspect",
  },
  {
    id: "reflect",
    title: "Reflect",
    summary: "Return an orientation to human consideration.",
    description: "Creates no decision or evidence; it opens a human pause around what has been seen.",
    gesture: "Pause · consider · choose",
  },
] as const satisfies readonly EditorialOperator[];

export type OperatorId = (typeof operators)[number]["id"];
export const operatorById: ReadonlyMap<string, EditorialOperator> = new Map(operators.map((operator) => [operator.id, operator]));
