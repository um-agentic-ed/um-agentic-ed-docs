window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/getting-started/static-serverless/static-serverless"] = {
  "id": "static-serverless",
  "uuid": "229882f6-7d0a-42c1-8a80-63e3bf0a0c4c",
  "slideSchemaVersion": 2,
  "level": "advanced-topics",
  "order": 10,
  "title": "Apps are static and serverless ",
  "contentUpdatedAt": "2026-10-23T13:50:34.549Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "Apps built in the `um-agentic-ed` system are **static** and **serverless**, unless you change that behavior using widgets.\n\n> {.blue Note}: this slide uses all `um-agentic ed` block types and features!\n\n## Static apps\n\nA static web app delivers its content using fixed HTML, CSS, and JavaScript files that are rendered into a working page by a user's web browser. This makes it easy to deploy and distribute apps, e.g., apps can be run from a local secure file folder using a `file:///` URL, or hosted from your GitHub repository (like this docs app)."
      },
      {
        "type": "image",
        "markdown": "",
        "images": [
          {
            "source": "slide",
            "url": "static-apps_v2.jpg"
          }
        ],
        "alt": "",
        "maxWidths": "350px",
        "center": true,
        "label": null
      },
      {
        "type": "link",
        "markdown": "## Serverless apps\n\nServerless apps have no need to communicate with a \"back-end\" server that you must maintain. All data for many educational apps can be baked into the app itself—like this documentation app EXCEPT for the examples below.\n\nYou have two choices—each using app widgets—when you need to call on data that is either large or not known in advance:\n\n### Supporting widgets with data APIs\n\nTo deliver data from an external server into an app, have your widget make API calls, e.g., this widget uses the following public APIs to generate a current weather report for a US zip code.",
        "label": "Zippopotamus",
        "url": "https://zippopotam.us/"
      },
      {
        "type": "link",
        "markdown": "",
        "label": "Open Meteo",
        "url": "https://open-meteo.com/"
      },
      {
        "type": "widget",
        "markdown": "",
        "name": "weather-by-zipcode",
        "maxWidth": "90%",
        "center": true,
        "instructions": "Create a widget with:\n- one input row with:\n  - a numeric input labeled \"Enter a US zip code\"\n  - a text feedback with the matching city and state\n- a plot of the weather forecast with temperature and precipitation likelihood for the next 7 days\nWhen the zip code has 5 digits exactly:\n- look up the local information using the free Zippopotamus API\n- update the UI and extract the longitude and latitude\n- collect weather data from the free open-meteo API\n- render the plot using a red trace for temperature and a blue trace for precipitation. Avoid overly bright colors.",
        "instructionsUpdatedAt": "2026-10-23T13:04:59.545Z"
      },
      {
        "type": "dataFile",
        "markdown": "### Supporting widgets with data file upload\n\nAlternatively, create an upload link when your user must provide the data. This widget creates a table of up to five columns of any CSV file. Importantly, uploaded data is only stored in the user's browser memory; it is never sent to a server because there isn't one. All processing is done \"client-side\".",
        "name": "user-csv-file",
        "extensions": ".csv",
        "prompt": "Upload any CSV format file"
      },
      {
        "type": "widget",
        "markdown": "",
        "name": "csv-file-table",
        "maxWidth": "95%",
        "center": true,
        "instructions": "Render up to the first five columns of data file `user-csv-file` as an interactive, filterable and sortable table. There should be one checkbox input labeled \"My data has headers\"; when checked, the first CSV file row should be used as table column headers.",
        "instructionsUpdatedAt": "2026-10-23T12:56:41.125Z"
      },
      {
        "type": "divider"
      },
      {
        "type": "question",
        "prompt": "What are the advantages of the `um-agentic-ed` approach of using static, serverless apps?",
        "choices": [
          {
            "text": "Apps can be deployed from a secure local file server.",
            "correct": false,
            "feedback": "This is only one of the advantages."
          },
          {
            "text": "Apps can be packaged and distributed as a single HTML file.",
            "correct": false,
            "feedback": "This is only one of the advantages."
          },
          {
            "text": "Developers do not need to maintain a complex back-end web server (unless they want to).",
            "correct": false,
            "feedback": "This is only one of the advantages."
          },
          {
            "text": "Public apps can be deployed on GitHub Pages with nothing else required except to turn the feature on.",
            "correct": false,
            "feedback": "This is only one of the advantages."
          },
          {
            "text": "All of the above",
            "correct": true,
            "feedback": "Simplicity and security are the name of the game!"
          }
        ]
      },
      {
        "type": "gptFollowup",
        "questions": [
          "Help me understand how a static web app can still use interactive widgets and custom data for a dynamic user experience."
        ]
      }
    ]
  }
};
