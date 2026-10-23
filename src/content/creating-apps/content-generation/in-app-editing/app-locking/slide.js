window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/content-generation/in-app-editing/app-locking"] = {
  "id": "app-locking",
  "uuid": "27305e1b-787f-438c-8910-53b8978e9ddf",
  "slideSchemaVersion": 2,
  "title": "App locking to prevent editing collisons",
  "level": "foundations",
  "order": 23,
  "contentUpdatedAt": "2026-10-21T21:44:58.162Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "An app might be edited by multiple editors and/or agents. To prevent collisions, editing mode and agent instructions create file **`APP_LOCK.js` in the root folder** to signal that the app is being edited and prevent anyone else from gaining write access.\n\nApp (un)locking happens automatically, but in rare cases a lock may be left in place after a fatal error. You can simply delete file `APP_LOCK.js`  to unlock the app and start again. \n\nDo not delete a lock owned by someone else without verifying that it is no longer needed. Each lock file records who owns it so you may check with them."
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
