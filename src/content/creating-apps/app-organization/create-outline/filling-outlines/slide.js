window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/app-organization/create-outline/filling-outlines"] = {
  "id": "filling-outlines",
  "uuid": "63cba750-196e-405c-a7b7-1ef87ce22862",
  "slideSchemaVersion": 2,
  "level": "advanced-topics",
  "order": 30,
  "title": "Filling outlines into an app",
  "contentUpdatedAt": "2026-11-04T22:10:48.940Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "Your agent can use your outline to help build your app in a deliberately **two-stage process**.\n\n## Creating sections and slides from an outline\n\nOnce you are happy with your outline, ask your agent to fill it into the app using skill `/build-app fill-app-outline`. \n\nYou can always edit it further in the app, so don't worry about getting it perfect in `app-outline.xlsx`.\n\n## Generating slide content from your app shell\n\nImportantly,  `fill-app-outline` only **creates** slides that are mostly empty---it is specifically instructed not to **generate** slides, i.e., to populate them with content. This allows you to:\n- Add additional instructions and context before generating content.\n- Decide which sections and slides you want to pass to the more expensive content generation skills vs. creating them manually.\n\nSee section [AI Generated Content](#/creating-apps/content-generation/ai-generated-content) for details on how to generate content when ready.\n\n\n\n"
      }
    ]
  }
};
