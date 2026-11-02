window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/app-organization/app-switchboards/create-app-list-url"] = {
  "id": "create-app-list-url",
  "uuid": "2b23d2ec-877f-4a5d-a448-7b27de3f9a3e",
  "slideSchemaVersion": 2,
  "level": "advanced-topics",
  "order": 10,
  "title": "Create an app list URL",
  "contentUpdatedAt": "2026-11-02T00:29:47.695Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "App switchboards are intended as an identical slide block shared across multiple apps, which means that the **app list in a switchboard is managed externally** to any one app.\n\n## Where to deploy an app list\n\nExpose a single URL that the switchboard block on every app landing page can use as its data source. Any valid, conforming URL is acceptable, which might be:\n- a relative local file URL if you will only use a static local deployment.\n- a public URL to a file server API you control or a GitHub repository that carries the app list.\n\nIt is your choice, but the URL must return the JSON structure described on the next slide.\n\nIf you use a GitHub repository to house your app list (recommended), you should usually use a \"raw\" URL to that file and make the repository public."
      }
    ]
  }
};
