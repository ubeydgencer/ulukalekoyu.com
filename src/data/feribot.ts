import type { Lang } from '../lib/i18n';

export const FERIBOT_WORKER = 'https://feribot-api.ubeyd.workers.dev';

export const FERIBOT: Record<Lang, {
  metaTitle: string; metaDesc: string; crumb: string; kicker: string; h1: string; intro: string; home: string;
  nextLabel: string; pertekCol: string; operatorCol: string; elazigCol: string;
  belediye: string; ozel: string; loading: string; error: string; updated: string; note: string;
}> = {
  tr: {
    metaTitle: 'Feribot Saatleri (Pertek ↔ Elazığ) — Ulukale Köyü',
    metaDesc: 'Ulukale köyüne ulaşımda kullanılan Pertek–Elazığ feribot kalkış saatleri. Güncel sefer çizelgesi.',
    crumb: 'Feribot Saatleri', kicker: 'Ulaşım', h1: 'Feribot Saatleri', home: 'Ana Sayfa',
    intro: 'Elazığ üzerinden Ulukale\'ye gelirken kullanılan Pertek–Elazığ feribot hattının güncel kalkış saatleri. Saatler otomatik olarak Pertek Belediyesi duyurusundan derlenir.',
    nextLabel: 'Sıradaki kalkış', pertekCol: "Pertek'ten", operatorCol: 'İşletme', elazigCol: "Elazığ'dan",
    belediye: 'Belediye', ozel: 'Özel', loading: 'Saatler yükleniyor…',
    error: 'Saatler şu an yüklenemedi. Lütfen daha sonra tekrar deneyin.',
    updated: 'Güncelleme', note: 'Saatler Pertek Belediyesi duyurusundan otomatik derlenir; doğruluğu garanti edilmez. Seyahatten önce teyit ediniz.',
  },
  en: {
    metaTitle: 'Ferry Times (Pertek ↔ Elazığ) — Ulukale Village',
    metaDesc: 'Departure times of the Pertek–Elazığ ferry used to reach Ulukale village. Up-to-date schedule.',
    crumb: 'Ferry Times', kicker: 'Getting There', h1: 'Ferry Times', home: 'Home',
    intro: 'Current departure times of the Pertek–Elazığ ferry line, used when reaching Ulukale via Elazığ. The times are compiled automatically from the Pertek Municipality announcement.',
    nextLabel: 'Next departure', pertekCol: 'From Pertek', operatorCol: 'Operator', elazigCol: 'From Elazığ',
    belediye: 'Municipal', ozel: 'Private', loading: 'Loading times…',
    error: 'Times could not be loaded right now. Please try again later.',
    updated: 'Updated', note: 'Times are compiled automatically from the Pertek Municipality announcement; accuracy is not guaranteed. Please confirm before travelling.',
  },
  ar: {
    metaTitle: 'مواعيد العبّارة (برتك ↔ إلازيغ) — قرية أولوكالة',
    metaDesc: 'مواعيد إقلاع عبّارة برتك–إلازيغ المستخدمة للوصول إلى قرية أولوكالة. الجدول المحدّث.',
    crumb: 'مواعيد العبّارة', kicker: 'الوصول', h1: 'مواعيد العبّارة', home: 'الرئيسية',
    intro: 'مواعيد الإقلاع المحدّثة لخط عبّارة برتك–إلازيغ، المستخدم عند الوصول إلى أولوكالة عبر إلازيغ. تُجمَع المواعيد تلقائيًا من إعلان بلدية برتك.',
    nextLabel: 'الإقلاع التالي', pertekCol: 'من برتك', operatorCol: 'المشغّل', elazigCol: 'من إلازيغ',
    belediye: 'بلدية', ozel: 'خاص', loading: 'جارٍ تحميل المواعيد…',
    error: 'تعذّر تحميل المواعيد الآن. الرجاء المحاولة لاحقًا.',
    updated: 'آخر تحديث', note: 'تُجمَع المواعيد تلقائيًا من إعلان بلدية برتك؛ ولا تُضمَن دقّتها. يُرجى التأكّد قبل السفر.',
  },
};
