window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/content-generation/import-powerpoint/import-powerpoint"] = {
  "id": "import-powerpoint",
  "uuid": "65ecb80b-8d26-4495-a312-10384b0d211b",
  "slideSchemaVersion": 2,
  "title": "Importing slides from PowerPoint files",
  "level": "core-learning",
  "order": 10,
  "contentUpdatedAt": "2026-10-27T00:43:54.631Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "Many educators have PowerPoint files they use to give lectures whose content will form the basis of a new app.  \n\n## Importing slides\n\nTo import your PowerPoint slides one-by-one, use **agent skill** `/build-app import-powerpoint <subject>/<category>/<section>` to convert a presentation into app slides within one existing section. The skill maps PowerPoint slide components into app-native blocks and assets.\n\n### Post-conversion editing\n\nBe forewarned, the conversion and import process will be imperfect. You can expect titles, headings, and lists to work well, and for images to be present, but it is not possible to capture all input PowerPoint formatting into HTML. You will need to edit slides, but conversion is a big head start.\n\nThe more you can refine the input slides to avoid excessive formatting and unnecessary slides, the happier you will be with the import.\n\n### Full slide image\n\nBecause your input slides may have had cropped images, and also as a reference, import instructions tell the agent to include a bitmap image of the entire original slide that you can use when finalizing imported slides. You will want to remove it (or override the instructions to suppress this feature).\n\n## Using slides as context\n\nAs an alternative to slide-by-slide conversion above, you can also just provide your PowerPoint file as a [trusted source](#/creating-apps/content-generation/ai-generated-content/trusted-sources) and provide your own instructions for building new slides with a stricter or looser requirement for following the input slide in app slides."
      }
    ]
  }
};
