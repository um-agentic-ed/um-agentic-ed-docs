---
name: develop-system
description: Authorize work on the shared um-agentic-ed system and Framework within the stated brief.
disable-model-invocation: true
argument-hint: "<brief>"
---

## Usage

Use `/develop-system <brief>` when changing the structure, contracts, logic, or
shared implementation of `um-agentic-ed`, rather than building one App's
identity or educational content.

## Authorization and instructions

Invocation authorizes system-level changes only within the accompanying brief.
It does not authorize unrelated changes, unacknowledged compatibility breaks,
or changes to App educational content.

Before acting:

1. Read the Parent `AGENTS.md` and
   `src/um-agentic-ed-framework/AGENTS.md` in full.
2. Read
   `src/um-agentic-ed-framework/agent-skills/develop-system.md` in full and
   follow its implementation constraints.
3. Preserve compatibility with existing Apps unless the Developer explicitly
   authorizes an identified breaking change.
4. Acquire and release the app lock according to the rules outlined in 
   `src/um-agentic-ed-framework/AGENTS.md` if the brief requests codebase and/or 
   content changes not just read-only analysis.

If the Framework instruction file is missing, stop without changing files and
report that the installed Framework development instructions are incomplete.
