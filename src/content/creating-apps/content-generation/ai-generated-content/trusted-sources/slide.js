window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/content-generation/ai-generated-content/trusted-sources"] = {
  "id": "trusted-sources",
  "uuid": "8ce0ad44-2634-4b9a-9fd4-974aa3236f9a",
  "slideSchemaVersion": 2,
  "title": "Trusted Sources blocks",
  "level": "advanced-topics",
  "order": 40,
  "contentUpdatedAt": "2026-10-27T14:23:41.835Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "A {.large-bold `Trusted Sources`} {.bold block} provides inputs to **upload one or more context files** for agents to use when following your content generation {.large-bold `Instructions`}. \n\nTrusted sources are preferred supplements to the AI model's pre-existing training that you wish to give priority consideration when generating content.  Use your instructions to clarify how strictly the agent should rely on just the provided materials. \n\n## Adding, archiving, and restoring trusted sources\n\nClick **Upload a Source File** to add as many context files as you'd like. Alternatively, click **Add URL Source** to provide a URL to a source file that the agent will download during content generation. Click the `X` **Remove icon button** to either delete a file or archive it, and use the **Restore Source** button to bring it out of the archive and activate it again.\n\nEven for sources you upload as files, you can enter a URL and an optional label, which will be used to create links to the trusted sources on the category or section landing slide.\n\n## Use any file an agent can read\n\nThe app system does not itself restrict the kinds of files you can use as context, but provides guidance during upload that some files cannot be read by AI agents, e.g., binary files. Nearly all common text document formats, like `.txt`, `.csv`, `.docx`, `.pdf` and many others work fine.  \n\n## Trusted sources are scoped down the tree\n\nTrusted sources apply to all slides that an agent might generate for the section or category, as influenced by your agent instructions.\n\n## Trusted sources are not pushed to GitHub\n\nBecause they might be large or contain sensitive information, trusted source files are stored in `_trusted_sources` folders that are **excluded from hosted repositories** by `.gitignore`. \n"
      },
      {
        "type": "image",
        "markdown": "## Example\n\nThese trusted source entries would both be used during content generation (`AGENTS.md` would be downloaded by the agent) ...",
        "images": [
          {
            "source": "slide",
            "url": "trusted_sources_block.jpg"
          }
        ],
        "alt": "",
        "maxWidths": "95%",
        "center": true,
        "label": null
      },
      {
        "type": "image",
        "markdown": "... and would yield these landing slide links.",
        "images": [
          {
            "source": "slide",
            "url": "trusted_sources_block_output.jpg"
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
