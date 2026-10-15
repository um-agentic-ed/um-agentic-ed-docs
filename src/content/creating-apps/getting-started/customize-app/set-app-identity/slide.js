window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/getting-started/customize-app/set-app-identity"] = {
  "id": "set-app-identity",
  "uuid": "5abb5e94-6ef1-4875-b3c6-d79a590ba2f3",
  "slideSchemaVersion": 2,
  "level": "advanced-topics",
  "order": 60,
  "title": "Agent skill `set-app-identity`",
  "contentUpdatedAt": "2026-10-15T18:11:50.145Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "Instead of editing every identity value by hand, you can instead run this framework-supported task in your coding agent:\n\n```text\n/build-app set-app-identity <requested identity or branding changes>\n```\n\nThe skill reads the current `app.js` and `app.css`, collects missing choices, validates names and URLs, checks color contrast, and creates a unique UUID for your app when needed.\n\nThis could be your first chance to see how effective your agent can be at helping build your app!"
      }
    ]
  }
};
