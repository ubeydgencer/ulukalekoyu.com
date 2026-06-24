import type { Lang } from '../lib/i18n';
import data from '../content/pages/tarih.json';

// İçerik panelden (Sveltia CMS → "Sayfalar") düzenlenir: src/content/pages/tarih.json
export const TARIH = data as Record<Lang, typeof data.tr>;
