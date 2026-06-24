import type { Lang } from '../lib/i18n';

export const ULASIM: Record<Lang, {
  metaTitle: string; metaDesc: string; crumb: string; kicker: string; h1: string; intro: string; home: string;
  factsH: string; facts: string[]; roadH: string; roadP: string; mapBtn: string;
}> = {
  tr: {
    metaTitle: 'Köye Ulaşım & Feribot Saatleri — Ulukale Köyü',
    metaDesc: 'Ulukale köyüne nasıl gidilir: konum, mesafeler, karayolu ve Pertek–Elazığ feribot saatleri.',
    crumb: 'Ulaşım', kicker: 'Yol Tarifi', h1: 'Köye Ulaşım', home: 'Ana Sayfa',
    intro: 'Ulukale köyü, Tunceli (Dersim) ilinin Çemişgezek ilçesine bağlıdır. Aşağıda konum bilgileri ve Elazığ üzerinden gelirken kullanılan feribot saatleri yer alır.',
    factsH: 'Konum ve mesafeler',
    facts: [
      'Çemişgezek ilçe merkezine: ~30 km',
      'Tunceli il merkezine: ~93 km',
      'Elazığ\'a: Keban Gölü feribotla geçilir — Pertek ya da Çemişgezek hattı (saatler aşağıda)',
      'Rakım: 940 m · 39.025°N, 39.036°E',
      'En yakın havaalanları: Elazığ ve Tunceli',
    ],
    roadH: 'Karayolu', roadP: 'Köye Çemişgezek ilçe merkezinden karayoluyla ulaşılır. Elazığ tarafından gelirken Keban Baraj Gölü, tercihe göre Pertek ya da Çemişgezek feribotuyla geçilir; her iki hattın güncel kalkış saatleri aşağıda yer alır.',
    mapBtn: 'Haritada Aç',
  },
  en: {
    metaTitle: 'Getting There & Ferry Times — Ulukale Village',
    metaDesc: 'How to reach Ulukale village: location, distances, by road, and the Pertek–Elazığ ferry times.',
    crumb: 'Getting There', kicker: 'Directions', h1: 'Getting to the Village', home: 'Home',
    intro: 'Ulukale village is part of the Çemişgezek district of Tunceli (Dersim) province. Below are the location details and the ferry times used when arriving via Elazığ.',
    factsH: 'Location and distances',
    facts: [
      'To Çemişgezek district centre: ~30 km',
      'To Tunceli city centre: ~93 km',
      'To Elazığ: across Keban Lake by ferry — Pertek or Çemişgezek line (times below)',
      'Altitude: 940 m · 39.025°N, 39.036°E',
      'Nearest airports: Elazığ and Tunceli',
    ],
    roadH: 'By road', roadP: 'The village is reached by road from the Çemişgezek district centre. Coming from the Elazığ side, you cross the Keban Dam Lake by the Pertek or Çemişgezek ferry as you prefer; the up-to-date departure times for both lines are shown below.',
    mapBtn: 'Open in Maps',
  },
  ar: {
    metaTitle: 'الوصول إلى القرية ومواعيد العبّارة — قرية أولوكالة',
    metaDesc: 'كيفية الوصول إلى قرية أولوكالة: الموقع والمسافات والطريق البرّي ومواعيد عبّارة برتك–إلازيغ.',
    crumb: 'الوصول', kicker: 'الاتجاهات', h1: 'الوصول إلى القرية', home: 'الرئيسية',
    intro: 'تتبع قرية أولوكالة قضاء تشيميشكزك في ولاية تونجلي (ديرسيم). في ما يلي معلومات الموقع ومواعيد العبّارة المستخدمة عند القدوم عبر إلازيغ.',
    factsH: 'الموقع والمسافات',
    facts: [
      'إلى مركز قضاء تشيميشكزك: ~30 كم',
      'إلى مركز ولاية تونجلي: ~93 كم',
      'إلى إلازيغ: تُعبَر بحيرة كيبان بالعبّارة — خط برتك أو تشيميشكزك (المواعيد أدناه)',
      'الارتفاع: 940 م · 39.025°N, 39.036°E',
      'أقرب المطارات: إلازيغ وتونجلي',
    ],
    roadH: 'برًّا', roadP: 'يُوصَل إلى القرية برًّا من مركز قضاء تشيميشكزك. وعند القدوم من جهة إلازيغ تُعبَر بحيرة سدّ كيبان بعبّارة برتك أو تشيميشكزك حسب التفضيل؛ ومواعيد الإقلاع المحدّثة للخطّين مذكورة أدناه.',
    mapBtn: 'افتح في الخرائط',
  },
};
