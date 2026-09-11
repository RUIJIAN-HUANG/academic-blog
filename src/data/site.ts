export type SiteLink = {
  key: 'github' | 'email' | 'scholar' | 'orcid';
  label: string;
  labelZh: string;
  href: string | null;
  detail: string;
  detailZh: string;
};

export const siteConfig = {
  name: 'Ruijian Huang',
  nameZh: '黄睿健',
  title: 'Ruijian Huang — Academic Notes',
  description:
    'Academic homepage and technical notes by Ruijian Huang, a Computer Science and Technology student exploring embodied intelligence and robot learning.',
  descriptionZh: '黄睿健的学术主页与技术笔记，记录计算机科学与技术学习、具身智能与机器人学习探索。',
  siteUrl: 'https://your-github-username.github.io/',
  role: 'Student',
  roleZh: '学生',
  field: 'Computer Science and Technology',
  fieldZh: '计算机科学与技术',
  interest: 'Embodied Intelligence & Robot Learning',
  interestZh: '具身智能与机器人学习',
  intro:
    'A student in Computer Science and Technology exploring how intelligent systems can perceive, learn, and act in the physical world.',
  introZh: '计算机科学与技术专业学生，正在探索智能系统如何在物理世界中感知、学习与行动。',
  location: '[Location to be added]',
  locationZh: '[所在地待补充]',
  links: [
    {
      key: 'github',
      label: 'GitHub',
      labelZh: 'GitHub',
      href: null,
      detail: 'GitHub username to be added',
      detailZh: 'GitHub 用户名待补充',
    },
    {
      key: 'email',
      label: 'Email',
      labelZh: '邮箱',
      href: null,
      detail: 'Email address to be added',
      detailZh: '邮箱地址待补充',
    },
    {
      key: 'scholar',
      label: 'Google Scholar',
      labelZh: 'Google Scholar',
      href: null,
      detail: 'Scholar profile to be added',
      detailZh: 'Scholar 主页待补充',
    },
    {
      key: 'orcid',
      label: 'ORCID',
      labelZh: 'ORCID',
      href: null,
      detail: 'ORCID iD to be added',
      detailZh: 'ORCID iD 待补充',
    },
  ] satisfies SiteLink[],
} as const;

export const researchTopics = [
  {
    number: '01',
    title: 'Embodied Intelligence',
    titleZh: '具身智能',
    description:
      'How an agent connects perception, reasoning, and action when it has to operate in a physical environment.',
    descriptionZh: '关注智能体如何在物理环境中连接感知、推理与行动。',
    tags: ['embodied-intelligence'],
    accent: 'teal',
  },
  {
    number: '02',
    title: 'Robot Learning',
    titleZh: '机器人学习',
    description:
      'A working space for studying policies, demonstrations, representations, and the practical details of learning from data.',
    descriptionZh: '用于记录策略、示范、表征以及从数据中学习的实践问题。',
    tags: ['robot-learning'],
    accent: 'blue',
  },
  {
    number: '03',
    title: 'Perception → Decision → Control',
    titleZh: '感知 → 决策 → 控制',
    description:
      'An editorial lens for organizing future notes across the pipeline from observations to actions; scope remains open.',
    descriptionZh: '用于整理从观测到行动的未来笔记，具体研究范围仍待补充。',
    tags: ['perception', 'control'],
    accent: 'slate',
  },
  {
    number: '04',
    title: 'Reproducible Research Practice',
    titleZh: '可复现研究实践',
    description:
      'A practical thread about recording environments, assumptions, metrics, failures, and evidence clearly.',
    descriptionZh: '记录环境、假设、指标、失败原因与证据的实践主线。',
    tags: ['reproducibility', 'research-methods'],
    accent: 'amber',
  },
] as const;

export const blogCategories = [
  { value: 'Algorithms & Data Structures', label: 'Algorithms & Data Structures', labelZh: '算法与数据结构' },
  { value: 'AI Learning Notes', label: 'AI Learning Notes', labelZh: 'AI 学习笔记' },
  { value: 'Paper Reading', label: 'Paper Reading', labelZh: '论文阅读' },
  { value: 'Experiment Review', label: 'Experiment Review', labelZh: '实验复盘' },
  { value: 'Programming Projects', label: 'Programming Projects', labelZh: '编程项目' },
  { value: 'Research Methods', label: 'Research Methods', labelZh: '研究方法' },
  { value: 'Learning Reflections', label: 'Learning Reflections', labelZh: '学习反思' },
  { value: 'Academic Viewpoints', label: 'Academic Viewpoints', labelZh: '学术观点' },
] as const;

export const cvPlaceholders = {
  education: '[Institution, degree, and dates to be added]',
  educationZh: '[学校、学位与时间待补充]',
  research: '[Research group, advisor, role, and dates to be added]',
  researchZh: '[研究组、导师、角色与时间待补充]',
  skills: ['[Programming language]', '[ML framework]', '[Research tool]'],
  skillsZh: ['[编程语言]', '[机器学习框架]', '[研究工具]'],
} as const;

export function withBase(path: string) {
  const base = import.meta.env.BASE_URL || '/';
  const normalizedPath = path.replace(/^\/+/, '');

  if (!normalizedPath) return base;
  return `${base.endsWith('/') ? base : `${base}/`}${normalizedPath}`;
}
