window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/app-organization/app-switchboards/app-list-json"] = {
  "id": "app-list-json",
  "uuid": "d74ff035-7564-4fe2-9fac-0d3253a8c185",
  "slideSchemaVersion": 2,
  "level": "advanced-topics",
  "order": 15,
  "title": "App list JSON structure",
  "contentUpdatedAt": "2026-11-02T00:19:45.760Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "The data returned by your app list URL must be a JSON object with structure `[{\"groupName\": \"\", \"apps\": []}, ...]`, where each app in a group is `{\"repository\": \"\", \"label\": \"\", \"description\": \"\", \"public\": bool}`.\n- **groupName** is a label used to organize a set of related apps in the overall list.\n- **repository** is the name of an app repository, i.e., as found in GitHub.\n- **label** is the text shown as the app link.\n- **description** is a short text description of the app.\n- **public** is Boolean whether the app repository is public (private apps are only shown in local deployments but not on public internet sites).\n\n## Example \n\nHere is a complete example of a single app in a single group---extend the arrays as needed and name the file something like `my-app-list.json`:\n```\n[\n  {\n    \"groupName\": \"Foundations\",\n    \"apps\": [\n      {\n        \"repository\": \"my-first-app\",\n        \"label\": \"My First app\",\n        \"description\": \"The first app in the Foundations group of apps\",\n        \"public\": true\n      }\n    ]\n  }\n]\n```"
      }
    ]
  }
};
