window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/getting-started/static-serverless/add-server-support"] = {
  "id": "add-server-support",
  "uuid": "229882f6-7d0a-42c1-8a80-63e3bf0aaaaa",
  "slideSchemaVersion": 2,
  "level": "advanced-topics",
  "order": 20,
  "title": "Add server support to your app",
  "contentUpdatedAt": "2026-10-24T13:42:20.193Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "While `um-agentic-ed` apps are themselves static and serverless, that does not prevent you from invoking public, private, or custom **server APIs** in your [custom widgets](#/creating-apps/content-generation/ai-generated-content/widget-blocks).\n\n## Use best security practices\n\nBe sure to allow app users to confirm and agree whenever their data will be sent to an external server so they may make informed choices about data privacy. \n\nThe framework itself never shares data externally, so developers bear this responsibility when adding server support to their apps."
      },
      {
        "type": "link",
        "markdown": "## Example\n\nThis widget uses the following public APIs to give you a weather forecast based on your IP address.",
        "label": "ipwhois.io",
        "url": "https://ipwhois.io/"
      },
      {
        "type": "link",
        "markdown": "",
        "label": "Open Meteo",
        "url": "https://open-meteo.com/"
      },
      {
        "type": "image",
        "markdown": "",
        "images": [
          {
            "source": "slide",
            "url": "api_example.jpg"
          }
        ],
        "alt": "",
        "maxWidths": "600px",
        "center": true,
        "label": null
      },
      {
        "type": "widget",
        "markdown": "---",
        "name": "get-my-weather",
        "maxWidth": "750px",
        "center": true,
        "instructions": "Create a widget with:\n- one input row with: \n  - a button labeled \"Get my weather\"\n  - an radio group labeled \"Time span\" with options \"Today\" and \"This week\"\n- a plot of the weather forecast with temperature and precipitation likelihood for 24 hours (when today is selected) or the next 7 days (when this week is selected), with the determined geo location information as \"Weather forecast near <city> <state> <country\" (or similar depending on the country)\nWhen a user clicks on the \"Get my weather\" button:\n- prompt them with a dialog created using framework components telling them their IP address will be used to determine their weather from third party sites\n- if confirmed, look up their geo location based on their advertised IP address from the free ipwho.is API\n- extract the longitude and latitude\n- collect weather data from the free open-meteo API\n- render the plot using a red trace for temperature and a blue trace for precipitation. Avoid overly bright colors.",
        "instructionsUpdatedAt": "2026-10-24T12:19:48.809Z"
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
