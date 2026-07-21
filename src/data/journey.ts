export type JourneyContinuation = {
  currentRef: string;
  step: number;
  total: number;
  eyebrow: string;
  title: string;
  description: string;
  nextHref: string;
  nextLabel: string;
};

export const firstOrientationQuestion =
  "I want to understand how this observation reaches the calendar.";

export const firstOrientationContinuations: readonly JourneyContinuation[] = [
  {
    currentRef: "book:cartography-laboratory",
    step: 3,
    total: 7,
    eyebrow: "Continue through the field",
    title: "Stay with observation",
    description:
      "The route has shown its boundary. This work gives that boundary a wider setting. Now follow observation itself.",
    nextHref: "/atlas/concepts/observation/#first-orientation",
    nextLabel: "Enter Observation",
  },
  {
    currentRef: "concept:observation",
    step: 4,
    total: 7,
    eyebrow: "From idea to practice",
    title: "Let observation become a gesture",
    description:
      "Observation names what is held in view. The next room asks what it means to observe deliberately.",
    nextHref: "/atlas/operators/observe/#first-orientation",
    nextLabel: "Continue to Observe",
  },
  {
    currentRef: "operator:observe",
    step: 5,
    total: 7,
    eyebrow: "From practice to quality",
    title: "Notice what observation asks of attention",
    description:
      "To observe is not only to look. It is to decide what receives care while leaving room for what is not yet clear.",
    nextHref: "/atlas/themes/attention/#first-orientation",
    nextLabel: "Continue to Attention",
  },
  {
    currentRef: "theme:attention",
    step: 6,
    total: 7,
    eyebrow: "Return to the Library",
    title: "Follow attention back into wonder",
    description:
      "Attention opens a way of meeting the unknown without forcing it closed. One publication carries that practice further.",
    nextHref: "/library/wonder-operator/#first-orientation",
    nextLabel: "Read The Wonder Operator",
  },
  {
    currentRef: "book:wonder-operator",
    step: 7,
    total: 7,
    eyebrow: "Leave the path open",
    title: "The journey does not need a conclusion",
    description:
      "You have followed a boundary into observation, attention and wonder. The question can remain alive without becoming an answer.",
    nextHref: "/departure/",
    nextLabel: "Leave with the question",
  },
] as const;

const continuationByRef = new Map(
  firstOrientationContinuations.map((continuation) => [continuation.currentRef, continuation]),
);

export function getFirstOrientationContinuation(currentRef: string) {
  return continuationByRef.get(currentRef);
}
