window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["using-apps/learner-mode/interactive-slide/ask-gpt"] = {
  "id": "ask-gpt",
  "uuid": "d79e4796-16b6-4637-bad7-1f569a03ac60",
  "slideSchemaVersion": 2,
  "title": "Ask GPT - AI-supported learning",
  "level": "core-learning",
  "order": 40,
  "contentUpdatedAt": "2026-10-28T21:38:25.262Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "A primary goal of the `um-agentic-ed` system is to help you use AI to learn the content matter of an app.\n\n## Top-level prompts\n\nSelect the **Ask GPT icon button** on any content slide to copy a prompt containing the slide's context in the app and its visible text to your clipboard. \n\nIf the app has a chatbot address configured, the first request in a session also opens that chatbot. Paste the copied prompt into its message box, edit it if you'd like (especially at the end), and ask AI to help expand your understanding."
      },
      {
        "type": "image",
        "markdown": "",
        "images": [
          {
            "source": "slide",
            "url": "slide_nav_controls_v2.jpg"
          }
        ],
        "alt": "",
        "maxWidths": "600px",
        "center": true,
        "label": null
      },
      {
        "type": "text",
        "markdown": "## Suggested GPT follow-up prompts\n\nSome slides also list **Suggested GPT follow-up prompts**. Select the Ask GPT button beside one to add that specific question to the copied prompt, e.g., this is the generated prompt for the follow-up suggestion below:\n\n> I am a beginning learner/user in um-agentic-ed app development. You are a professional and experienced practitioner and educator in that discipline. I would like further explanation on a teaching slide I am reviewing whose text is quoted here.\n>\n> Subject: Using Apps\n> Category: Learner/User Mode\n> Section: Interactive Slide Features\n> Slide: Ask GPT - AI-supported learning\n> Top-level prompts\n> \n> <SLIDE TEXT WILL BE HERE>\n>\n> My follow-up question is: Give me a checklist for evaluating the reliability of an AI explanation.\n"
      },
      {
        "type": "gptFollowup",
        "questions": [
          "Give me a checklist for evaluating the reliability of an AI explanation."
        ]
      }
    ]
  }
};
