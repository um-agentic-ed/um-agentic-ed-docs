window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/getting-started/customize-app/protected-files"] = {
  "id": "protected-files",
  "uuid": "a6cbb4e0-bc29-4fef-b8c0-7859bdd66da4",
  "slideSchemaVersion": 2,
  "level": "advanced-topics",
  "order": 70,
  "title": "Do not edit these files",
  "contentUpdatedAt": "2026-10-15T18:18:15.238Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "Normal app customization should leave system-owned files unchanged - they are the minimal parent content that for structural reasons must remain in your app rather than being in framework submodule files.\n\n- {.large-bold `src/um-agentic-ed-framework`}: the code that makes your app work!\n- {.large-bold `.gitmodules`}: the framework submodule connection\n- {.large-bold `.github/skills`}: parent entrypoints for framework-supported agent tasks\n- {.large-bold `.gitignore`}:  exclusions for files you don't want in your app repository\n- the HTML launcher file contents\n- system-governed portions of the parent `AGENTS.md`\n\nYou may rename the `index.html` launcher file without changing its contents. "
      }
    ]
  }
};
