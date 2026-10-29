window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["using-apps/getting-started/accessing-app/security-audit"] = {
  "id": "security-audit",
  "uuid": "489d53d8-99de-4dd1-a43a-cc687b2694fb",
  "slideSchemaVersion": 2,
  "level": "foundations",
  "order": 10,
  "title": "Perform a data security audit (optional)",
  "contentUpdatedAt": "2026-10-29T13:51:36.412Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "If you will deploy your app in a setting with concerns about the privacy of sensitive data, you may wish to have an agent **perform a security audit** of your app.\n\nHere is one example of a how to audit an app provided as a single HTML export file:\n\n1. Open your preferred AI chat environment.\n2. Attach/upload your app HTML file.\n3. Edit the following prompt according to your needs and submit it to your AI agent:\n\n---\nPerform a data security audit of the attached web app.\n1. Summarize (target no more than 200 words for this section):\n    - The overall purpose of the app.\n    - How the app is executed in code.\n2. Your scope of concern is potential risk for unexpected or unauthorized access to:\n    - Any data files I upload into the app, if any are requested.\n    - Other private data in my web browser or computer.\n3. Identify whether the app or its third-party dependencies:\n    - Submit my data to an external server or third-party.\n    - Use my data in ways that are not clearly advertised to me while using the app.\n    - Expose my data in ways that would allow some other agent, other than me or the app, to gain data access.\n4. Be concise in your response. You should include an enumerated summary of identified concerns, if any, followed by a brief text if needed to explain an issue in more depth.\n---\n\n## Results for this system documentation app\n\nThe single-file export of this docs app gave the following audit excerpted output:\n\n---\n"
      }
    ]
  }
};
