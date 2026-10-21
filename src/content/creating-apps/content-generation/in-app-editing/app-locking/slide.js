window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/content-generation/in-app-editing/app-locking"] = {
  "id": "app-locking",
  "uuid": "27305e1b-787f-438c-8910-53b8978e9ddf",
  "slideSchemaVersion": 2,
  "title": "App locking to prevent editing collisons",
  "level": "foundations",
  "order": 25,
  "contentUpdatedAt": "2026-10-21T20:16:10.141Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "An app folder is potentially subject to editing by multiple editors and/or agents. To prevent editing collisions, editing mode and agent instructions create file **`APP_LOCK.js` in the root folder** as a signal that the app is being edited to prevent anyone else from gaining write access.\n\nApp (un)locking usually happens automatically, but in rare cases you may find that an app lock has been left in place after a fatal error. You can simply delete the file to unlock the app and start again. \n\nYou should not delete a lock owned by someone else without verifying that it is no longer needed. This is the point of `allowedEditorNames` in `app.js`; each lock file records who owns it so you may check with them."
      },
      {
        "type": "divider"
      },
      {
        "type": "question",
        "prompt": "What should you do when `APP_LOCK.js` already exists and you are being denied write access?",
        "choices": [
          {
            "text": "Stop and determine whether another edit is active.",
            "correct": true,
            "feedback": "An existing lock must be respected unless removal is explicitly authorized."
          },
          {
            "text": "Delete it if its timestamp looks old.",
            "correct": false,
            "feedback": "Time alone does not prove that a lock is stale."
          },
          {
            "text": "Create a second lock.",
            "correct": false,
            "feedback": "Multiple locks defeat the intended editor/agent coordination."
          }
        ]
      }
    ]
  }
};
