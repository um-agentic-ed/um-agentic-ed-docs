window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/sharing-app/app-sharing-modes/sharing-repository"] = {
  "id": "sharing-repository",
  "uuid": "22284756-6970-4dc0-960e-6cf73afd3f7c",
  "slideSchemaVersion": 2,
  "level": "core-learning",
  "order": 30,
  "title": "Sharing as a repository",
  "contentUpdatedAt": "2026-10-27T21:51:21.019Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "Share the **entire app repository** when recipients need the complete project—for example, to inspect sources, edit content, preserve version history, or contribute improvements.\n\n## Choose access deliberately\n\n- A **public repository** is visible and cloneable by anyone. Use it when every committed file may be public and licensing terms are clear.\n- A **private repository** is visible only to people you authorize. In GitHub, add collaborators under **Settings → Collaborators and teams**.\n\nRepository visibility is not a substitute for security review: do not commit credentials, protected information, private files, or content you lack permission to redistribute.\n\n## Clone and run a copy\n\nA collaborator can copy the repository together with its required framework submodule.\n\n```sh\ngit clone --recurse-submodules https://github.com/<owner>/<repository>.git\ncd <repository>\n```\n\n## Contribute changes back\n\nCloning creates an independent working copy; it does not automatically keep edits synchronized. Use commits, pulls, pushes, and pull requests to exchange reviewed changes.\n\nA collaborator with write access can create a branch, commit changes, push the branch, and open a **pull request**. \n\nA contributor without write access can first **fork** a public repository, push a branch to the fork, and open a pull request against the original repository. The repository owner reviews the comparison before merging.\n\n"
      },
      {
        "type": "gptFollowup",
        "questions": [
          "I am new to Git and GitHub.  Please elaborate on the models for code sharing between multiple app editors."
        ]
      }
    ]
  }
};
