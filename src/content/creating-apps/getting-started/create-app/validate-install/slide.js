window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/getting-started/create-app/validate-install"] = {
  "id": "validate-install",
  "uuid": "e60ca2bb-b162-437f-93c5-ac22e20b9043",
  "slideSchemaVersion": 2,
  "level": "foundations",
  "order": 30,
  "title": "Verify the installation in a web browser",
  "contentUpdatedAt": "2026-10-21T12:10:28.221Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "From the cloned project folder, double-click `index.html` to open it in a web browser. The template app should load from a local `file:///` URL; a remote server is not required.\n\nIf the page is blank, malformed, or reports missing framework files:\n\n- Confirm that `src/um-agentic-ed-framework` contains files rather than an empty folder.\n- Run `git submodule update --init --recursive` from the Parent repository root.\n- Reload `index.html`.\n\n## Browser support\n\nYour app should run in any browser. However, you must use Chrome or Edge when you edit content inside the running app; Safari does not support the required system file access."
      }
    ]
  }
};
