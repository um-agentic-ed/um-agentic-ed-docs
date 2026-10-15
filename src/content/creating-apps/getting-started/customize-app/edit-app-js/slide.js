window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/getting-started/customize-app/edit-app-js"] = {
  "id": "edit-app-js",
  "uuid": "1f64f500-1fd3-4855-be48-a146af596a78",
  "slideSchemaVersion": 2,
  "level": "core-learning",
  "order": 30,
  "title": "Edit `app.js` to declare app metadata",
  "contentUpdatedAt": "2026-10-15T17:57:39.700Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "The root `app.js` file assigns `window.umedAppIdentity`. Change its values without changing the assignment structure.\n\n| Field | Purpose | Key constraint |\n| --- | --- | --- |\n| `appUuid` | Permanent identity used for learner notes | Generate once for a new app; never change after use |\n| `appName` | Safe name used in exported-note filenames | Lowercase letters, numbers, and hyphens |\n| `appTitle` | Header and browser-tab title | Human-readable and concise |\n| `subjectsEnabled` | Shows or suppresses subject navigation | Must agree with the content hierarchy |\n| `discipline`, `learnerLevel` | Context supplied to chatbot prompts | Describe the intended learning context |\n| `chatbotUrl` | Chatbot opened for slide questions | Use `http://`, `https://`, or leave blank |\n| `allowedEditorNames` | Names accepted by editor mode | Convenience only, not authentication |"
      }
    ]
  }
};
