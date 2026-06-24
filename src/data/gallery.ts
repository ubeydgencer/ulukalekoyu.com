import type { Lang } from '../lib/i18n';
type L = Record<Lang, string>;

export interface Photo {
  group: 'eski' | 'koyden' | 'mimari' | 'dut';
  src: string;
  alt: L;
  caption: L;
  source?: string; // kaynak adı (ör. "AA"); component "Foto:" önekini dile göre ekler
  span2?: boolean;
}

interface RawPhoto {
  group: Photo['group']; image: string; span2?: boolean; source?: string;
  alt_tr: string; alt_en: string; alt_ar: string;
  caption_tr: string; caption_en: string; caption_ar: string;
}

// İçerik panelden (Sveltia CMS) yönetilir: src/content/gallery/*.json
const files = import.meta.glob<RawPhoto>('../content/gallery/*.json', { eager: true, import: 'default' });

export const PHOTOS: Photo[] = Object.keys(files)
  .sort()
  .map((k) => {
    const r = files[k];
    return {
      group: r.group, src: r.image, span2: !!r.span2,
      source: r.source ? r.source : undefined,
      alt: { tr: r.alt_tr, en: r.alt_en, ar: r.alt_ar },
      caption: { tr: r.caption_tr, en: r.caption_en, ar: r.caption_ar },
    };
  });
