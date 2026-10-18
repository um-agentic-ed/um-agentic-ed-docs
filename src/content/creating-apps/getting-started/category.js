window.umedAppContent["creating-apps/getting-started"] = {
  "uuid": "91935e57-0de6-446d-978a-05aba4537935",
  "slideSchemaVersion": 2,
  "title": "Getting Started",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "To get started, you will:\n- Launch a new app using the [system template repository](https://github.com/um-agentic-ed/um-agentic-ed-parent).\n- Customize it to make it your own.\n- Fill it with your educational content."
      },
      {
        "type": "text",
        "markdown": "----\n## Quick Start Guide\n\n1. **Create a new app repository** [using the template](https://github.com/um-agentic-ed/um-agentic-ed-parent/generate).\n\n2. **Make a local clone** of your repository with the framework submodule:\n\n```sh\ngit clone --recurse-submodules https://github.com/<owner>/<your-app-name>\n```\n\n3. **Edit file '**{.large-bold `app.js`}**'** to describe your app, following its instructions. \n\n\n4. **Double-click '**{.large-bold `index.html`}**'** in your app folder—the app should open.\n\n\n5. **Ctrl-click the app title** in the upper left corner to toggle **editor mode**.  Choose your app folder and enter your editor name as prompted (in-app editing requires Chrome or another browser that supports the [File System Access API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API)).\n\n6. Use the sidebar and Slides menu to **add Categories, Sections, and Slides** and the editing pane to **add content blocks to Slides** and **save your changes**. The app updates live.\n"
      },
      {
        "type": "text",
        "markdown": "---\n## Agentic AI Quick Start\n\n1. **Edit file '**{.large-bold `AGENTS.md`}**'** in places marked `TODO` to describe your app to AI agents (do not edit general system instructions).\n\n2. **Open your preferred AI agent** environment in your app folder (we mostly use [VS Code](https://code.visualstudio.com/)).\n\n3. **Run agent skill '**{.large-bold `/build-app list`}**'** to list the content creation skills available to your agent.\n\n| Skill | Description |\n| --- | --- | \n|  {.large-bold `set-app-identity`}  | Set app identity, subject usage, editor names, and branding. |\n|  {.large-bold `import-powerpoint`}  | Convert a PowerPoint presentation into app Slides. |\n|  {.large-bold `fill-app-outline`}  | Generate missing tree levels and landing slides from *app-outline.xlsx*. |\n|  {.large-bold `generate-content`}  | Generate or update one or more slides from saved instructions. |\n|  {.large-bold `create-widget`}  | Create or update a slide widget from its saved widget-block instructions. |\n|  {.large-bold `index-slides`}  | Validate and synchronize the content manifest, ordering, and search keywords. |\n|  {.large-bold `list`}  | List all system-supported agent skills. |\n\n4. **Edit file '**{.large-bold `app-outline.xlsx`}**'** and use app editor mode to **create agent instructions** and **upload trusted sources** for agents to use.\n\n5. **Run skills** using the `/build-app` prompt prefix, e.g., `/build-app fill-app-outline`.\n"
      }
    ]
  }
};
