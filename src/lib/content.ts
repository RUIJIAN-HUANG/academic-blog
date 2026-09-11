import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;
export type Project = CollectionEntry<'projects'>;
export type Paper = CollectionEntry<'papers'>;

export function slugFor(entry: { id: string }) {
  return entry.id.replace(/\.(md|mdx)$/i, '');
}

export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getProjects() {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => Number(b.data.featured) - Number(a.data.featured));
}

export async function getPapers() {
  const papers = await getCollection('papers');
  return papers.sort((a, b) => b.data.year - a.data.year);
}

export function formatDate(date: Date, locale = 'en-US') {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}

export function getReadingTime(post: BlogPost) {
  if (post.data.readingTime) return post.data.readingTime;
  const source = post.body || '';
  const words = source.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

export function excerptFor(locale: 'en' | 'zh', entry: BlogPost | Project | Paper) {
  if (locale === 'zh') {
    if ('summaryZh' in entry.data) return entry.data.summaryZh;
    return entry.data.abstractZh;
  }

  if ('summary' in entry.data) return entry.data.summary;
  return entry.data.abstract;
}
