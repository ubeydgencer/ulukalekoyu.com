import type { Lang } from '../lib/i18n';
import data from '../content/pages/basin.json';

// İçerik panelden (Sveltia CMS → "Sayfalar") düzenlenir: src/content/pages/basin.json
export const BASIN = data as Record<Lang, typeof data.tr>;
