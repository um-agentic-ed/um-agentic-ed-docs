window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/content-generation/in-app-editing/general-slide-edit"] = {
  "id": "general-slide-edit",
  "uuid": "e97a71d0-1503-41e9-96bf-5b98c66918d1",
  "slideSchemaVersion": 2,
  "title": "General editing instructions",
  "level": "core-learning",
  "order": 30,
  "contentUpdatedAt": "2026-10-21T20:23:19.831Z",
  "content": {
    "blocks": [
      {
        "type": "image",
        "markdown": "The following snapshot highlights the main features of the editor mode interface:",
        "images": [
          {
            "source": "slide",
            "url": "editing_general_v2.jpg"
          }
        ],
        "alt": "",
        "maxWidths": "500px",
        "center": true,
        "label": null
      },
      {
        "type": "text",
        "markdown": "## Window-level inputs\n\n### In the header\n\nThe **Refresh icon button** reloads slides, including recent agent-generated content, without having to reload the entire web page. Most edits update live; refreshing is mainly for widget updates.\n\nThe **Export icon button** creates single-file HTML exports for app sharing.\n\n### In the editing panel\n\nUse the **Delete**, **Discard** and **Save** buttons to perform those actions. Note that *slide saving requires a deliberate action* and is not automatic. **Ctrl-click the Save button** to save all pending changes on all slides.\n\n## Slide-level inputs\n\nThe **Slide Title** field is self-explanatory.\n\nThe **Hide icon toggle button** allows lecturers to remove slides from presenter mode while retaining them in learner mode.\n\nThe **Path icon button** allows editors to copy the routing path to the current slide to their clipboard, e.g., to provide to an agent.\n\nThe **Move/Copy icon button** allows editors to move or copy the current slide to a new location in the app.\n\nThe remainder of the editor interface is where you edit the block-based content of the current slide. \n- Use the drag handles to **drag-and-drop blocks to change their order**. \n- Use the **Expand/Collapse icon button** to show or hide the block editing inputs (they are hidden in the image above); **Ctrl-click one button** to show or hide all inputs in all blocks.\n- Use the **Remove icon button** to remove a block from a slide. \n- Use the **Add block** button to add a new block to a slide. \n\nDetails for each block type are provided in a later section. "
      },
      {
        "type": "question",
        "prompt": "--- \nWhat makes an in-app slide edit permanent?",
        "choices": [
          {
            "text": "Clicking Save Changes after reviewing it.",
            "correct": true,
            "feedback": "Save validates the content and writes the app files."
          },
          {
            "text": "Viewing the live preview.",
            "correct": false,
            "feedback": "Previewing does not write files."
          },
          {
            "text": "Navigating away from the slide.",
            "correct": false,
            "feedback": "Navigation does not save an edit."
          }
        ]
      }
    ]
  }
};
