---
name: migrate-app
description: Apply documented Parent App migrations required by the installed Framework version.
disable-model-invocation: true
---

## Usage

Use `/migrate-app` after updating the Framework submodule when that Framework
version documents breaking Parent App or content-schema changes.

## Instructions for the agent

1. Read the Parent `AGENTS.md` and
   `src/um-agentic-ed-framework/AGENTS.md` in full.
2. Read
   `src/um-agentic-ed-framework/agent-skills/migrate-app.md` in full and follow
   only the migrations it identifies as applicable.
3. Invocation authorizes documented changes to this Parent App that are needed
   for those migrations. It does not authorize editing Framework files,
   inventing an undocumented migration, or making unrelated App changes.
4. Acquire and release the app lock according to the rules outlined in 
   `src/um-agentic-ed-framework/AGENTS.md` if initial evaluation reveals that a 
   migration needs to be applied.

If the Framework instruction file is missing, stop without changing files and
report that the installed Framework does not provide migration instructions.
