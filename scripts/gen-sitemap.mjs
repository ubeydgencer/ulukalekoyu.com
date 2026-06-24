import { writeFileSync } from 'node:fs';

const today = '2026-06-24';
const base = 'https://ulukalekoyu.com';
// pageKey -> [path segment, changefreq, priority(tr)]
const pages = [
  ['', 'monthly', 1.0],
  ['tarih', 'yearly', 0.8],
  ['mimari', 'monthly', 0.8],
  ['dut', 'monthly', 0.7],
  ['arsiv', 'monthly', 0.7],
  ['hafiza', 'monthly', 0.6],
  ['basin', 'monthly', 0.6],
  ['iletisim', 'yearly', 0.4],
];
const langs = [
  ['tr', ''],
  ['en', '/en'],
  ['ar', '/ar'],
];

const url = (lang, prefix, seg) => `${base}${prefix}${seg ? '/' + seg : ''}/`.replace(/([^:])\/\//g, '$1/');

let out = `<?xml version="1.0" encoding="UTF-8"?>\n`;
out += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
out += `        xmlns:xhtml="http://www.w3.org/1999/xhtml"\n`;
out += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n\n`;

for (const [seg, freq, prio] of pages) {
  for (const [lang, prefix] of langs) {
    const loc = url(lang, prefix, seg);
    const p = lang === 'tr' ? prio : Math.max(0.3, prio - 0.1);
    out += `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${freq}</changefreq>\n    <priority>${p.toFixed(1)}</priority>\n`;
    // hreflang alternates
    for (const [l2, pre2] of langs) {
      out += `    <xhtml:link rel="alternate" hreflang="${l2}" href="${url(l2, pre2, seg)}"/>\n`;
    }
    out += `    <xhtml:link rel="alternate" hreflang="x-default" href="${url('tr', '', seg)}"/>\n`;
    if (seg === '') {
      out += `    <image:image>\n      <image:loc>${base}/images/koy-eski.jpg</image:loc>\n      <image:title>Ulukale köyünün eski hali — minare, kerpiç evler ve harman yeri</image:title>\n    </image:image>\n`;
    }
    out += `  </url>\n`;
  }
}
out += `\n</urlset>\n`;
writeFileSync('public/sitemap.xml', out);
console.log('public/sitemap.xml yazıldı:', (out.match(/<url>/g) || []).length, 'URL');
