import type { Lang } from '../lib/i18n';
import data from '../content/pages/dut.json';

// İçerik panelden (Sveltia CMS → "Sayfalar") düzenlenir: src/content/pages/dut.json
export const DUT = data as Record<Lang, typeof data.tr>;
