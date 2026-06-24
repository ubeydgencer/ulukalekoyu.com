import { writeFileSync } from 'node:fs';
import { MIMARI, MIMARI_CARDS } from '../src/data/mimari.ts';
import { HAFIZA, HAFIZA_CARDS } from '../src/data/hafiza.ts';
import { TARIH, NAME_EVO } from '../src/data/tarih.ts';
const L = ['tr', 'en', 'ar'] as const;

const mimari: any = {};
for (const l of L) mimari[l] = { ...MIMARI[l], cards: MIMARI_CARDS.map((c) => ({ icon: c.icon, h3: c.h3[l], p: c.p[l] })) };
writeFileSync('src/content/pages/mimari.json', JSON.stringify(mimari, null, 2) + '\n');

const hafiza: any = {};
for (const l of L) hafiza[l] = { ...HAFIZA[l], cards: HAFIZA_CARDS.map((c) => ({ icon: c.icon, h3: c.h3[l], p: c.p[l] })) };
writeFileSync('src/content/pages/hafiza.json', JSON.stringify(hafiza, null, 2) + '\n');

const tarih: any = {};
for (const l of L) tarih[l] = { ...TARIH[l], nameEvo: NAME_EVO.map((n) => ({ date: n.date[l], name: n.name, note: n.note ? n.note[l] : '' })) };
writeFileSync('src/content/pages/tarih.json', JSON.stringify(tarih, null, 2) + '\n');
console.log('mimari.json, hafiza.json, tarih.json (katlanmış) yazıldı');
