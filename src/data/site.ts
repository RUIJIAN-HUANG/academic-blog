export type SocialKey = 'github' | 'email' | 'scholar' | 'orcid' | 'wechat' | 'whatsapp';

export interface SocialLink {
  key: SocialKey;
  label: string;
  href?: string;
}

export interface EducationEntry {
  institution: string;
  dates: string;
  program: string;
  college: string;
}

export interface NewsEntry {
  date: string;
  text: string;
  href?: string;
}

export interface AwardEntry {
  title: string;
  organization: string;
  year: string;
  href?: string;
}

export interface PublicationEntry {
  title: string;
  authors: string;
  venue: string;
  year: string;
  href?: string;
  pdf?: string;
  code?: string;
}

export const siteConfig = {
  name: 'Ruijian Huang',
  nameZh: '黄睿健',
  brand: "Ruijian Huang's Personal Homepage",
  title: 'Ruijian Huang — Personal Homepage',
  description:
    'Personal homepage of Ruijian Huang, a second-year undergraduate student at Shenzhen University interested in machine learning, edge AI systems, tiny machine learning, and embodied intelligence.',
  siteUrl: 'https://ruijian-huang.github.io/academic-blog/',
  role: 'Second-year undergraduate student',
  institution: 'Shenzhen University',
  college: 'College of Computer Science and Software Engineering',
  field: 'Computer Science and Technology',
  enrollmentYear: 2025,
  expectedGraduationYear: 2029,
  location: 'Shenzhen, China',
  biography:
    'I’m a second-year undergraduate student from the College of Computer Science and Software Engineering, Shenzhen University. My research interests include machine learning, edge AI systems, tiny machine learning, and embodied intelligence.',
  profileImage: '/images/profile.jpg',
  cvHref: null as string | null,
  links: [
    { key: 'email', label: '2025150156@mails.szu.edu.cn' },
    { key: 'scholar', label: 'Google Scholar' },
    { key: 'github', label: 'GitHub', href: 'https://github.com/RUIJIAN-HUANG/' },
    { key: 'wechat', label: 'WeChat' },
    { key: 'whatsapp', label: 'WhatsApp' },
  ] as SocialLink[],
} as const;

export const researchInterests = [
  'Machine Learning',
  'Edge AI Systems',
  'Tiny Machine Learning',
  'Embodied Intelligence',
] as const;

export const education: EducationEntry[] = [
  {
    institution: siteConfig.institution,
    dates: `${siteConfig.enrollmentYear} – ${siteConfig.expectedGraduationYear}`,
    program: `Undergraduate studies in ${siteConfig.field}`,
    college: siteConfig.college,
  },
];

export const news: NewsEntry[] = [];
export const awards: AwardEntry[] = [];
export const publications: PublicationEntry[] = [];

export function withBase(path: string) {
  const base = import.meta.env.BASE_URL || '/';
  const normalizedPath = path.replace(/^\/+/, '');

  if (!normalizedPath) return base;
  return `${base.endsWith('/') ? base : `${base}/`}${normalizedPath}`;
}
