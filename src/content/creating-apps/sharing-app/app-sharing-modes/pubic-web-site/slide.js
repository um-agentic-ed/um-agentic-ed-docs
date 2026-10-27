window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/sharing-app/app-sharing-modes/pubic-web-site"] = {
  "id": "pubic-web-site",
  "uuid": "41139a6c-1c23-40c3-ab96-5cbab3c18f1f",
  "slideSchemaVersion": 2,
  "level": "core-learning",
  "order": 20,
  "title": "Sharing as a public web site",
  "contentUpdatedAt": "2026-10-27T21:42:44.267Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "Because a `um-agentic-ed` app is a static website, **GitHub Pages** can publish the repository directly—**no application server or build step** is required, making it very easy to do. \n\nVisitors use a normal web address and see updates as you publish new commits. This is usually the **preferred sharing method for public/outreach projects**."
      },
      {
        "type": "image",
        "markdown": "## Publish with GitHub Pages\n\n1. Push a working app to GitHub. Public repositories are best; private-repository Pages availability depends on the owner's GitHub plan and policies.\n2. On GitHub, open the repository's **Settings**, then **Pages** under **Code and automation**.\n3. Under **Build and deployment**, choose **Deploy from a branch**.\n4. Select the branch containing the app (commonly `main`), choose the repository root folder, and select **Save**.",
        "images": [
          {
            "source": "slide",
            "url": "github_pages.jpg"
          }
        ],
        "alt": "",
        "maxWidths": "600px",
        "center": true,
        "label": null
      },
      {
        "type": "text",
        "markdown": "5. Wait for deployment to finish, then use **Visit site** or the URL shown in Pages settings. The address usually follows `https://<owner>.github.io/<repository>/`.\n6. Test the published app in any web browser, then share the URL to share your app.\n\n## Keep in mind ...\n\n- Future pushes to the published branch will update the public site. \n- Apps served on a public server do NOT support editor mode; edit in a secure local clone and push commits to keep editor and learner modes separate.\n\n## Publishing with another file server\n\nAs a static site, your app can also be hosted on any other public file server. Implementation details are beyond the scope of these docs, but if you are considering it you probably know how to do it..."
      },
      {
        "type": "link",
        "label": "Additional information on GitHub Pages",
        "url": "https://docs.github.com/en/pages/getting-started-with-github-pages",
        "markdown": "---"
      }
    ]
  }
};
