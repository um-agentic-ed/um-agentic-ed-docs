window.umedAppContent["creating-apps/app-organization/hierarchical-levels"] = {
  "uuid": "2d0906f7-15a2-4aa8-8bf1-5982d139a0a7",
  "slideSchemaVersion": 2,
  "title": "Hierarchical Levels",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "An app is organized into a hierarchical outline, or tree,  as a means of structuring content according to your needs and making it easy to reorganize when needed.\n\n**APP** (one repository)\n{.nbsp --}└─ **Subject** (in the header, optional)\n{.nbsp ----}└─ **Category** (in the sidebar)\n{.nbsp ------}└─ **Section**\n{.nbsp --------}└─ **Slide** (the main UI content unit)\n{.nbsp ----------}└─ **Learner Level** (a slide attribute)\n{.nbsp ----------}└─ **Block** (one part of a slide)"
      },
      {
        "type": "image",
        "markdown": "",
        "images": [
          {
            "source": "slide",
            "url": "slide_navigation_v2.jpg"
          }
        ],
        "alt": "",
        "maxWidths": "90%",
        "center": true,
        "label": null
      },
      {
        "type": "text",
        "markdown": "App slides are traversed through all outline levels from beginning to end in natural book-like order using the navigation controls, or users can jump between content areas using the various level menus.\n\n## App repositories\n\nOne app is one `um-agentic-ed` parent repository. You could deploy multiple apps, e.g., one for each course, or module of a course.\n\n## Subjects (in the header, optional)\n\nAn app may contain one or more subjects. If your app has only one subject, set `subjectsEnabled: false` in `app.js`, to suppress the subject selector in the app header. \n\nSingle-subject apps still have a subject, which is always called `app-subject` in routing paths but otherwise hidden.\n\n## Categories and Sections (in the sidebar)\n\nThe left sidebar supports two further outline tree levels, with Sections nested under their Category. Only one Category's Sections are expanded at a time.\n\nYou should generally keep subject, category and section names short enough to fit on one line, but they will wrap as needed.\n\n## Slides (in the main content panel)\n\nEach section has one or more slides, where one slide fills the content viewer at a time.\n\n### Learner Levels for slide navigation\n\nSlides in a section are given difficulty levels that are traversed in order; thus, a section progresses from basic to intermediate to advanced content, under labels **Foundations**, **Core Learning**, and **Advanced Topics**, to orient learners to your main focus.\n\nUnlike subjects, categories, and sections, learner levels are slide attributes that are not part of the routing path to a slide.\n\n## Blocks (parts of a slide)\n\nTree levels above help learners navigate and understand your content. In contrast, blocks are the sequential components of slides that help editors author content efficiently and make it come alive. More on this later.\n"
      }
    ]
  }
};
