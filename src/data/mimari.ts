import type { Lang } from '../lib/i18n';
import data from '../content/pages/mimari.json';

// İçerik panelden (Sveltia CMS → "Sayfalar") düzenlenir: src/content/pages/mimari.json
export const MIMARI = data as Record<Lang, typeof data.tr>;
