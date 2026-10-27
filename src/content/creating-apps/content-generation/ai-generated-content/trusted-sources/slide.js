window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/content-generation/ai-generated-content/trusted-sources"] = {
  "id": "trusted-sources",
  "uuid": "8ce0ad44-2634-4b9a-9fd4-974aa3236f9a",
  "slideSchemaVersion": 2,
  "title": "Trusted Sources blocks",
  "level": "advanced-topics",
  "order": 40,
  "contentUpdatedAt": "2026-10-27T00:24:26.003Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "A {.large-bold `Trusted Sources`} {.bold block} provides inputs to **upload one or more context files** for agents to use when following your {.large-bold `Instructions`} to generate content slides. \n\nTrusted sources are preferred supplements to the AI model's pre-existing training you wish to give priority consideration when generating content.  Use your instructions to clarify how strictly the agent should rely on the provided materials. \n\n## Adding, archiving, and restoring trusted sources\n\nClick **Add Trusted Source** to add as many context files as you'd like. Click the `X` **Remove icon button** to either delete a file or archive it, and use the **Restore Source** button to bring it out of the archive and activate it again.\n\n## Use any file an agent can read\n\nThe app system does not itself restrict the kinds of files you can use as context, but provides guidance during upload that some files cannot be read by AI agents, e.g., binary files. Nearly all common text document formats, like `.txt`, `.csv`, `.docx`, `.pdf` and many others work fine.  \n\n## Trusted sources are scoped down the tree\n\nTrusted sources for a regular slide apply only to that slide. Sources for a higher tree level—entered on its landing slide—apply to all slides that an agent might generate for the section, category, or subject, as influenced by your agent instructions.\n\n## Trusted sources are not pushed to GitHub\n\nBecause they might be large or contain sensitive information, trusted source files are stored in `_trusted_sources` folders that are **excluded from hosted repositories** by `.gitignore`. \n"
      },
      {
        "type": "image",
        "markdown": "## Example\n\nThis is an unused example - you would replace `README.md` with any context file you prefer.",
        "images": [
          {
            "source": "slide",
            "url": "trusted_sources_block.jpg"
          }
        ],
        "alt": "",
        "maxWidths": "800px",
        "center": true,
        "label": null
      }
    ]
  }
};
