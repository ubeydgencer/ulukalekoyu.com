import type { Lang } from '../lib/i18n';
import data from '../content/pages/iletisim.json';

// İçerik panelden (Sveltia CMS → "Sayfalar") düzenlenir: src/content/pages/iletisim.json
export const ILETISIM = data as Record<Lang, typeof data.tr>;
