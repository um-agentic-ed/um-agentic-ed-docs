window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["using-apps/presenter-mode/basic-ui-usage/change-text-size"] = {
  "id": "change-text-size",
  "uuid": "c4ead11c-5f14-4912-b1a5-02f3a8f2915a",
  "slideSchemaVersion": 2,
  "title": "Changing slide text size",
  "level": "foundations",
  "order": 30,
  "contentUpdatedAt": "2026-10-29T00:47:13.756Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "The **optimal text size for comfortable reading** is usually different in learner and presenter modes, i.e., looking at a computer vs. a projection screen. Moreover, it may depend on the size of the room, etc.\n\nPresenter mode defaults to a larger overall font size than learner mode, but you may still need to adjust it using the **minus and plus icon buttons** in the presentation mode header, which change the text size in 10% steps from 50% to 200% (a button tooltip reports the current percentage)."
      },
      {
        "type": "image",
        "markdown": "",
        "images": [
          {
            "source": "slide",
            "url": "presenter_mode_header_v2.jpg"
          }
        ],
        "alt": "",
        "maxWidths": "85%",
        "center": true,
        "label": null
      },
      {
        "type": "text",
        "markdown": "Being able to dynamically adjust font size in real time is a huge advantage for an app over a fixed presentation slide system."
      },
      {
        "type": "question",
        "prompt": "---\nWhat is the best basis for choosing presenter text size?",
        "choices": [
          {
            "text": "Whether the farthest viewer can comfortably read the projected slide.",
            "correct": true,
            "feedback": "Audience readability is the primary reason to adjust presenter text size."
          },
          {
            "text": "Always make every slide 200%, regardless of its content or the presentation environment.",
            "correct": false,
            "feedback": "Very large text may force unnecessary scrolling and does not suit every slide or room."
          },
          {
            "text": "Use the smallest size that puts all content on one screen.",
            "correct": false,
            "feedback": "Fitting content is much less important than keeping it legible for the audience. Remember, a slide is a live HTML page even in presenter mode, so you can easily scroll down as you present.  If scrolling becomes excessive, you will be better off splitting content into two slides."
          }
        ]
      }
    ]
  }
};
