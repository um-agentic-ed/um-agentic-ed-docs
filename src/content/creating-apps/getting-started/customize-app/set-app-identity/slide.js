window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/getting-started/customize-app/set-app-identity"] = {
  "id": "set-app-identity",
  "uuid": "5abb5e94-6ef1-4875-b3c6-d79a590ba2f3",
  "slideSchemaVersion": 2,
  "level": "advanced-topics",
  "order": 60,
  "title": "Use agent skill `set-app-identity`",
  "contentUpdatedAt": "2026-10-21T12:24:17.962Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "Instead of editing app identity values by hand, you can instead invoke this framework-supported skill in your coding agent:\n\n```text\n/build-app set-app-identity <requested identity or branding changes>\n```\n\nThe skill reads the current `app.js` and `app.css` files, collects missing choices, validates names and URLs, checks color contrast, and creates a unique UUID for your app as needed.\n\nThis could be your first chance to see how helpful your agent can be when building build your app!"
      }
    ]
  }
};
