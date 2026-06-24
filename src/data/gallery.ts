import type { Lang } from '../lib/i18n';
type L = Record<Lang, string>;

export interface Photo {
  group: 'eski' | 'koyden' | 'mimari' | 'dut';
  src: string;
  alt: L;
  caption: L;
  source?: string; // "Foto: AA" gibi (dile göre önek değişmez, kaynak adı sabit)
  span2?: boolean;
}

const cap = (tr: string, en: string, ar: string): L => ({ tr, en, ar });

export const PHOTOS: Photo[] = [
  // Eski Albümler
  { group: 'eski', src: '/images/koy-eski.jpg', span2: true,
    alt: cap('Ulukale köyünün eski hali — minare ve harman yeri', 'The old settlement of Ulukale — minaret and threshing floor', 'مستوطنة أولوكالة القديمة — مئذنة وبيدر'),
    caption: cap('Ulukale, eski yıllar — minare, kerpiç evler ve harman yeri', 'Ulukale, earlier years — minaret, adobe houses and the threshing floor', 'أولوكالة في سنواتٍ خلت — مئذنة وبيوت طينية وبيدر') },
  { group: 'eski', src: '/images/koy-eski-2.jpg',
    alt: cap('Ulukale köyü, kayalık dağ eteğinde eski görünüm', 'Ulukale village, old view at the foot of the rocky mountain', 'قرية أولوكالة عند سفح الجبل الصخري'),
    caption: cap('Kayalık dağ eteğinde köy', 'The village at the foot of the rocky mountain', 'القرية عند سفح الجبل الصخري') },

  // Köyden Kareler
  { group: 'koyden', src: '/images/koy-bugun.jpg',
    alt: cap('Bugünkü Ulukale köyü', 'Ulukale village today', 'قرية أولوكالة اليوم'),
    caption: cap('Bugünkü köy — dağ eteğinde', 'The village today — at the foot of the mountain', 'القرية اليوم — عند سفح الجبل') },
  { group: 'koyden', src: '/images/cami-kemerler.jpg',
    alt: cap('Ulukale eski cami kalıntıları', 'Ulukale old mosque ruins', 'أطلال مسجد أولوكالة القديم'),
    caption: cap('Eski Cami', 'Old Mosque', 'المسجد القديم') },
  { group: 'koyden', src: '/images/turbe.jpg',
    alt: cap('Ferruhşad Bey Türbesi', 'Ferruhşad Bey Tomb', 'مقام فرّوخ شاد بك'),
    caption: cap('Ferruhşad Bey Türbesi', 'Ferruhşad Bey Tomb', 'مقام فرّوخ شاد بك') },
  { group: 'koyden', src: '/images/cesme.jpg',
    alt: cap('Tarihi çeşme', 'Historic fountain', 'نافورة تاريخية'),
    caption: cap('Tarihî çeşme', 'Historic fountain', 'النافورة التاريخية') },
  { group: 'koyden', src: '/images/tas-yapi.jpg',
    alt: cap('Taş sivil mimari yapı', 'Stone vernacular building', 'مبنى حجري أهلي'),
    caption: cap('Taş sivil mimari', 'Stone vernacular architecture', 'العمارة الحجرية الأهلية') },
  { group: 'koyden', src: '/images/ic-mekan.jpg',
    alt: cap('Tonozlu iç mekan', 'Vaulted interior', 'فضاء داخلي معقود'),
    caption: cap('Tonozlu iç mekân', 'Vaulted interior', 'فضاء داخلي معقود') },
  { group: 'koyden', src: '/images/koy-kalinti.jpg', source: 'Hürriyet',
    alt: cap('Eski Ulukale köyü kalıntıları', 'Ruins of the old Ulukale village', 'أطلال قرية أولوكالة القديمة'),
    caption: cap('Eski köy kalıntıları', 'Old village ruins', 'أطلال القرية القديمة') },
  { group: 'koyden', src: '/images/koy-panorama.jpg', source: 'Haber7',
    alt: cap('Ulukale eski köyü, dağ eteğinde', 'Old Ulukale village at the foot of the mountain', 'قرية أولوكالة القديمة عند سفح الجبل'),
    caption: cap('Dağ eteğinde eski köy', 'Old village at the mountain\'s foot', 'القرية القديمة عند سفح الجبل') },
  { group: 'koyden', src: '/images/koy-konak.jpg', source: 'AA',
    alt: cap('Ulukale\'de taş konak', 'Stone mansion in Ulukale', 'قصرٌ حجري في أولوكالة'),
    caption: cap('Ahşap hatıllı taş konak', 'Stone mansion with timber beams', 'قصرٌ حجري بعوارض خشبية') },
  { group: 'koyden', src: '/images/cami-kemer-2.jpg', source: 'Kültür Portalı / Culture Portal',
    alt: cap('Ulukale eski cami kemerleri', 'Arches of the old mosque in Ulukale', 'أقواس المسجد القديم في أولوكالة'),
    caption: cap('Eski cami kemerleri', 'Arches of the old mosque', 'أقواس المسجد القديم') },
  { group: 'koyden', src: '/images/cesme-2.jpg', source: 'Haber7',
    alt: cap('Ulukale tarihi çeşmesi', 'Historic fountain of Ulukale', 'نافورة أولوكالة التاريخية'),
    caption: cap('Tarihî çeşme', 'Historic fountain', 'النافورة التاريخية') },
  { group: 'koyden', src: '/images/koy-bugun-2.jpg', source: 'İstanbul Haber',
    alt: cap('Bugünkü Ulukale köyü ve camisi', 'Ulukale village today and its mosque', 'قرية أولوكالة اليوم ومسجدها'),
    caption: cap('Bugünkü köy ve cami', 'The village and its mosque today', 'القرية ومسجدها اليوم') },

  // Mimari belgeleme galerisi
  { group: 'mimari', src: '/images/cami-kemerler.jpg',
    alt: cap('Ulukale eski cami kalıntıları, kemerli taş duvarlar', 'Ulukale old mosque ruins, arched stone walls', 'أطلال مسجد أولوكالة القديم'),
    caption: cap('Eski Cami', 'Old Mosque', 'المسجد القديم') },
  { group: 'mimari', src: '/images/cesme.jpg',
    alt: cap('Ulukale tarihi çeşmesi', 'Historic fountain of Ulukale', 'نافورة أولوكالة التاريخية'),
    caption: cap('Tarihî çeşme — kemerli niş', 'Historic fountain — arched niche', 'النافورة التاريخية — حنية مقوّسة') },
  { group: 'mimari', src: '/images/turbe.jpg',
    alt: cap('Ulukale Ferruhşad Bey Türbesi', 'Ferruhşad Bey Tomb in Ulukale', 'مقام فرّوخ شاد بك في أولوكالة'),
    caption: cap('Ferruhşad Bey Türbesi', 'Ferruhşad Bey Tomb', 'مقام فرّوخ شاد بك') },
  { group: 'mimari', src: '/images/tas-yapi.jpg',
    alt: cap('Ulukale\'de taş sivil mimari yapı', 'Stone vernacular building in Ulukale', 'مبنى حجري أهلي في أولوكالة'),
    caption: cap('Taş sivil mimari', 'Stone vernacular architecture', 'العمارة الحجرية الأهلية') },
  { group: 'mimari', src: '/images/ic-mekan.jpg',
    alt: cap('Tonozlu taş iç mekan', 'Vaulted stone interior', 'فضاء داخلي حجري معقود'),
    caption: cap('Tonozlu iç mekân', 'Vaulted interior', 'فضاء داخلي معقود') },
  { group: 'mimari', src: '/images/kaya-mezari.jpg',
    alt: cap('Ulukale kaya mezarı — Helenistik-Roma dönemi', 'Ulukale rock-cut tomb — Hellenistic-Roman period', 'القبر الصخري في أولوكالة — هلنستي-روماني'),
    caption: cap('Kaya mezarı (Helenistik–Roma)', 'Rock-cut tomb (Hellenistic–Roman)', 'القبر الصخري (هلنستي-روماني)') },
  { group: 'mimari', src: '/images/kemer-detay.jpg',
    alt: cap('Rozet motifli taş kemer detayı', 'Rosette-motif stone arch detail', 'تفصيل قوس حجري بزخرفة وريدية'),
    caption: cap('Rozet motifli kemer detayı', 'Arch detail with rosette motif', 'تفصيل قوس بزخرفة وريدية') },

  // Dut hasat galerisi
  { group: 'dut', src: '/images/dut-bahce.jpg', source: 'NTV',
    alt: cap('Ulukale dut bahçeleri, havadan görünüm', 'Ulukale mulberry orchards, aerial view', 'بساتين توت أولوكالة من الجو'),
    caption: cap('Dut bahçeleri (havadan)', 'Mulberry orchards (aerial)', 'بساتين التوت (جوًّا)') },
  { group: 'dut', src: '/images/dut-serme.jpg', source: 'NTV',
    alt: cap('Dutların güneşte kurutulmak üzere serilmesi', 'Mulberries spread out to dry in the sun', 'فرش التوت للتجفيف بالشمس'),
    caption: cap('Güneşte kurutmaya serme', 'Spread out to dry in the sun', 'الفرش للتجفيف بالشمس') },
  { group: 'dut', src: '/images/dut-kurutma.jpg', source: 'NTV',
    alt: cap('Dam altında kuruyan dutlar, kadın üreticiler', 'Mulberries drying under a shelter, women producers', 'توت يجفّ تحت مظلّة، نساء منتِجات'),
    caption: cap('Kuruyan dutlar, kadın emeği', 'Drying mulberries, women\'s labour', 'توتٌ يجفّ، عملُ المرأة') },
  { group: 'dut', src: '/images/dut-eleme.jpg', source: 'NTV',
    alt: cap('Kuru dutun elenmesi', 'Sieving the dried mulberry', 'غربلة التوت المجفّف'),
    caption: cap('Kuru dutun elenmesi', 'Sieving the dried mulberry', 'غربلة التوت المجفّف') },
  { group: 'dut', src: '/images/dut-nine.jpg', source: 'Kanal 23',
    alt: cap('Kuru dut ayıklayan yaşlı kadın', 'An elderly woman sorting dried mulberries', 'امرأة مسنّة تنقّي التوت المجفّف'),
    caption: cap('Dut ayıklayan eller', 'Hands sorting mulberries', 'أيادٍ تنقّي التوت') },
  { group: 'dut', src: '/images/dut-beyaz.jpg', source: 'Bursa Hayat',
    alt: cap('Çekirdeksiz beyaz kuru Ulukale dutu, yakın çekim', 'Seedless white dried Ulukale mulberry, close-up', 'توت أولوكالة الأبيض المجفّف بلا بذور، لقطة قريبة'),
    caption: cap('Çekirdeksiz beyaz dut', 'Seedless white mulberry', 'توتٌ أبيض بلا بذور') },
];
