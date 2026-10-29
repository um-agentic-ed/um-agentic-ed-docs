window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["using-apps/learner-mode/note-taking/note-auto-saving"] = {
  "id": "note-auto-saving",
  "uuid": "8f09687e-d3ef-4e3f-b917-74a7c872e667",
  "slideSchemaVersion": 2,
  "title": "Note auto-saving, with cautions",
  "level": "advanced-topics",
  "order": 30,
  "contentUpdatedAt": "2026-10-29T01:01:59.461Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "Text notes and sketches are saved automatically in your browser memory as you work.   They are stored using [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API), which means they should be retained as you change slides and reload or close the web page.\n\n{.red-bold-large HOWEVER}, keep in mind that:\n- Auto-saved notes are local to the current browser profile and device.\n- Any active or automatic action that clears IndexedDB may clear your notes without warning, including:\n    - **Using private browsing**, which refuses to keep permanent IndexedDB storage.\n    - **Waiting too long to return to an app** (inactive IndexedDB entries can be cleared by your browser).\n    - Other things your computer or browser might do that an app can't control.\n    \nThe next slide walks through saving notes and sketches to a permanent disk file to avoid losing your valuable notes."
      },
      {
        "type": "question",
        "prompt": "---\nWhich statement about auto-saved notes is accurate?",
        "choices": [
          {
            "text": "They are stored locally in the current browser, so important notes should also be exported.",
            "correct": true,
            "feedback": "Local browser storage is convenient and usually stable for a while but is not a durable cross-device backup."
          },
          {
            "text": "They are automatically synchronized to every device you use.",
            "correct": false,
            "feedback": "The app does not provide automatic cross-device synchronization; notes are local to one browser profile on one device."
          },
          {
            "text": "They are submitted to the app author whenever you leave a slide.",
            "correct": false,
            "feedback": "Saving occurs in local browser storage, not on an app server. They are your private notes (unless you use exported note files to actively share them; see the next slide)."
          }
        ]
      }
    ]
  }
};
