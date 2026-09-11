import rss from '@astrojs/rss';
import { getPosts, slugFor } from '../lib/content';
import { siteConfig } from '../data/site';

export async function GET(context) {
  const posts = await getPosts();

  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site || siteConfig.siteUrl,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.date,
      link: `/blog/${slugFor(post)}/`,
      categories: [post.data.category, ...post.data.tags],
    })),
    customData: '<language>en</language>',
  });
}
