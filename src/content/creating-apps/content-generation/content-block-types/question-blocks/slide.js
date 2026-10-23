window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/content-generation/content-block-types/question-blocks"] = {
  "id": "question-blocks",
  "uuid": "22d95a66-de5b-4e86-b8e3-2fe482acbf42",
  "slideSchemaVersion": 2,
  "title": "Question blocks",
  "level": "core-learning",
  "order": 40,
  "contentUpdatedAt": "2026-10-22T21:54:12.422Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "A {.large-bold `Question`} {.bold block} adds a multiple-choice self-evaluation question that helps promote active learning beyond passive reading. They can also be used in classroom settings.\n\nWrite one clear **prompt** and two to five **choices**, with exactly one marked correct answer. Choice **feedback** should explain why answers are correct or incorrect (the app adds a “Correct.” or “Incorrect.” feedback prefix). Feedback is immediate."
      },
      {
        "type": "image",
        "markdown": "## Example",
        "images": [
          {
            "source": "slide",
            "url": "question_block.jpg"
          }
        ],
        "alt": "",
        "maxWidths": "600px",
        "center": true,
        "label": null
      },
      {
        "type": "question",
        "prompt": "How many correct choices should a question block contain?",
        "choices": [
          {
            "text": "Exactly one",
            "correct": true,
            "feedback": "The block contract requires one correct choice."
          },
          {
            "text": "At least two",
            "correct": false,
            "feedback": "The component is designed for one correct answer."
          },
          {
            "text": "Any number",
            "correct": false,
            "feedback": "Clear validation depends on exactly one correct choice."
          }
        ]
      }
    ]
  }
};
