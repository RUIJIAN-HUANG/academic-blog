import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import remarkMermaid from './src/lib/remarkMermaid.mjs';

const siteUrl = process.env.SITE_URL || 'https://your-github-username.github.io/';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: siteUrl,
  base,
  output: 'static',
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    remarkPlugins: [remarkMath, remarkMermaid],
    rehypePlugins: [[rehypeKatex, { strict: false }]],
    shikiConfig: {
      theme: 'github-dark-default',
      wrap: true,
    },
  },
});
