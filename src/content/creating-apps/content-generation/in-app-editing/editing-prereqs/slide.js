window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/content-generation/in-app-editing/editing-prereqs"] = {
  "id": "editing-prereqs",
  "uuid": "4d346b2a-2377-4bcb-b9f1-09f08d8e0c9b",
  "slideSchemaVersion": 2,
  "title": "Prerequisites for live editing",
  "level": "foundations",
  "order": 10,
  "contentUpdatedAt": "2026-10-24T21:28:37.705Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "## Browser support\n\nAlthough your app should run in any browser, editor mode requires a browser that supports the File System Access API, such as a current **Chromium-based desktop browser** like Chrome or Edge. \n\nIn particular, Safari does not support the required system file access.\n\n## Recognized editor names\n\nYou must have added at least one entry into the `allowedEditorNames` field in `app.js`;  you will be asked for it to begin editing."
      },
      {
        "type": "gptFollowup",
        "questions": [
          "Help me check whether my browser and local app folder support in-app editing."
        ]
      }
    ]
  }
};
