import type { Lang } from '../lib/i18n';
type L = Record<Lang, string>;

export interface Post {
  slug: string;
  date: string;
  cover?: string;
  title: L;
  summary: L;
  body: L;
}

interface RawPost {
  date: string; cover?: string;
  title_tr: string; title_en: string; title_ar: string;
  summary_tr: string; summary_en: string; summary_ar: string;
  body_tr: string; body_en: string; body_ar: string;
}

// Duyurular panelden (Sveltia CMS → "Duyurular") yönetilir: src/content/blog/*.json
const files = import.meta.glob<RawPost>('../content/blog/*.json', { eager: true, import: 'default' });

export const POSTS: Post[] = Object.entries(files)
  .map(([path, r]) => ({
    slug: path.split('/').pop()!.replace(/\.json$/, ''),
    date: r.date,
    cover: r.cover || undefined,
    title: { tr: r.title_tr, en: r.title_en, ar: r.title_ar },
    summary: { tr: r.summary_tr, en: r.summary_en, ar: r.summary_ar },
    body: { tr: r.body_tr, en: r.body_en, ar: r.body_ar },
  }))
  .sort((a, b) => b.date.localeCompare(a.date));

// Arapça sayfalarda tarihi Arapça-Hint rakamlarıyla göster
const AR_DIGITS = '٠١٢٣٤٥٦٧٨٩';
export function formatDate(iso: string, lang: Lang): string {
  const d = new Date(iso + 'T00:00:00');
  const months: Record<Lang, string[]> = {
    tr: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    ar: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  };
  const day = d.getDate(), month = months[lang][d.getMonth()], year = d.getFullYear();
  let s = lang === 'en' ? `${month} ${day}, ${year}` : `${day} ${month} ${year}`;
  if (lang === 'ar') s = s.replace(/[0-9]/g, (n) => AR_DIGITS[+n]);
  return s;
}

export const BLOG_UI: Record<Lang, {
  metaTitle: string; metaDesc: string; crumb: string; kicker: string; h1: string; intro: string;
  home: string; empty: string; back: string; readMore: string;
  formKicker: string; formH: string; formP: string; subject: string;
  fName: string; fContact: string; fType: string; types: string[];
  fTitle: string; fTitlePh: string; fDate: string; fMsg: string; submit: string; formNote: string;
}> = {
  tr: {
    metaTitle: 'Duyurular — Ulukale Köyü Dijital Arşivi',
    metaDesc: 'Ulukale köyüne dair güncel duyurular, haberler ve yazılar.',
    crumb: 'Duyurular', kicker: 'Köyden Haberler', h1: 'Duyurular',
    intro: 'Köye dair güncel gelişmeler, etkinlikler ve yazılar burada paylaşılır.',
    home: 'Ana Sayfa', empty: 'Henüz duyuru eklenmedi. İlk duyuru yakında burada olacak.',
    back: '← Tüm Duyurular', readMore: 'Devamını oku →',
    formKicker: 'Duyurunu Paylaş', formH: 'Bir Duyuru Gönder',
    formP: 'Düğün, nişan, etkinlik ya da vefat/taziye haberinizi buradan iletin. Gönderiler gözden geçirildikten sonra Duyurular sayfasında yayımlanır.',
    subject: 'Ulukale Arşivi — Yeni Duyuru',
    fName: 'Adınız Soyadınız', fContact: 'İletişim (e-posta veya telefon)',
    fType: 'Duyuru türü', types: ['Düğün', 'Nişan', 'Etkinlik / Tören', 'Vefat / Taziye', 'Diğer'],
    fTitle: 'Başlık', fTitlePh: 'Örn: Ahmet & Ayşe’nin düğünü', fDate: 'Tarih (varsa)',
    fMsg: 'Duyuru metni / detaylar', submit: 'Duyuruyu Gönder',
    formNote: 'Gönderdiğiniz duyuru gözden geçirilip uygun görülürse yayımlanır. İletişim bilginiz yayımlanmaz, yalnızca size ulaşmak için kullanılır.',
  },
  en: {
    metaTitle: 'Announcements — Ulukale Village Digital Archive',
    metaDesc: 'Current announcements, news and posts about Ulukale village.',
    crumb: 'Announcements', kicker: 'News from the Village', h1: 'Announcements',
    intro: 'Current developments, events and posts about the village are shared here.',
    home: 'Home', empty: 'No announcements yet. The first one will be here soon.',
    back: '← All Announcements', readMore: 'Read more →',
    formKicker: 'Share an Announcement', formH: 'Submit an Announcement',
    formP: 'Send your wedding, engagement, event or memorial/condolence news here. Submissions are published on the Announcements page after review.',
    subject: 'Ulukale Archive — New Announcement',
    fName: 'Your full name', fContact: 'Contact (email or phone)',
    fType: 'Announcement type', types: ['Wedding', 'Engagement', 'Event / Ceremony', 'Passing / Condolence', 'Other'],
    fTitle: 'Title', fTitlePh: 'e.g. Wedding of Ahmet & Ayşe', fDate: 'Date (if any)',
    fMsg: 'Announcement text / details', submit: 'Send Announcement',
    formNote: 'Your announcement is published if approved after review. Your contact details are not published; they are used only to reach you.',
  },
  ar: {
    metaTitle: 'إعلانات — أرشيف قرية أولوكالة الرقمي',
    metaDesc: 'إعلانات وأخبار ومقالات حديثة عن قرية أولوكالة.',
    crumb: 'إعلانات', kicker: 'أخبار من القرية', h1: 'إعلانات',
    intro: 'تُنشَر هنا المستجدّات والفعاليات والمقالات المتعلّقة بالقرية.',
    home: 'الرئيسية', empty: 'لا إعلانات بعد. سيظهر أوّلها هنا قريبًا.',
    back: '← كل الإعلانات', readMore: 'اقرأ المزيد ←',
    formKicker: 'شارك إعلانًا', formH: 'أرسِل إعلانًا',
    formP: 'أرسِل خبر زفافك أو خطوبتك أو فعاليّتك أو خبر الوفاة/التعزية من هنا. تُنشَر الإعلانات في صفحة الإعلانات بعد المراجعة.',
    subject: 'أرشيف أولوكالة — إعلان جديد',
    fName: 'الاسم الكامل', fContact: 'وسيلة التواصل (بريد أو هاتف)',
    fType: 'نوع الإعلان', types: ['زفاف', 'خطوبة', 'فعالية / مناسبة', 'وفاة / تعزية', 'أخرى'],
    fTitle: 'العنوان', fTitlePh: 'مثال: زفاف أحمد وعائشة', fDate: 'التاريخ (إن وُجد)',
    fMsg: 'نص الإعلان / التفاصيل', submit: 'إرسال الإعلان',
    formNote: 'يُنشَر إعلانك إن قُبل بعد المراجعة. لا تُنشَر معلومات التواصل؛ تُستخدم فقط للوصول إليك.',
  },
};
