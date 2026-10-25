window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/content-generation/content-block-types/text-blocks"] = {
  "id": "text-blocks",
  "uuid": "63cb5e90-aea0-4df4-a454-ca3b1d2346f8",
  "slideSchemaVersion": 2,
  "title": "Text blocks",
  "level": "core-learning",
  "order": 10,
  "contentUpdatedAt": "2026-10-25T23:20:09.771Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "A {.large-bold `Text`} {.bold block} is the most common block type found on most slides. You enter text in markdown format and the app uses the `markdown-it` library to render it into  **formatted text**.\n\n## Using markdown\n\nMarkdown is easy! \n\nTo start, just type text and it will render as regular paragraphs. Then continue to add formatting marks, e.g., `**bold text**` will render **bold text**.\n\nAn example text block with the most common uses is provided below; see the [markdown-it syntax guide](https://markdown-it.github.io/) for additional features.\n\n## Custom text styles\n\nA great feature of `markdown-it` as implemented by `um-agentic-ed` is that you can create your own custom text styles within `app.css`, and apply them to any text with syntax `{.custom-style target content}`, e.g., `{.blue blue}` gives {.blue blue}.\n\n"
      },
      {
        "type": "image",
        "markdown": "## Example",
        "images": [
          {
            "source": "slide",
            "url": "text_block.jpg"
          }
        ],
        "alt": "",
        "maxWidths": "600px",
        "center": true,
        "label": null
      },
      {
        "type": "text",
        "markdown": "---\nThis `text block` shows the *most common* **markdown features**, including the use of {.red-large-bold custom styles}.\n\n## Second-level header\n\n### Third-level header\n\nA regular list:\n- First item.\n- Second item.\n  - Nested item.\n\nOrdered list:\n1. Item A.\n2. Item B.\n\nA table:\n\n| Column 1 | Column 2 |\n| --- | --- | \n| Value 1 | Value 2 |"
      }
    ]
  }
};
