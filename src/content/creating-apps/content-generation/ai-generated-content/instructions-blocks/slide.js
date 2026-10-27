window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/content-generation/ai-generated-content/instructions-blocks"] = {
  "id": "instructions-blocks",
  "uuid": "5ae7fd50-1355-4536-b08a-2d4b33eea059",
  "slideSchemaVersion": 2,
  "title": "Instructions blocks",
  "level": "advanced-topics",
  "order": 30,
  "contentUpdatedAt": "2026-10-27T00:17:16.285Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "An {.large-bold `Instructions `} {.bold block} provides non-rendered **agent instructions** for an entire slide, section, category, or subject (in contrast to the related instructions field within a widget block).  \n\nType your instructions into the single instructions field and save the slide. Then, outside of the app, use any agentic AI environment to invoke the provided skill, i.e., `/build-app create-widget <path/to/tree/element>`. The agent will read your instructions in the context of the app system and generate slides matching your description for you to edit further.\n\n## Instructions are scoped down the tree\n\nInstructions generated for a regular slide apply only to that slide. Instructions for a higher tree level—entered on its landing slide—apply to all slides that an agent might generate for the section, category, or subject. \n\n## Instructions are archived\n\nYou could build your slides with agent instructions provided entirely outside of the app, but writing instructions in the app creates a permanent record for you, your agent, and collaborators to refer to later."
      },
      {
        "type": "image",
        "markdown": "## Example",
        "images": [
          {
            "source": "slide",
            "url": "instructions_block.jpg"
          }
        ],
        "alt": "",
        "maxWidths": "800px",
        "center": true,
        "label": null
      },
      {
        "type": "instructions",
        "instructions": "UNUSED - do not do anything. These instructions are present on this slide for demonstration purposes only, they were not used to generate this slide, and you should not modify the slide."
      }
    ]
  }
};
