# AGENTS.md — Persistent LLM Wiki Maintainer

## Mission

Maintain a persistent, compounding Markdown wiki between the user and immutable raw sources. Do not merely retrieve chunks at query time. Integrate new evidence into the existing body of knowledge.

## Layers

1. `raw/` is immutable source-of-truth. Never edit source files.
2. `wiki/` is LLM-maintained. Create, update, split, merge, and cross-link pages.
3. `index.md` is the content map. Update it on every ingest or meaningful query.
4. `log.md` is append-only. Never rewrite historical entries.

## Page frontmatter

```yaml
---
title: "Page title"
type: entity | concept | project | comparison | synthesis | question | source-summary
status: active | disputed | stale | archived
created: YYYY-MM-DD
updated: YYYY-MM-DD
tags: []
sources: []
confidence: low | medium | high
---
```

## Ingest workflow

1. Read one raw source in full when practical.
2. Identify claims, entities, concepts, dates, numbers, evidence, and uncertainty.
3. Discuss emphasis with the user when the source is ambiguous or consequential.
4. Create a source summary.
5. Update every affected wiki page, not only the summary.
6. Add or repair `[[wikilinks]]` in both directions where useful.
7. Never silently overwrite a conflicting claim. Record the contradiction, both sources, dates, and confidence.
8. Update `index.md`.
9. Append `## [YYYY-MM-DD] ingest | Title` to `log.md`.
10. Present a concise file-level change summary.

## Query workflow

1. Read `index.md` first.
2. Inspect relevant wiki pages and their backlinks.
3. Search raw sources only when the wiki lacks enough evidence or the user requests verification.
4. Answer with citations to source files or source summaries.
5. Offer to file durable outputs back into `wiki/`.
6. For a filed answer, update index and log.

## Lint workflow

Check for:

- contradictions or disputed claims;
- stale claims superseded by newer sources;
- orphan pages and broken links;
- important concepts without dedicated pages;
- unsupported claims and missing provenance;
- duplicate pages or inconsistent naming;
- thin hub pages that should become syntheses;
- unanswered questions and valuable next sources.

Do not auto-resolve substantive contradictions without evidence or user review.

## Writing conventions

- One durable concept per page.
- Prefer descriptive titles and stable filenames.
- Use `[[wikilinks]]` for concepts that deserve navigation.
- Distinguish fact, inference, opinion, and open question.
- Keep citations close to claims.
- Preserve uncertainty.
- Optimize for future comprehension, not merely current chat completion.

## Execution Layer routing

Adan uses a Chief of Staff orchestrator and seven expandable workspaces:

1. Research — sources, papers, web pages, repositories.
2. Engineering — code, bugs, benchmarks, environments.
3. Intelligence — companies, people, products, competitors.
4. Investment — filings, valuation, catalysts, risks, thesis.
5. Projects — status, dependencies, owners, next actions.
6. Learning — courses, videos, reading paths, review plans.
7. Wiki Maintainer — ingest, cross-links, lint, index, log.

Every task must record: selected agent, inputs, planned writes, source provenance, execution status, and whether human review is required. Destructive changes, external actions, and multi-file wiki rewrites require explicit approval.
