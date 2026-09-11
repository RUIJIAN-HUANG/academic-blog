import mermaid from 'mermaid';

export async function renderMermaid() {
  const nodes = [...document.querySelectorAll<HTMLElement>('pre.mermaid')];
  if (!nodes.length) return;

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'strict',
    theme: document.documentElement.dataset.theme === 'dark' ? 'dark' : 'base',
    fontFamily: 'Inter, Noto Sans SC, sans-serif',
  });

  await mermaid.run({ nodes });
}

document.addEventListener('astro:page-load', () => {
  renderMermaid().catch(() => {
    // Keep the source visible when a diagram cannot be rendered.
  });
});

renderMermaid().catch(() => {
  // Keep the source visible when a diagram cannot be rendered.
});
