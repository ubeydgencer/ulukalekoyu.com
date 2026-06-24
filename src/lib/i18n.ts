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
  { key: 'iletisim', label: { tr: 'İletişim',        en: 'Contact',           ar: 'اتصل بنا' } },
];

// Marka alt yazısı
export const BRAND_SUB: Record<Lang, string> = {
  tr: 'Köy Arşivi', en: 'Village Archive', ar: 'أرشيف القرية',
};

// Footer metinleri
export const FOOTER = {
  brand: { tr: 'Ulukale Köyü Dijital Arşivi', en: 'Ulukale Village Digital Archive', ar: 'أرشيف قرية أولوكالة الرقمي' } as Record<Lang, string>,
  desc: {
    tr: 'Çemişgezek (Dersim/Tunceli) Ulukale köyünün tarihini, mimarisini ve hafızasını gelecek kuşaklara aktarmak için kurulmuş bağımsız bir gönüllü arşividir.',
    en: 'An independent, volunteer archive created to pass on the history, architecture and memory of Ulukale village (Çemişgezek, Dersim/Tunceli) to future generations.',
    ar: 'أرشيفٌ تطوّعيٌّ مستقل أُنشئ لنقل تاريخ قرية أولوكالة (تشيميشكزك، ديرسيم/تونجلي) وعمارتها وذاكرتها إلى الأجيال القادمة.',
  } as Record<Lang, string>,
  archive: { tr: 'Arşiv', en: 'Archive', ar: 'الأرشيف' } as Record<Lang, string>,
  contact: { tr: 'İletişim', en: 'Contact', ar: 'اتصل بنا' } as Record<Lang, string>,
  contribute: { tr: 'Katkıda Bulun', en: 'Contribute', ar: 'ساهِم معنا' } as Record<Lang, string>,
  ozelDut: { tr: 'Ulukale Dutu', en: 'Ulukale Mulberry', ar: 'توت أولوكالة' } as Record<Lang, string>,
  ulusalBasin: { tr: 'Ulusal Basın', en: 'Press', ar: 'الصحافة' } as Record<Lang, string>,
  dedication: { tr: "Ziya Gençer'in aziz hatırasına", en: 'In memory of Ziya Gençer', ar: 'إلى ذكرى ضياء غنجر' } as Record<Lang, string>,
  loc: { tr: 'Çemişgezek / Tunceli', en: 'Çemişgezek / Tunceli', ar: 'تشيميشكزك / تونجلي' } as Record<Lang, string>,
};

export const MENU_LABEL: Record<Lang, string> = { tr: 'Menü', en: 'Menu', ar: 'القائمة' };
