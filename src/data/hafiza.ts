import type { Lang } from '../lib/i18n';
import data from '../content/pages/hafiza.json';

// İçerik panelden (Sveltia CMS → "Sayfalar") düzenlenir: src/content/pages/hafiza.json
export const HAFIZA = data as Record<Lang, typeof data.tr>;
