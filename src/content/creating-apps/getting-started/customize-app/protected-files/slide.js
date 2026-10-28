window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/getting-started/customize-app/protected-files"] = {
  "id": "protected-files",
  "uuid": "a6cbb4e0-bc29-4fef-b8c0-7859bdd66da4",
  "slideSchemaVersion": 2,
  "level": "advanced-topics",
  "order": 70,
  "title": "Do not edit these files",
  "contentUpdatedAt": "2026-10-28T13:08:44.247Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "Normal app customization should leave system-owned files unchanged - they are the minimal content that must remain in your app rather than being in the framework submodule.\n\n- {.large-bold `src/um-agentic-ed-framework`}: the code that makes your app work!\n- {.large-bold `.gitmodules`}: the framework submodule connection\n- {.large-bold `.gitignore`}:  exclusions for files you don't want in your app repository\n- {.large-bold `.github/skills`}: parent entrypoints for framework-supported agent tasks\n- {.large-bold `.nojekyll`}: tells GitHub Pages that an app is a static web repository \n- the HTML launcher file's contents\n- system-governed portions of the parent `AGENTS.md`\n\nYou may **rename the `index.html` launcher file** to match to your app, but do not change its contents. "
      }
    ]
  }
};
