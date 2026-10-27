window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/content-generation/ai-generated-content/data-file-blocks"] = {
  "id": "data-file-blocks",
  "uuid": "b9b7dec5-d2fe-4264-8e5f-a8f183676799",
  "slideSchemaVersion": 2,
  "title": "Data File blocks",
  "level": "advanced-topics",
  "order": 20,
  "contentUpdatedAt": "2026-10-27T00:13:17.708Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "A {.large-bold `Data File`} {.bold block} asks a user to upload a data file that can be used by widgets, allowing learners to explore their own data.\n\nSupply a unique **kebab-case name** for the data type that you can reference in widget instructions and scripts via JavaScript object `window.umedDataFiles`.\n\nOptionally, specify one or more allowed file **extensions**, such as `.csv` or `.txt`, and include a short **prompt** to help users know what kind of file is expected, which your widget can verify as needed. \n\n## Data is stored locally\n\nImportantly, uploaded data is only stored in the user's browser session memory. It is never sent to a `um-agentic-ed` server [because there isn't one](#/creating-apps/getting-started/static-serverless). All processing is done \"client-side\"."
      },
      {
        "type": "image",
        "markdown": "## Example\n\nThis widget creates a table of up to five columns of a  user-provided CSV file named internally as ` user-csv-file`.",
        "images": [
          {
            "source": "slide",
            "url": "data_file_upload.jpg"
          }
        ],
        "alt": "",
        "maxWidths": "550px",
        "center": true,
        "label": null
      },
      {
        "type": "dataFile",
        "markdown": "---",
        "name": "user-csv-file",
        "extensions": "csv",
        "prompt": "Upload any CSV format file"
      },
      {
        "type": "widget",
        "markdown": "",
        "name": "csv-file-table",
        "maxWidth": "95%",
        "center": true,
        "instructions": "Render up to five columns of data file `user-csv-file` as an interactive, filterable, sortable table. There should be one checkbox input labeled \"My data has headers\"; when checked, the first CSV file row provides table column headers.",
        "instructionsUpdatedAt": "2026-10-24T12:56:00.218Z"
      }
    ]
  }
};
