window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/content-generation/in-app-editing/entering-editor-mode"] = {
  "id": "entering-editor-mode",
  "uuid": "b9ec444f-a605-4dfc-a9dc-9d3b17152548",
  "slideSchemaVersion": 2,
  "title": "Entering and exiting editor mode",
  "level": "foundations",
  "order": 20,
  "contentUpdatedAt": "2026-10-21T20:20:36.251Z",
  "content": {
    "blocks": [
      {
        "type": "image",
        "markdown": "## Editor mode toggle (on the app title)\n\nTo toggle live in-app editing, **Ctrl-click/Cmd-click on your app title** in the upper left of the running app (we don't expose the toggle as a button in case you share your app as a full repository).",
        "images": [
          {
            "source": "slide",
            "url": "top_left_v2.jpg"
          }
        ],
        "alt": "",
        "maxWidths": "400px",
        "center": true,
        "label": null
      },
      {
        "type": "text",
        "markdown": "\n\n## Grant browser permissions to your app folder \n\nThe first time you enter editor mode in a browser session you will be prompted to **select the path to your root app folder**, and **allow the browser to read and write** from it—a critical security feature that prevents typical web pages from accessing your computer.\n\n## Enter your editor name\n\nNext, enter a valid editor name that you previously recorded in the `allowedEditorNames` field in your app's root `app.js` file. \n\nEditor names are a convenience feature used during app locking and are not an authentication mechanism—security is determined much more by who has access to your app repository folder.\n"
      }
    ]
  }
};
