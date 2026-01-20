const defaultCssPaths = [
  '/metary/css/plugins/default.css',
  '/metary/css/styles.css',
];

async function fileExists(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

function ensureLinkTag(href) {
  const existing = document.querySelector(`link[rel="stylesheet"][href="${href}"]`);
  if (existing) return;

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}

export async function loadMetaryAssets({ cssPaths = defaultCssPaths } = {}) {
  // Only load files that actually exist to avoid noisy 404s.
  for (const href of cssPaths) {
    // eslint-disable-next-line no-await-in-loop
    const ok = await fileExists(href);
    if (ok) ensureLinkTag(href);
  }
}
