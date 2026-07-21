export const thresholdModes = Object.freeze(["EXPLAIN", "FIND", "ORIENT", "ORION_AVAILABLE", "CLARIFY", "BOUNDARY"]);

export function normalizeThresholdInput(value) {
  return String(value ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[^a-z0-9:'-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function actionFromReference(reference, dependencies) {
  if (reference.kind === "route") return { label: reference.label, href: reference.href };
  if (reference.kind === "door") {
    const door = dependencies.doors.find((item) => item.id === reference.id);
    return door ? { label: reference.label ?? `Enter ${door.label}`, href: `/explore/${door.id}/` } : null;
  }
  if (reference.kind === "guided") {
    const beginning = dependencies.guidedBeginnings.find((item) => item.id === reference.id);
    return beginning ? { label: reference.label ?? beginning.title, href: beginning.href } : null;
  }
  if (reference.kind === "publication") {
    const publication = dependencies.publications.find((item) => item.catalogKey === reference.id);
    return publication ? { label: reference.label ?? publication.title, href: `/library/${publication.routeSlug}/` } : null;
  }
  if (reference.kind === "registered-request") {
    const request = dependencies.registeredRequests.find((item) => item.id === reference.id);
    return request ? { label: reference.label ?? "Open the registered request", href: `/orientation/?question=${encodeURIComponent(request.utterance)}` } : null;
  }
  if (reference.kind === "explanation") {
    const explanation = dependencies.knowledge.find((item) => item.id === reference.id);
    const phrase = explanation?.acceptedPhrases?.[0];
    return phrase ? { label: reference.label ?? explanation.title, href: `/threshold/?question=${encodeURIComponent(phrase)}` } : null;
  }
  return null;
}

function resolveActions(references, dependencies) {
  return references.map((reference) => actionFromReference(reference, dependencies)).filter(Boolean).slice(0, 3);
}

function publicationSummary(publication) {
  return {
    catalogKey: publication.catalogKey,
    title: publication.title,
    type: publication.type,
    form: publication.form,
    series: publication.series,
    routeSlug: publication.routeSlug,
    availability: publication.localBook ? "locally-readable" : "catalog-record-only",
    sourceAvailable: Boolean(publication.sourceUrl),
    reviewState: publication.revisionState,
  };
}

function findExplicitPublications(query, publications) {
  const normalizedQuery = normalizeThresholdInput(query);
  const keyPrefix = "catalog key ";
  if (normalizedQuery.startsWith(keyPrefix)) {
    const key = normalizedQuery.slice(keyPrefix.length);
    return publications.filter((item) => normalizeThresholdInput(item.catalogKey) === key);
  }

  const metadataPatterns = [
    ["find series ", "series"],
    ["find type ", "type"],
    ["find form ", "form"],
  ];
  for (const [prefix, field] of metadataPatterns) {
    if (normalizedQuery.startsWith(prefix)) {
      const value = normalizedQuery.slice(prefix.length);
      return publications.filter((item) => normalizeThresholdInput(item[field]) === value);
    }
  }

  const titlePrefixes = ["find publication ", "find ", "what is ", "show me publication ", "open "];
  const prefix = titlePrefixes.find((candidate) => normalizedQuery.startsWith(candidate));
  if (!prefix) return [];
  const titleNeedle = normalizedQuery.slice(prefix.length).trim();
  if (titleNeedle.length < 4) return [];
  return publications.filter((item) => normalizeThresholdInput(item.title).includes(titleNeedle));
}

function findExplanation(input, knowledge) {
  return knowledge.find((record) => record.acceptedPhrases.some((phrase) => normalizeThresholdInput(phrase) === input));
}

function findIntent(input, intents) {
  return intents.find((intent) => intent.acceptedPhrases.some((phrase) => normalizeThresholdInput(phrase) === input));
}

export function resolveThreshold(question, dependencies) {
  const normalized = normalizeThresholdInput(question);
  if (!normalized) {
    return {
      mode: "BOUNDARY",
      title: "Bring one bounded question.",
      explanation: "No request was supplied. Choose an example, enter an editorial door or leave without beginning.",
      actions: [{ label: "Explore without asking", href: "/explore/" }],
    };
  }

  const explanation = findExplanation(normalized, dependencies.knowledge);
  if (explanation) {
    return {
      mode: "EXPLAIN",
      title: explanation.title,
      explanation: explanation.explanation,
      provenance: explanation.provenance,
      reviewStatus: explanation.reviewStatus,
      actions: resolveActions(explanation.continuations, dependencies),
    };
  }

  const registeredRequest = dependencies.registeredRequests.find(
    (request) => request.acceptedPhrases.some((phrase) => normalizeThresholdInput(phrase) === normalized),
  );
  if (registeredRequest) {
    return {
      mode: "ORION_AVAILABLE",
      title: "A registered deterministic request exists.",
      explanation: `ORION supports exactly: “${registeredRequest.utterance}” The Threshold has not invoked ORION. Continue only if you want to confirm this unchanged request.`,
      requestId: registeredRequest.id,
      actions: resolveActions([{ kind: "registered-request", id: registeredRequest.id }], dependencies),
    };
  }

  const intent = findIntent(normalized, dependencies.intents);
  if (intent?.mode === "FIND") {
    const matches = findExplicitPublications(`find ${intent.catalogQuery}`, dependencies.publications);
    const continuation = intent.continuationDoorId ? [{ kind: "door", id: intent.continuationDoorId, label: "Continue through Journeys" }] : [];
    return {
      mode: "FIND",
      title: matches.length === 1 ? "One recorded publication matches." : `${matches.length} recorded publications match.`,
      explanation: "These results come from explicit Publication Catalog titles and metadata. A match is not a validation or evidence claim.",
      publications: matches.map(publicationSummary),
      actions: resolveActions([
        ...matches.slice(0, 2).map((item) => ({ kind: "publication", id: item.catalogKey })),
        ...continuation,
      ], dependencies),
    };
  }
  if (intent?.mode === "ORIENT") {
    const door = dependencies.doors.find((item) => item.id === intent.doorId);
    return {
      mode: "ORIENT",
      title: door ? `${door.label} is an explicit editorial door.` : "The requested door is unavailable.",
      explanation: door?.description ?? "No Navigation Catalog record matches this request.",
      actions: door ? resolveActions([{ kind: "door", id: door.id }], dependencies) : [],
    };
  }
  if (intent?.mode === "CLARIFY") {
    const clarification = dependencies.clarifications.find((item) => item.id === intent.clarificationId);
    if (clarification) {
      return {
        mode: "CLARIFY",
        title: clarification.title,
        explanation: clarification.explanation,
        actions: resolveActions(clarification.options, dependencies),
      };
    }
  }

  const publicationMatches = findExplicitPublications(question, dependencies.publications);
  if (publicationMatches.length) {
    return {
      mode: "FIND",
      title: publicationMatches.length === 1 ? "One recorded publication matches." : `${publicationMatches.length} recorded publications match.`,
      explanation: "These results use explicit Publication Catalog titles or declared metadata fields. No semantic similarity or hidden ranking was applied.",
      publications: publicationMatches.map(publicationSummary),
      actions: resolveActions(publicationMatches.slice(0, 3).map((item) => ({ kind: "publication", id: item.catalogKey })), dependencies),
    };
  }

  return {
    mode: "BOUNDARY",
    title: "No supported NEXAH route currently matches.",
    explanation: "This interface helps visitors understand and navigate NEXAH. It does not answer general world-knowledge questions or invent a route from unsupported language.",
    actions: [
      { label: "What is NEXAH?", href: "/threshold/?question=what%20is%20nexah" },
      { label: "Explore without asking", href: "/explore/" },
      { label: "Leave the orientation", href: "/departure/" },
    ],
  };
}
