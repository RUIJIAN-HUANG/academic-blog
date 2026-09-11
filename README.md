# Ruijian Huang’s Personal Homepage

An Astro-based academic personal homepage for **Ruijian Huang / 黄睿健**, designed as a quiet, single-page profile with a Publications entry point.

## Local development

```bash
npm install
npm run dev
```

## Personal information

Edit `src/data/site.ts` to update the verified profile data:

- name, institution, college, field, study dates, and location;
- biography and research interests;
- education, news, awards, and publications;
- social links and the optional CV link.

Empty arrays and links are intentionally omitted from the rendered page until verified information is available.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` builds the static site on every push to `main` and deploys it through GitHub Pages. The workflow automatically sets the correct base path for the `RUIJIAN-HUANG/academic-blog` project site.
