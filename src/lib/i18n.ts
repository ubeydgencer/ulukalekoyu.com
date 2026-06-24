// Çok dilli temel: diller, yön, navigasyon, footer ve yol/hreflang yardımcıları.
export type Lang = 'tr' | 'en' | 'ar';
export const LOCALES: Lang[] = ['tr', 'en', 'ar'];
export const DIR: Record<Lang, 'ltr' | 'rtl'> = { tr: 'ltr', en: 'ltr', ar: 'rtl' };
export const HTML_LANG: Record<Lang, string> = { tr: 'tr', en: 'en', ar: 'ar' };
export const OG_LOCALE: Record<Lang, string> = { tr: 'tr_TR', en: 'en_US', ar: 'ar_AR' };

// Sayfa anahtarı -> dizin segmenti (index kök)
export const PAGE_FILE: Record<string, string> = {
  index: '',
  tarih: 'tarih',
  mimari: 'mimari',
  dut: 'dut',
  arsiv: 'arsiv',
  hafiza: 'hafiza',
  basin: 'basin',
  duyurular: 'duyurular',
  feribot: 'feribot',
  iletisim: 'iletisim',
};

// Bir dil + sayfa için site-içi mutlak yol (dizin tabanlı, sonda /)
export function localePath(lang: Lang, pageKey: string): string {
  const seg = PAGE_FILE[pageKey] ?? pageKey;
  const base = lang === 'tr' ? '/' : `/${lang}/`;
  return seg === '' ? base : base + seg + '/';
}

// Tam URL (hreflang/canonical için)
export function localeUrl(lang: Lang, pageKey: string): string {
  return 'https://ulukalekoyu.com' + localePath(lang, pageKey);
}

// Navigasyon: anahtar + her dilde etiket
export const NAV: { key: string; label: Record<Lang, string> }[] = [
  { key: 'index',    label: { tr: 'Ana Sayfa',       en: 'Home',              ar: 'الرئيسية' } },
  { key: 'tarih',    label: { tr: 'Tarih',           en: 'History',           ar: 'التاريخ' } },
  { key: 'mimari',   label: { tr: 'Tarihi Yapılar',  en: 'Historic Buildings',ar: 'المباني التاريخية' } },
  { key: 'dut',      label: { tr: 'Dut',             en: 'Mulberry',          ar: 'التوت' } },
  { key: 'arsiv',    label: { tr: 'Fotoğraf Arşivi', en: 'Photo Archive',     ar: 'أرشيف الصور' } },
  { key: 'hafiza',   label: { tr: 'Hafıza',          en: 'Memory',            ar: 'الذاكرة' } },
  { key: 'basin',    label: { tr: 'Basın',           en: 'Press',             ar: 'الصحافة' } },
  { key: 'duyurular',label: { tr: 'Duyurular',       en: 'Announcements',     ar: 'إعلانات' } },
  { key: 'feribot',  label: { tr: 'Feribot',         en: 'Ferry',             ar: 'العبّارة' } },
  { key: 'iletisim', label: { tr: 'İletişim',        en: 'Contact',           ar: 'اتصل بنا' } },
];

// Marka alt yazısı
export const BRAND_SUB: Record<Lang, string> = {
  tr: 'Köy Arşivi', en: 'Village Archive', ar: 'أرشيف القرية',
};

// Footer metinleri — panelden (Sveltia CMS → "Sayfalar → Footer") düzenlenir: src/content/pages/footer.json
import footerData from '../content/pages/footer.json';
type FooterKey = keyof (typeof footerData)['tr'];
const FOOTER_KEYS = Object.keys(footerData.tr) as FooterKey[];
export const FOOTER = Object.fromEntries(
  FOOTER_KEYS.map((k) => [k, { tr: footerData.tr[k], en: footerData.en[k], ar: footerData.ar[k] }]),
) as Record<FooterKey, Record<Lang, string>>;

export const MENU_LABEL: Record<Lang, string> = { tr: 'Menü', en: 'Menu', ar: 'القائمة' };
