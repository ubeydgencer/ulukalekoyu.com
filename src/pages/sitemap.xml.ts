import { LOCALES, localeUrl } from '../lib/i18n';
import { POSTS } from '../data/blog';
import { CUSTOM, customPath } from '../data/custom';

// Dinamik site haritası: sabit sayfalar + tüm duyurular (panelden eklenince otomatik girer)
const PAGES: { key: string; freq: string; prio: number }[] = [
  { key: 'index', freq: 'monthly', prio: 1.0 },
  { key: 'tarih', freq: 'yearly', prio: 0.8 },
  { key: 'mimari', freq: 'monthly', prio: 0.8 },
  { key: 'dut', freq: 'monthly', prio: 0.7 },
  { key: 'arsiv', freq: 'monthly', prio: 0.7 },
  { key: 'hafiza', freq: 'monthly', prio: 0.6 },
  { key: 'basin', freq: 'monthly', prio: 0.6 },
  { key: 'duyurular', freq: 'weekly', prio: 0.7 },
  { key: 'ulasim', freq: 'monthly', prio: 0.6 },
  { key: 'iletisim', freq: 'yearly', prio: 0.4 },
];
const today = new Date().toISOString().slice(0, 10);

function urlEntry(loc: string, lastmod: string, freq: string, prio: number, alternates: { lang: string; href: string }[], image?: string) {
  let s = `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${freq}</changefreq>\n    <priority>${prio.toFixed(1)}</priority>\n`;
  for (const a of alternates) s += `    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${a.href}"/>\n`;
  s += `    <xhtml:link rel="alternate" hreflang="x-default" href="${alternates[0].href}"/>\n`;
  if (image) s += `    <image:image><image:loc>${image}</image:loc></image:image>\n`;
  s += `  </url>\n`;
  return s;
}

export function GET() {
  let body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xhtml="http://www.w3.org/1999/xhtml"\n        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n\n`;

  for (const p of PAGES) {
    for (const lang of LOCALES) {
      const prio = lang === 'tr' ? p.prio : Math.max(0.3, p.prio - 0.1);
      const alternates = LOCALES.map((l) => ({ lang: l, href: localeUrl(l, p.key) }));
      const img = p.key === 'index' ? 'https://ulukalekoyu.com/images/koy-eski.jpg' : undefined;
      body += urlEntry(localeUrl(lang, p.key), today, p.freq, prio, alternates, img);
    }
  }

  for (const post of POSTS) {
    for (const lang of LOCALES) {
      const prio = lang === 'tr' ? 0.6 : 0.5;
      const alternates = LOCALES.map((l) => ({ lang: l, href: localeUrl(l, 'duyurular') + post.slug + '/' }));
      body += urlEntry(localeUrl(lang, 'duyurular') + post.slug + '/', post.date, 'monthly', prio, alternates, post.cover ? 'https://ulukalekoyu.com' + post.cover : undefined);
    }
  }

  for (const cp of CUSTOM) {
    for (const lang of LOCALES) {
      const prio = lang === 'tr' ? 0.6 : 0.5;
      const alternates = LOCALES.map((l) => ({ lang: l, href: 'https://ulukalekoyu.com' + customPath(l, cp.slug) }));
      body += urlEntry('https://ulukalekoyu.com' + customPath(lang, cp.slug), today, 'monthly', prio, alternates);
    }
  }

  body += `\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
