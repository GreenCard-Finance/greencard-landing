# GreenCard Finance Content Studio

This Studio is the editorial workspace for the GreenCard Finance blog. It connects to the `production` dataset in Sanity.

## Publishing a post

1. Open the deployed Studio and sign in with your approved GreenCard Sanity account.
2. Select **Post**, then click **Create**.
3. Add the title, category, summary, date, read time, optional cover image, and article body.
4. Keep the generated slug, or edit it before publishing if needed. It becomes the article URL at `/blog/<slug>`.
5. Click **Publish**. The live website refreshes its blog content within one minute.

Only published posts are visible on the public website. Drafts remain private to Studio users.

## Content fields

- **Category:** use one of the existing GreenCard blog topics so the topic filters continue to work.
- **Summary:** a concise one or two sentence card description.
- **Read time:** choose the closest estimate.
- **Cover image:** optional. Existing posts retain the current site illustrations until an image is uploaded.
- **Body:** supports headings, paragraphs, lists, bold text, italics, and links.

## Local development

```bash
pnpm install --ignore-workspace
pnpm dev
```

The production editor is deployed separately from the public marketing site. Sanity controls editorial sign-in and keeps the content in its hosted dataset.
