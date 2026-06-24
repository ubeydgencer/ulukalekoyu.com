import type { Lang } from '../lib/i18n';
type L = Record<Lang, string>;

export const BASIN: Record<Lang, {
  metaTitle: string; metaDesc: string;
  crumb: string; kicker: string; h1: string; intro: string;
  s1k: string; s1h: string; s1p: string;
  s2k: string; s2h: string; s2p: string;
  s3k: string; s3h: string; s3p: string;
  note: string; read: string; readGallery: string;
}> = {
  tr: {
    metaTitle: 'Ulusal Basın — Ulukale Köyü Dijital Arşivi',
    metaDesc: 'Ulukale köyünün ulusal basında yer aldığı haberler: tarihi kalıntılar, coğrafi işaretli Ulukale dutu ve köyün hafızası.',
    crumb: 'Ulusal Basın', kicker: 'Haberlerde Ulukale', h1: 'Ulusal Basın',
    intro: 'Ulukale köyü; tarihî dokusu, dünyaya ihraç edilen coğrafi işaretli dutu ve hafızasıyla ulusal basında birçok kez yer aldı. Köye dair haberleri burada derliyoruz.',
    s1k: 'Tarih & Tarihî Doku', s1h: 'Açık hava müzesi köy', s1p: 'Terk edilmiş eski köyün kerpiç evleri, çeşmeleri, değirmeni ve cami kalıntıları basının ilgisini çekti.',
    s2k: 'Coğrafi İşaret', s2h: 'Ulukale Dutu', s2p: 'Yılda yaklaşık 400 ton üretilen, organik ve coğrafi işaretli Ulukale dutu köyden çıkıp dünyaya ihraç ediliyor.',
    s3k: 'Köyün Hafızası', s3h: 'Acılı bir sayfa', s3p: "Ulukale'nin geçmişinde 1994'te yaşanan ve basında geniş yer bulan acı bir olay da var. Köyün hafızasına saygıyla, kayda geçiriyoruz.",
    note: 'Köye dair haberlerde eksik gördüğünüz bir şey varsa ya da yeni bir haber eklenmesini isterseniz bize ulaşın.',
    read: 'Haberi oku →', readGallery: 'Foto-galeriyi gör →',
  },
  en: {
    metaTitle: 'Press — Ulukale Village Digital Archive',
    metaDesc: "News coverage of Ulukale village in the national press: historic ruins, the geographically indicated Ulukale mulberry, and the village's memory.",
    crumb: 'Press', kicker: 'Ulukale in the News', h1: 'Press',
    intro: 'With its historical fabric, its geographically indicated mulberry exported worldwide, and its memory, Ulukale village has featured in the national press many times. We gather the coverage here.',
    s1k: 'History & Historical Fabric', s1h: 'An open-air museum village', s1p: "The adobe houses, fountains, mill and mosque ruins of the abandoned old village drew the press's attention.",
    s2k: 'Geographical Indication', s2h: 'The Ulukale Mulberry', s2p: 'Produced at roughly 400 tonnes a year, the organic, geographically indicated Ulukale mulberry travels from the village to the world.',
    s3k: "The Village's Memory", s3h: 'A painful chapter', s3p: "Ulukale's past also holds a painful event from 1994 that received wide coverage. We record it with respect for the village's memory.",
    note: 'If you notice anything missing in the coverage of the village, or would like a new article added, please contact us.',
    read: 'Read the article →', readGallery: 'See the photo gallery →',
  },
  ar: {
    metaTitle: 'الصحافة — أرشيف قرية أولوكالة الرقمي',
    metaDesc: 'تغطية قرية أولوكالة في الصحافة الوطنية: الأطلال التاريخية، توت أولوكالة الحاصل على علامة جغرافية، وذاكرة القرية.',
    crumb: 'الصحافة', kicker: 'أولوكالة في الأخبار', h1: 'الصحافة',
    intro: 'بنسيجها التاريخي، وتوتها ذي العلامة الجغرافية المُصدَّر إلى العالم، وذاكرتها، ظهرت قرية أولوكالة في الصحافة الوطنية مرارًا. نجمع التغطية هنا.',
    s1k: 'التاريخ والنسيج التاريخي', s1h: 'قريةٌ متحفٌ في الهواء الطلق', s1p: 'البيوت الطينية والنوافير والطاحونة وأطلال المسجد في القرية القديمة المهجورة استرعت انتباه الصحافة.',
    s2k: 'العلامة الجغرافية', s2h: 'توت أولوكالة', s2p: 'يُنتَج بنحو 400 طن سنويًا، ويرحل توت أولوكالة العضوي ذو العلامة الجغرافية من القرية إلى العالم.',
    s3k: 'ذاكرة القرية', s3h: 'صفحةٌ مؤلمة', s3p: 'يحمل ماضي أولوكالة أيضًا حدثًا مؤلمًا من عام 1994 نال تغطيةً واسعة. نُدوّنه احترامًا لذاكرة القرية.',
    note: 'إن لاحظت نقصًا في تغطية القرية، أو رغبت في إضافة خبرٍ جديد، فالرجاء التواصل معنا.',
    read: 'اقرأ الخبر →', readGallery: 'شاهد معرض الصور →',
  },
};
