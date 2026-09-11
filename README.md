# Ruijian Huang — Academic Notes

An Astro + TypeScript academic homepage and technical blog starter for **黄睿健 / Ruijian Huang**.

The visible personal details, projects, and CV entries are intentionally kept as placeholders until verified information is supplied. The three paper records are traceable public reading examples; they are marked as starter data and do not claim authorship or contribution.

## Local development

```bash
npm install
npm run dev
```

Open the local address shown by Astro. The first build creates the static Pagefind search index:

```bash
npm run build
npm run preview
```

## Content editing

- Blog posts: `src/content/blog/*.md`
- Projects: `src/content/projects/*.md`
- Papers and reading notes: `src/content/papers/*.md`
- Site identity and contact placeholders: `src/data/site.ts`
- CV template: `src/pages/cv.astro` and `public/cv/`

Content collections validate frontmatter during the build. Draft posts are excluded from lists, RSS, sitemap, and production routes.

## GitHub Pages deployment

1. Create a repository named `<github-username>.github.io` for a user site, or use any repository for a project site.
2. Push this project to the `main` branch.
3. In GitHub, open **Settings → Pages**, choose **GitHub Actions** as the source, and enable the workflow.
4. Replace the placeholder GitHub username, email, scholar, and ORCID values in `src/data/site.ts`.
5. If using a custom domain, set the `SITE_URL` value in the workflow and add the required DNS records. Update `public/robots.txt` accordingly.

The workflow automatically chooses `/` for a user site and `/<repository>/` for a project site, so asset links and Pagefind continue to work in both cases.
