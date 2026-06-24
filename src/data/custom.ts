import type { Lang } from '../lib/i18n';
type L = Record<Lang, string>;

export interface CustomPage {
  slug: string;
  showInNav: boolean;
  order: number;
  navLabel: L;
  title: L;
  intro: L;
  body: L;
}

interface RawCustom {
  slug: string; showInNav?: boolean; order?: number;
  navLabel_tr: string; navLabel_en: string; navLabel_ar: string;
  title_tr: string; title_en: string; title_ar: string;
  intro_tr?: string; intro_en?: string; intro_ar?: string;
  body_tr: string; body_en: string; body_ar: string;
}

// Mevcut rotalarla çakışmaması için rezerve slug'lar (panelde bunlar kullanılırsa sayfa atlanır)
const RESERVED = new Set([
  '', 'tarih', 'mimari', 'dut', 'arsiv', 'hafiza', 'basin', 'duyurular', 'iletisim',
  'tesekkurler', '404', 'admin', 'images', 'css', 'js', 'en', 'ar', 'sitemap.xml',
  'robots.txt', 'llms.txt', 'humans.txt', 'favicon.svg', 'site.webmanifest',
]);

// Yeni sayfalar panelden (Sveltia CMS → "Özel Sayfalar") yönetilir: src/content/custom/*.json
const files = import.meta.glob<RawCustom>('../content/custom/*.json', { eager: true, import: 'default' });

export const CUSTOM: CustomPage[] = Object.values(files)
  .map((r) => ({
    slug: (r.slug || '').trim().replace(/^\/+|\/+$/g, ''),
    showInNav: !!r.showInNav,
    order: typeof r.order === 'number' ? r.order : 100,
    navLabel: { tr: r.navLabel_tr, en: r.navLabel_en, ar: r.navLabel_ar },
    title: { tr: r.title_tr, en: r.title_en, ar: r.title_ar },
    intro: { tr: r.intro_tr || '', en: r.intro_en || '', ar: r.intro_ar || '' },
    body: { tr: r.body_tr, en: r.body_en, ar: r.body_ar },
  }))
  .filter((p) => p.slug && !RESERVED.has(p.slug))
  .sort((a, b) => a.order - b.order);

// Özel sayfa için site-içi yol (dil önekli)
export function customPath(lang: Lang, slug: string): string {
  return (lang === 'tr' ? '/' : `/${lang}/`) + slug + '/';
}

export const NAV_CUSTOM = CUSTOM.filter((p) => p.showInNav);
