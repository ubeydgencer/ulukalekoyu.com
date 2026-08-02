import { LOCALES, type Lang } from './i18n';
import { POSTS } from '../data/blog';
import { CUSTOM } from '../data/custom';
import type { OGImageOptions } from 'astro-og-canvas';

// Her sayfa için sosyal paylaşım kartında görünecek başlık + alt satır.
type Card = { t: string; d: string };
const TAGLINE: Record<Lang, string> = {
  tr: 'Ulukale Köyü Dijital Arşivi · Çemişgezek, Dersim',
  en: 'Ulukale Village Digital Archive · Çemişgezek, Dersim',
  ar: 'أرشيف قرية أولوكالة الرقمي · تشيميشكزك، ديرسم',
};
const PAGE_CARD: Record<string, Record<Lang, Card>> = {
  index:     { tr: { t: 'Ulukale Köyü', d: 'Dijital Arşiv · Çemişgezek, Dersim' }, en: { t: 'Ulukale Village', d: 'Digital Archive · Çemişgezek, Dersim' }, ar: { t: 'قرية أولوكالة', d: 'الأرشيف الرقمي · تشيميشكزك، ديرسم' } },
  tarih:     { tr: { t: 'Tarih', d: TAGLINE.tr }, en: { t: 'History', d: TAGLINE.en }, ar: { t: 'التاريخ', d: TAGLINE.ar } },
  mimari:    { tr: { t: 'Tarihi Yapılar', d: TAGLINE.tr }, en: { t: 'Historic Buildings', d: TAGLINE.en }, ar: { t: 'المباني التاريخية', d: TAGLINE.ar } },
  dut:       { tr: { t: 'Ulukale Dutu', d: TAGLINE.tr }, en: { t: 'Ulukale Mulberry', d: TAGLINE.en }, ar: { t: 'توت أولوكالة', d: TAGLINE.ar } },
  arsiv:     { tr: { t: 'Fotoğraf Arşivi', d: TAGLINE.tr }, en: { t: 'Photo Archive', d: TAGLINE.en }, ar: { t: 'أرشيف الصور', d: TAGLINE.ar } },
  hafiza:    { tr: { t: 'Sözlü Tarih & Hafıza', d: TAGLINE.tr }, en: { t: 'Oral History & Memory', d: TAGLINE.en }, ar: { t: 'التاريخ الشفهي والذاكرة', d: TAGLINE.ar } },
  sozluk:    { tr: { t: 'Sözlük — Ulukale Ağzı', d: TAGLINE.tr }, en: { t: 'Dictionary — Ulukale Dialect', d: TAGLINE.en }, ar: { t: 'المعجم — لهجة أولوكالة', d: TAGLINE.ar } },
  basin:     { tr: { t: 'Basında Ulukale', d: TAGLINE.tr }, en: { t: 'Ulukale in the Press', d: TAGLINE.en }, ar: { t: 'أولوكالة في الإعلام', d: TAGLINE.ar } },
  duyurular: { tr: { t: 'Duyurular', d: TAGLINE.tr }, en: { t: 'Announcements', d: TAGLINE.en }, ar: { t: 'إعلانات', d: TAGLINE.ar } },
  ulasim:    { tr: { t: 'Ulaşım & Feribot', d: TAGLINE.tr }, en: { t: 'Getting There & Ferry', d: TAGLINE.en }, ar: { t: 'الوصول والعبّارة', d: TAGLINE.ar } },
  iletisim:  { tr: { t: 'İletişim & Katkı', d: TAGLINE.tr }, en: { t: 'Contact & Contribute', d: TAGLINE.en }, ar: { t: 'التواصل والمساهمة', d: TAGLINE.ar } },
};

// route anahtarı -> kart içeriği. Anahtar: `${lang}/${page}[/${subslug}]`
export type CardData = { title: string; description: string; dir: 'rtl' | 'ltr' };
export const ogPages: Record<string, CardData> = {};
for (const lang of LOCALES) {
  const dir: 'rtl' | 'ltr' = lang === 'ar' ? 'rtl' : 'ltr';
  for (const [pg, meta] of Object.entries(PAGE_CARD)) {
    ogPages[`${lang}/${pg}`] = { title: meta[lang].t, description: meta[lang].d, dir };
  }
  for (const post of POSTS) {
    ogPages[`${lang}/duyurular/${post.slug}`] = { title: post.title[lang], description: TAGLINE[lang], dir };
  }
  for (const c of CUSTOM) {
    ogPages[`${lang}/${c.slug}`] = { title: c.title[lang], description: TAGLINE[lang], dir };
  }
}

const KEYS = new Set(Object.keys(ogPages));

// Base.astro burayı çağırır: sayfaya karşılık gelen kart URL'i (yoksa null → varsayılan kart).
export function ogCardUrl(lang: Lang, page: string, subPath = ''): string | null {
  const sub = subPath.replace(/\/+$/, '');
  const key = sub ? `${lang}/${page}/${sub}` : `${lang}/${page}`;
  return KEYS.has(key) ? `https://ulukalekoyu.com/og/${key}.png` : null;
}

// astro-og-canvas kart tasarımı (koyu kerpiç zemin, kerpiç aksan çizgi, Gelasio/Amiri font)
export function getCardOptions(card: CardData): OGImageOptions {
  const rtl = card.dir === 'rtl';
  const fam = rtl ? ['Amiri'] : ['Gelasio', 'Amiri'];
  return {
    title: card.title,
    description: card.description,
    dir: card.dir,
    bgGradient: [[46, 36, 28], [22, 16, 11]],
    border: { color: [169, 84, 45], width: 16, side: 'inline-start' },
    padding: 78,
    fonts: ['./src/fonts/Gelasio.ttf', './src/fonts/Amiri-Regular.ttf', './src/fonts/Amiri-Bold.ttf'],
    font: {
      title: { color: [244, 236, 221], size: rtl ? 88 : 80, weight: 'Bold', lineHeight: 1.15, families: fam },
      description: { color: [214, 150, 110], size: 34, weight: 'Normal', lineHeight: 1.35, families: fam },
    },
    format: 'PNG',
  };
}
