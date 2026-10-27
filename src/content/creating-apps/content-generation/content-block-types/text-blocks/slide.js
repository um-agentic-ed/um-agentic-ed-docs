window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/content-generation/content-block-types/text-blocks"] = {
  "id": "text-blocks",
  "uuid": "63cb5e90-aea0-4df4-a454-ca3b1d2346f8",
  "slideSchemaVersion": 2,
  "title": "Text blocks",
  "level": "core-learning",
  "order": 10,
  "contentUpdatedAt": "2026-10-26T18:52:59.091Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "A {.large-bold `Text`} {.bold block} is used on most slides. You enter text in markdown format and the app uses the [markdown-it](https://github.com/markdown-it/markdown-it) library to render it into  **formatted text**. \n\n## Using markdown\n\nMarkdown is easy—just type text and it will render as regular paragraphs. Continue by adding formatting marks, e.g., `**bold text**` will render **bold text**.\n\nAn example text block with the most common uses is provided below; see the [markdown-it syntax guide](https://markdown-it.github.io/) for additional features.\n\nAI agents can also convert a document to markdown for you.\n\n## Custom text styles\n\nYou can create your own custom text styles within `app.css`, or use pre-defined styles from `src/um-agentic-ed-framework/styles/markdown-styles.css`, and apply them to any text with syntax `{.custom-style target content}`, e.g., `{.blue blue}` gives {.blue blue} text.\n\n"
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
