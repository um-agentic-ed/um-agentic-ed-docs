window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/content-generation/content-block-types/gpt-followup-blocks"] = {
  "id": "gpt-followup-blocks",
  "uuid": "2a0d2bec-07dc-46ed-b23d-b21a9eeeedd4",
  "slideSchemaVersion": 2,
  "title": "GPT Follow-up blocks",
  "level": "core-learning",
  "order": 50,
  "contentUpdatedAt": "2026-10-22T21:51:34.503Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "A {.large-bold `GPT Follow-up`} {.bold block} stores **AI prompt suggestions** created by editors to help learners explore a slide topic in more depth. \n\nPrompt suggestions are one way that `um-agentic-ed` rethinks how learners interact with material. They encourage you to provide a framework that learners can use to explore. As an expert, you know what good questions are - help your learners ask them.\n\n## How prompt blocks work\n\nYou enter one ore more prompt suggestions into the block, one per text input. The app gathers suggestions at the slide bottom. Clicking a prompt button:\n- Copies the app context, slide text, and prompt to the clipboard.\n- Opens a chatbot once where the learner can paste and modify the prompt before submitting.\n\nWe do not embed AI in the app to avoid being too restrictive. You can specify a recommended chatbot via field `chatbotUrl` in `app.js`, but learners can use your prompts as they prefer."
      },
      {
        "type": "image",
        "markdown": "## Example",
        "images": [
          {
            "source": "slide",
            "url": "gpt_prompt_block.jpg"
          }
        ],
        "alt": "",
        "maxWidths": "600px",
        "center": true,
        "label": null
      },
      {
        "type": "gptFollowup",
        "questions": [
          "Suggest a strategy for turning an overly long slide on the following topic into a more focused overview with GPT follow-up prompts. <add your topic here>"
        ]
      }
    ]
  }
};
