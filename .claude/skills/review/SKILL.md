---
name: review
description: Multi-layer code quality review — mechanical checks, logic analysis, and cross-file consistency
allowed-tools: ["Bash", "Read", "Glob", "Grep"]
---

# Code Review Skill

Three-layer code review: fast mechanical scan, deep logic analysis, cross-file consistency check.

## 1. Scope

Run **in parallel**:
- `git diff --cached --name-only`
- `git diff --name-only`
- `git ls-files --others --exclude-standard`

Changed files exist → review only those. Clean tree → `git ls-files` to get all tracked source files.

## 2. Gather (parallel)

- Read all in-scope source files
- Run build and capture the last 20 lines of output

## 3. Layer 1 — Mechanical Scan

Fast, greppable checks. Run Grep calls **in parallel** where possible.

**Security**
- `target="_blank"` without `rel="noopener noreferrer"` on same element
- `v-html` usage anywhere
- Patterns: `api[_-]?key|secret|token|password|credential` near `[:=]`

**Integrity**
- Build exit code non-zero

**Lifecycle**
- `addEventListener|setInterval|setTimeout|requestAnimationFrame` — verify each has matching cleanup
- Top-level `ref()`/`reactive()` outside function scope (SSR risk)

**i18n**
- Keys present in `locales/en.json` but missing in `locales/zh.json`, or vice versa
- Hardcoded user-facing text in `<template>` that should use `t()`

**Style**
- `<script setup>` missing `lang="ts"`
- `v-for` missing `:key`

## 4. Layer 2 — Logic Analysis

Read each file and reason about it. Focus on issues a linter cannot catch — use your judgment, not a checklist.

- **Correctness** — logic errors, race conditions, unguarded null access, off-by-one
- **Framework usage** — reactivity pitfalls, lifecycle misuse, SSR/hydration safety, dynamic bindings with unvalidated input
- **Design** — unclear responsibilities, unused imports/props, misplaced state or data fetching

## 5. Layer 3 — Cross-File Consistency

Look across all reviewed files as a whole:

- **Pattern consistency**: same problem solved differently in different files (e.g., one file uses `useAsyncData`, another uses raw `$fetch`)
- **Naming consistency**: similar things named differently across files
- **Style consistency**: one file uses different conventions than the rest (per CLAUDE.md)
- **Dead code**: components, composables, or exports that no file imports
- **Dependency direction**: components fetching data that should come from pages via props

## 6. Report

Only output the reviewed file list and findings. Do not narrate the execution process of each step.

Group findings by severity. Be specific — file path, line number, the actual code, why it's wrong, how to fix it.

**Severity criteria:**
- **Critical** — Will break at runtime, create a security vulnerability, or cause data loss. Must fix.
- **Warning** — Violates project conventions, creates maintenance burden, or has a subtle bug risk. Should fix.
- **Suggestion** — Could be cleaner, more consistent, or more performant. Nice to have.

Report format is flexible — prioritize clarity over rigid templates. Always end with a one-line summary: how many issues at each level, overall assessment.

If zero issues: output only the file list and the summary line. No explanation needed.
