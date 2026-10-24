window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/getting-started/static-serverless/static-serverless"] = {
  "id": "static-serverless",
  "uuid": "229882f6-7d0a-42c1-8a80-63e3bf0a0c4c",
  "slideSchemaVersion": 2,
  "level": "advanced-topics",
  "order": 10,
  "title": "Apps are static and serverless ",
  "contentUpdatedAt": "2026-10-24T13:23:11.568Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "Apps built in the `um-agentic-ed` system are themselves **static** and **serverless**—unless you change that behavior using widgets as described on the next slide.\n\n## Static apps \n\nA static web app delivers its content using fixed HTML, CSS, and JavaScript files that are rendered into a working page by a user's web browser. This makes it easy to deploy and distribute apps, e.g., apps can be run from a local secure file folder using a `file:///` URL, or hosted from your GitHub repository (like this docs app)."
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
        "type": "text",
        "markdown": "## Serverless apps\n\nServerless apps have no need to communicate with a \"back-end\" server that you must maintain. All data for many educational apps can be baked into the app itself—like this documentation app (except for the API example on the next slide)."
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
      }
    ]
  }
};
