window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/app-organization/app-switchboards/add-switchboard"] = {
  "id": "add-switchboard",
  "uuid": "467137e8-9916-4f84-b59f-dddc9712884a",
  "slideSchemaVersion": 2,
  "level": "advanced-topics",
  "order": 20,
  "title": "Add a switchboard block to your app overview",
  "contentUpdatedAt": "2026-11-02T00:28:19.706Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "Once you have a valid URL to a properly formatted app list, deploying it is easy---simply add a **Switchboard** block to your app landing slide (the only slide type that supports switchboards).\n\nUse the same URL for all sister apps in your overall project and the block will do the rest.\n\nUpdating the JSON data returned by the URL will update all switchboards as they are reloaded."
      },
      {
        "type": "image",
        "markdown": "## Example\n\nThis switchboard:",
        "images": [
          {
            "source": "slide",
            "url": "switchboard_block.jpg"
          }
        ],
        "alt": "",
        "maxWidths": "95%",
        "center": true,
        "label": null
      },
      {
        "type": "text",
        "markdown": "will display a table that starts as follows:\n\n---\nChoose an app:"
      },
      {
        "type": "image",
        "markdown": "",
        "images": [
          {
            "source": "slide",
            "url": "switchboard_example.jpg"
          }
        ],
        "alt": "",
        "maxWidths": "95%",
        "center": true,
        "label": "Switchboard table headers, followed by apps and other groups"
      }
    ]
  }
};
