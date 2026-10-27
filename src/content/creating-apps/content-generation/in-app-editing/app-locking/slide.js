window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/content-generation/in-app-editing/app-locking"] = {
  "id": "app-locking",
  "uuid": "27305e1b-787f-438c-8910-53b8978e9ddf",
  "slideSchemaVersion": 2,
  "title": "App locking to prevent editing collisons",
  "level": "foundations",
  "order": 30,
  "contentUpdatedAt": "2026-10-24T21:38:42.787Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "An app might be edited by multiple editors and agents. To prevent collisions, editing mode and agent instructions create file **`APP_LOCK.js` in the root folder** to signal that the app is being edited and prevent anyone else from gaining write access.\n\nApp (un)locking happens automatically, but in rare cases a lock may be left in place in error. If you own a lock file, you can simply delete it to unlock the app and start again. However, do not delete a lock owned by someone else without verifying it is no longer needed (the file records who owns it)."
      },
      {
        "type": "divider"
      },
      {
        "type": "question",
        "prompt": "What should you do when `APP_LOCK.js` already exists and you are being denied write access?",
        "choices": [
          {
            "text": "Stop and determine whether another editor's session is active.",
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
            "feedback": "There is only one lock file called `./APP_LOCK.js`."
          }
        ]
      }
    ]
  }
};
