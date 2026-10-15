window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/getting-started/create-app/make-local-clone"] = {
  "id": "make-local-clone",
  "uuid": "a6e4bdf4-e0a7-4514-900b-e0ed5d1351ba",
  "slideSchemaVersion": 2,
  "level": "foundations",
  "order": 20,
  "title": "Make a local clone of your repository",
  "contentUpdatedAt": "2026-10-15T17:41:08.646Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "Next, to clone a **local working copy** of your new repository with its framework submodule, open a command prompt  on your computer and run:\n\n```sh\ngit clone --recurse-submodules https://github.com/<owner>/<your-app-name>.git\ncd <your-app-name>\n```\n\nReplace `<owner>` and `<your-app-name>` with your GitHub owner and repository name. \n\nIf you already cloned without `--recurse-submodules`, initialize the Framework afterward:\n\n```sh\ngit submodule update --init --recursive\n```"
      },
      {
        "type": "gptFollowup",
        "questions": [
          "How do I install the Git version control software on my Windows or Mac computer?",
          "What does `--recurse-submodules` do during this clone?"
        ]
      }
    ]
  }
};
