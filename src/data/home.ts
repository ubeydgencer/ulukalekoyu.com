import type { Lang } from '../lib/i18n';
import data from '../content/pages/home.json';

export interface HomeContent {
  meta: { title: string; description: string };
  heroEyebrow: string; heroH1: string; heroLead: string;
  btnHistory: string; btnMemory: string;
  stats: { num: string; lbl: string }[];
  introKicker: string; introH2: string; introP: string[];
  exploreKicker: string; exploreH2: string; exploreSub: string;
  cards: { key: string; h3: string; p: string }[];
  memoryQuote: string; memoryCite: string;
  dedKicker: string; dedText: string;
  ctaH2: string; ctaP: string; ctaBtn: string;
}

// İçerik panelden (Sveltia CMS → "Sayfalar → Ana Sayfa") düzenlenir: src/content/pages/home.json
export const HOME = data as Record<Lang, HomeContent>;
