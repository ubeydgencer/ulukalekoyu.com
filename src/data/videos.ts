import type { Lang } from '../lib/i18n';
type L = Record<Lang, string>;

export interface Video {
  id: string;
  youtubeId: string;
  source: string;
  order: number;
  title: L;
}

interface RawVideo {
  youtubeId: string; source: string; order?: number;
  title_tr: string; title_en: string; title_ar: string;
}

// Videolar panelden (Sveltia CMS → "Videolar") yönetilir: src/content/videos/*.json
const files = import.meta.glob<RawVideo>('../content/videos/*.json', { eager: true, import: 'default' });

export const VIDEOS: Video[] = Object.entries(files)
  .map(([path, r]) => ({
    id: path.split('/').pop()!.replace(/\.json$/, ''),
    youtubeId: r.youtubeId,
    source: r.source,
    order: typeof r.order === 'number' ? r.order : 100,
    title: { tr: r.title_tr, en: r.title_en, ar: r.title_ar },
  }))
  .sort((a, b) => a.order - b.order);
