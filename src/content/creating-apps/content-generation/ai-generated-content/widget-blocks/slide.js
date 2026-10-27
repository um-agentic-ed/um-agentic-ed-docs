window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/content-generation/ai-generated-content/widget-blocks"] = {
  "id": "widget-blocks",
  "uuid": "54f0370e-af09-4640-9d80-d532f75fd163",
  "slideSchemaVersion": 2,
  "title": "Widget blocks",
  "level": "advanced-topics",
  "order": 10,
  "contentUpdatedAt": "2026-10-27T00:11:35.720Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "A {.large-bold `Widget`} {.bold block} renders an **interactive JavaScript tool** typically created by an agent working from your instructions. Widgets are a powerful way to exploit AI to create an **active learning experience** right in your slides.\n\nUltimately, a widget is a named script file called {.bold-large `<widget-name>.js`} that generates and injects HTML.  While you could write it yourself, it is  better to have an agent do it because it already knows the syntax and requirements.  \n\n## Generating widgets from instructions\n\nAfter giving your widget a **kebab-case name**, describe what it should do in the **Widget instructions** field just as you would for any agent prompt, save the slide, and exit editor mode.\n\nThen, outside of the app, use any agentic AI environment to invoke the provided skill, i.e., `/build-app create-widget <path/to/slide> <widget-name>`. The agent will read your instructions in the context of the app system and create what you envisioned.\n\nTo modify the initial attempt, either:\n- Update your instructions to describe the changes and re-invoke the same skill.\n- Manually edit `<widget-name>.js` (tweaking it is easier than creating it anew).\n\n### Instructions are archived\n\nYou could build your widget with agent instructions provided entirely outside of the app, but writing instructions in the app creates a permanent record for you, your agent, and collaborators to refer to later.\n\n## Widget support libraries\n\nThe following JavaScript libraries are imported by `index.html` and available to all widgets and the agents that create them:\n\n- [Chart.js](https://www.chartjs.org/), for generating interactive **data plots**\n- [Tabulator](https://www.tabulator.info/), for generating interactive **data tables**\n- [Sortable.js](https://sortablejs.github.io/Sortable/), for adding **drag-and-drop behavior**\n\nYou do not need to specifically invoke these tools—your agent will already know about them.\n\nYou can import other libraries as needed, but your agent can create sophisticated widgets from vanilla JavaScript and the few libraries mentioned above.\n\n## Other fields shared with images\n\nWidgets support preamble markdown text, sizing, and centering as [described for images](#/creating-apps/content-generation/content-block-types/image-blocks).\n\n"
      },
      {
        "type": "image",
        "markdown": "## Example",
        "images": [
          {
            "source": "slide",
            "url": "widget_block.jpg"
          }
        ],
        "alt": "",
        "maxWidths": "800px",
        "center": true,
        "label": null
      },
      {
        "type": "widget",
        "markdown": "---\nEnter the right-hand-side of an X-Y equation and the x-axis limits to see the shape of the curve.",
        "name": "xy-plotter",
        "maxWidth": "80%",
        "center": true,
        "instructions": "# Initial instructions\n\nThe x-y equation plotter widget should have:\n- one input row with:\n  - a text input labeled \"y = \", where the use inputs the function of x to plot, e.g. `2x+ 3` for a straight line (use that value as the default, and the placeholder).\n  - two numeric inputs labeled \"Min X\" and \"Max X\" used to set the axis plot limits (the y-axis should auto-scale)\n- the resulting interactive plot, where the function values should be drawn as 100 individual data point distributed equally over the visible range.\nThe text input should support symbol \"^\" to raise x to a power, e.g., \"x^2\" is how the square of x would be written.  Other keywords to honor should be \"log\" and \"ln\".  \n\n# Update #1\nAdd a black horizontal line for the x and y origins at x=0 and y=0, under the plotted points.",
        "instructionsUpdatedAt": "2026-10-26T18:44:37.211Z"
      }
    ]
  }
};
