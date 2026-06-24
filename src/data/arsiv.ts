import type { Lang } from '../lib/i18n';
import data from '../content/pages/arsiv.json';

// İçerik panelden (Sveltia CMS → "Sayfalar") düzenlenir: src/content/pages/arsiv.json
export const ARSIV = data as Record<Lang, typeof data.tr>;
