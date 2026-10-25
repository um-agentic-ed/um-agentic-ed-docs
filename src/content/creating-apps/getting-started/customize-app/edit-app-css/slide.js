window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/getting-started/customize-app/edit-app-css"] = {
  "id": "edit-app-css",
  "uuid": "6e48ffc4-f39a-4cff-a11f-ef2487124408",
  "slideSchemaVersion": 2,
  "level": "core-learning",
  "order": 15,
  "title": "Edit `app.css` for app branding (optional)",
  "contentUpdatedAt": "2026-10-25T22:58:52.827Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "## App page colors\n\nThe root `app.css` file is a first place you can apply branding by setting app colors:\n\n- `--umed-brand-bg`: header and sidebar background\n- `--umed-brand-text`: header and sidebar text and icons\n- `--umed-brand-hover-bg`: hovered, selected, or dragged items\n- `--umed-brand-border`: header and sidebar dividers\n- `--umed-brand-accent`: buttons, borders, and emphasized interface elements\n\nUse valid CSS colors and maintain good WCAG AA contrast—normally **4.5:1** for text against its background. Comment out an override to restore the framework default.\n\n## Slide text colors and other markdown styles\n\nYou may also add app-specific markdown classes in `app.css`, which are called in markdown text as `{.style-name target content}`.\n\nReview the classes already supplied by `src/um-agentic-ed-framework/styles/markdown-styles.css` as examples and to avoid duplication."
      }
    ]
  }
};
