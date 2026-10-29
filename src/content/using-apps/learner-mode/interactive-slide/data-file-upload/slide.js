window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["using-apps/learner-mode/interactive-slide/data-file-upload"] = {
  "id": "data-file-upload",
  "uuid": "5fa75824-a9f9-46ad-99b7-74a1f513e8c2",
  "slideSchemaVersion": 2,
  "title": "Data file upload",
  "level": "core-learning",
  "order": 20,
  "contentUpdatedAt": "2026-10-29T00:56:42.402Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "A slide may ask you to upload a data file for one or more widgets to analyze.\n\n1. Read the prompt and note the allowed file type.\n2. Select the **upload** button and choose the desired file.\n3. Confirm that the loaded filename appears, then use the related widget(s).\n\nUploaded data stays in your browser's session memory and can be reused by other widgets that request the same named data. \n\n## Data security\n\nImportantly, data you upload into an app are **never sent to an external server** (unless your specific app tells you otherwise), and it disappears when the session ends or the page is reloaded. All uploaded **data handling happens within your local browser session**."
      },
      {
        "type": "gptFollowup",
        "questions": [
          "Discuss any potential privacy concerns regarding data that I upload into a browser-based app that does not use a back-end server and that is accessed through a `file:///` URL to a local system HTML file."
        ]
      }
    ]
  }
};
