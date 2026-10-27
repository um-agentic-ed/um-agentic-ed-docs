window.umedAppContent = window.umedAppContent || {};
window.umedAppContent["creating-apps/content-generation/content-block-types/image-blocks"] = {
  "id": "image-blocks",
  "uuid": "5fde93a3-11da-49b3-b920-3a2f299644dc",
  "slideSchemaVersion": 2,
  "title": "Image blocks",
  "level": "core-learning",
  "order": 20,
  "contentUpdatedAt": "2026-10-27T00:03:45.956Z",
  "content": {
    "blocks": [
      {
        "type": "text",
        "markdown": "An {.large-bold `Image(s)`} {.bold block} creates flexible display layouts with **one or more images per row** and optional **preamble text** and a **caption label**. Any valid image file suitable for an HTML `<img>` tag can be used.\n\n## Adding images\n\nTo add an existing file, click **Add Image** or drop the file onto the loading panel. By default, uploaded images are stored per-slide in the slide's folder. To reuse images on multiple slides, change **Local image source** to \"Shared\", which stores them in `src/content/assets/images` for reuse. \n\nTo link to an external file, click **Add URL**. Remember that such links might go stale and/or require copyright permission or attribution.\n\nTo create a simpler image by drawing it on the whiteboard canvas, click **New Image**, give it a name and dimensions, and save when done.\n\n## Editing, deleting, and restoring images\n\nYou can edit any existing bitmap image in the drawing canvas by clicking the **Pencil edit icon button** to add annotations, crop or delete parts of the image, etc.  The previous image version is archived in the slide's `_unused` folder. If necessary, click **Restore Image** to go back to an archived version.\n\nSimilarly, when you click the `X` **Remove icon button** to remove an image from the slide, you can choose to archive it for later recovery instead of deleting it permanently.\n\nArchived images in `_unused` folders are not uploaded to GitHub as they are excluded via file `.gitignore`.\n\n## Sizing one or more images\n\nYou can put multiple images into one `Image(s)` block, e.g., to render two images in the same row.  Specify the display size(s) of the image(s) using the **Max width(s)** input, which accepts any valid CSS sizing value, e.g., `45%` or `350px`. If you give one max size, it is applied to all images; use space-delimited values to size multiple images independently.\n\nYou can also choose whether to center or left justify the image(s) using the **Center** input."
      },
      {
        "type": "image",
        "markdown": "## Example #1\n\nThis is a \"meta\" example where the image itself shows  the editor panel inputs that specify the image!",
        "images": [
          {
            "source": "slide",
            "url": "images_block.jpg"
          }
        ],
        "alt": "",
        "maxWidths": "600px",
        "center": true,
        "label": null
      },
      {
        "type": "image",
        "markdown": "## Example #2\n\nTwo side-by-side images created by:\n1. Drawing image #1 in the canvas.\n2. Duplicating and editing it to create image #2.\n3. Sizing the images independently as  `Max width(s): 35% 45%`.",
        "images": [
          {
            "source": "slide",
            "url": "image-demo_v3.jpg"
          },
          {
            "source": "slide",
            "url": "image-demo_2_v2.jpg"
          }
        ],
        "alt": "",
        "maxWidths": "35% 45%",
        "center": true,
        "label": "Images drawn and edited with the canvas."
      }
    ]
  }
};
