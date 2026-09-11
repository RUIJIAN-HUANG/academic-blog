import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const siteUrl = process.env.SITE_URL || 'https://ruijian-huang.github.io/academic-blog/';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: siteUrl,
  base,
  output: 'static',
  integrations: [sitemap()],
});
