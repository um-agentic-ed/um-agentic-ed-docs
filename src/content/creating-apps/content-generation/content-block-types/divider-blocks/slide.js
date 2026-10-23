window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/content-generation/content-block-types/divider-blocks"] = {
  "id": "divider-blocks",
  "uuid": "7b9d617c-89ca-4fa8-8e69-4a44315c336e",
  "slideSchemaVersion": 2,
  "title": "Divider blocks",
  "level": "core-learning",
  "order": 60,
  "contentUpdatedAt": "2026-10-22T21:53:37.503Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "A {.large-bold `Divider`} {.bold block} renders a **horizontal rule** between neighboring blocks; its only purpose is visual separation.\n\nA divider can also be created using a standard `---` line inside markdown text—use whichever method you prefer; divider blocks are more verbose but easier to move around.\n\n```\n---\nSlide text.\n```"
      },
      {
        "type": "image",
        "markdown": "## Example",
        "images": [
          {
            "source": "slide",
            "url": "divider_block.jpg"
          }
        ],
        "alt": "",
        "maxWidths": "600px",
        "center": true,
        "label": null
      },
      {
        "type": "divider"
      },
      {
        "type": "text",
        "markdown": "The horizontal rule above is from a divider block.\n\n---\n\nThe horizontal rule above is from `---` in a markdown field."
      }
    ]
  }
};
