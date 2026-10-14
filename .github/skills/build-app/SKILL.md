---
name: build-app
description: Run a Framework-supported task that creates, configures, maintains, or populates this App.
disable-model-invocation: true
argument-hint: "<task-name> [arguments]"
---

## Usage

Use `/build-app <task-name> [arguments]` for Editor-directed work on this App.
Use `/build-app list` to show the tasks supported by the installed Framework.

## Instructions for the agent

1. Read the Parent `AGENTS.md` and
   `src/um-agentic-ed-framework/AGENTS.md` in full before proceeding.
2. Read `src/um-agentic-ed-framework/app/schema-contract.js` and
   `src/um-agentic-ed-framework/agent-skills/manifest.json`. Require the
   manifest's `skillManifestSchemaVersion` and structure to satisfy the current
   Framework skill-manifest contract. Treat its `buildAppTasks` entries as the
   complete allowlist of task names; never interpret the user-supplied task name
   as a file path.
3. If the task is `list`, report each manifest task's name, description, and
   argument hint without changing files.
4. Otherwise require an exact manifest task-name match. If it is absent, make
   no changes and report the available names. If it matches, require its file
   to be the flat `agent-skills/<task-name>.md` path, read that Framework
   instruction file in full, and follow it with the remaining arguments and
   Editor brief.
5. Invocation authorizes only App-specific changes allowed by that task. It
   does not authorize Framework code, shared contracts, Parent system files,
   or a migration reserved for `/migrate-app`.
4. Acquire and release the app lock according to the rules outlined in 
   `src/um-agentic-ed-framework/AGENTS.md` if the task requires content changes 
   not just read-only analysis.

If the manifest or selected instruction file is missing or malformed, stop and
report that the Framework skill installation is incomplete rather than falling
back to remembered or stale task instructions.
