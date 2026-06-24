import type { Lang } from '../lib/i18n';
type L = Record<Lang, string>;

export interface PressItem {
  section: 'history' | 'dut' | 'memory';
  outlet: L;
  date: L;
  headline: L;
  summary: L;
  url: string;
  kind: 'article' | 'gallery';
}

interface RawPress {
  section: PressItem['section']; kind: PressItem['kind']; url: string;
  outlet_tr: string; outlet_en: string; outlet_ar: string;
  date_tr: string; date_en: string; date_ar: string;
  headline_tr: string; headline_en: string; headline_ar: string;
  summary_tr: string; summary_en: string; summary_ar: string;
}

// İçerik panelden (Sveltia CMS) yönetilir: src/content/press/*.json
const files = import.meta.glob<RawPress>('../content/press/*.json', { eager: true, import: 'default' });

export const PRESS: PressItem[] = Object.keys(files)
  .sort()
  .map((k) => {
    const r = files[k];
    return {
      section: r.section, kind: r.kind, url: r.url,
      outlet: { tr: r.outlet_tr, en: r.outlet_en, ar: r.outlet_ar },
      date: { tr: r.date_tr, en: r.date_en, ar: r.date_ar },
      headline: { tr: r.headline_tr, en: r.headline_en, ar: r.headline_ar },
      summary: { tr: r.summary_tr, en: r.summary_en, ar: r.summary_ar },
    };
  });
