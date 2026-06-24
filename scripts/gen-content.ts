import { mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { PRESS } from '../src/data/press.ts';
import { PHOTOS } from '../src/data/gallery.ts';

const root = new URL('..', import.meta.url).pathname;
const pressDir = root + 'src/content/press';
const galDir = root + 'src/content/gallery';
rmSync(pressDir, { recursive: true, force: true });
rmSync(galDir, { recursive: true, force: true });
mkdirSync(pressDir, { recursive: true });
mkdirSync(galDir, { recursive: true });

const pad = (n: number) => String(n).padStart(2, '0');
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 32);

PRESS.forEach((p, i) => {
  const obj = {
    section: p.section, kind: p.kind, url: p.url,
    outlet_tr: p.outlet.tr, outlet_en: p.outlet.en, outlet_ar: p.outlet.ar,
    date_tr: p.date.tr, date_en: p.date.en, date_ar: p.date.ar,
    headline_tr: p.headline.tr, headline_en: p.headline.en, headline_ar: p.headline.ar,
    summary_tr: p.summary.tr, summary_en: p.summary.en, summary_ar: p.summary.ar,
  };
  writeFileSync(`${pressDir}/${pad(i + 1)}-${slug(p.outlet.en)}.json`, JSON.stringify(obj, null, 2) + '\n');
});

PHOTOS.forEach((p, i) => {
  const obj = {
    group: p.group, image: p.src, span2: !!p.span2, source: p.source ?? '',
    alt_tr: p.alt.tr, alt_en: p.alt.en, alt_ar: p.alt.ar,
    caption_tr: p.caption.tr, caption_en: p.caption.en, caption_ar: p.caption.ar,
  };
  writeFileSync(`${galDir}/${pad(i + 1)}-${p.group}.json`, JSON.stringify(obj, null, 2) + '\n');
});

console.log(`Yazıldı: ${PRESS.length} basın, ${PHOTOS.length} galeri JSON`);
