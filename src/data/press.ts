import type { Lang } from '../lib/i18n';
type L = Record<Lang, string>;

export interface PressItem {
  section: 'history' | 'dut' | 'memory';
  outlet: L;
  date: L;
  headline: L;
  summary: L;
  url: string;
  kind: 'article' | 'gallery';
}

export const PRESS: PressItem[] = [
  {
    section: 'history', kind: 'article',
    outlet: { tr: 'Anadolu Ajansı', en: 'Anadolu Agency', ar: 'وكالة الأناضول' },
    date: { tr: '8 Ocak 2021', en: '8 January 2021', ar: '8 يناير 2021' },
    headline: {
      tr: "Tunceli'nin Ulukale köyü ziyaretçilerini tarihi yolculuğa çıkarıyor",
      en: "Tunceli's Ulukale village takes visitors on a journey through history",
      ar: 'قرية أولوكالة في تونجلي تأخذ زوّارها في رحلةٍ عبر التاريخ',
    },
    summary: {
      tr: "Çemişgezek'teki eski Ulukale yerleşimi; kerpiç yapıları, çeşmeleri, değirmeni ve cami kalıntılarıyla doğa ve fotoğraf tutkunlarını ağırlıyor.",
      en: 'The old Ulukale settlement in Çemişgezek welcomes nature and photography enthusiasts with its adobe buildings, fountains, mill and mosque ruins.',
      ar: 'مستوطنة أولوكالة القديمة في تشيميشكزك تستقبل محبّي الطبيعة والتصوير بمبانيها الطينية ونوافيرها وطاحونتها وأطلال مسجدها.',
    },
    url: 'https://www.aa.com.tr/tr/yasam/tuncelinin-ulukale-koyu-ziyaretcilerini-tarihi-yolculuga-cikariyor/2102940',
  },
  {
    section: 'history', kind: 'gallery',
    outlet: { tr: 'Diyanet Haber', en: 'Diyanet Haber', ar: 'Diyanet Haber' },
    date: { tr: '13 Ocak 2021', en: '13 January 2021', ar: '13 يناير 2021' },
    headline: {
      tr: 'Ulukale köyü eski kalıntılarıyla ziyaretçilerini tarihi yolculuğa çıkarıyor',
      en: 'Ulukale village takes visitors on a historical journey with its old ruins',
      ar: 'قرية أولوكالة تأخذ زوّارها في رحلةٍ تاريخية بأطلالها القديمة',
    },
    summary: {
      tr: 'Kerpiç evler, türbe, çeşme, hamam, değirmen ve cami kalıntılarıyla terk edilmiş eski köy; foto-galeri eşliğinde anlatılıyor.',
      en: 'With adobe houses, a tomb, fountain, bath, mill and mosque ruins, the abandoned old village is presented through a photo gallery.',
      ar: 'ببيوتها الطينية ومقامها ونافورتها وحمّامها وطاحونتها وأطلال مسجدها، تُروى القرية القديمة المهجورة عبر معرض صور.',
    },
    url: 'https://www.diyanethaber.com.tr/foto-galeri/tunceli-nin-ulukale-koyu-eski-kalintilariyla-ziyaretcilerini-tarihi-yolculuga-cikariyor',
  },
  {
    section: 'dut', kind: 'gallery',
    outlet: { tr: 'Yeni Şafak', en: 'Yeni Şafak', ar: 'Yeni Şafak' },
    date: { tr: '27 Haziran 2024', en: '27 June 2024', ar: '27 يونيو 2024' },
    headline: {
      tr: 'Coğrafi işaretli Ulukale dutu dünyaya ihraç ediliyor',
      en: 'The geographically indicated Ulukale mulberry is exported worldwide',
      ar: 'توت أولوكالة ذو العلامة الجغرافية يُصدَّر إلى العالم',
    },
    summary: {
      tr: 'Yılda yaklaşık 400 ton üretilen çekirdeksiz Ulukale dutu, yalnızca hayvan gübresiyle organik olarak yetiştiriliyor; hasatta özellikle kadınlar emek veriyor.',
      en: 'Produced at roughly 400 tonnes a year, the seedless Ulukale mulberry is grown organically using only animal manure; women in particular put in the labour at harvest.',
      ar: 'يُنتَج بنحو 400 طن سنويًا، ويُزرع توت أولوكالة بلا بذور عضويًا بسماد الحيوان فقط؛ والنساء بخاصة يبذلن الجهد في الحصاد.',
    },
    url: 'https://www.yenisafak.com/foto-galeri/hayat/yillik-400-ton-uretiliyor-cografi-isaretli-ulukale-dutu-tuncelinin-koyunden-cikip-dunyaya-ihrac-ediliyor-4629717',
  },
  {
    section: 'dut', kind: 'article',
    outlet: { tr: 'Cumhuriyet', en: 'Cumhuriyet', ar: 'Cumhuriyet' },
    date: { tr: '27 Haziran 2024', en: '27 June 2024', ar: '27 يونيو 2024' },
    headline: {
      tr: "Tunceli'nin köyünden çıkıp dünyaya ihraç ediliyor: Yüzde 70'i dalında kuruyor",
      en: 'From a Tunceli village to the world: 70% dries on the branch',
      ar: 'من قرية في تونجلي إلى العالم: 70% يجفّ على الغصن',
    },
    summary: {
      tr: "Coğrafi işaretli, organik Ulukale dutunun ayırt edici özelliği: dutların yüzde 70'i dalında kuruyup doğal olarak düşüyor.",
      en: 'The distinguishing feature of the geographically indicated, organic Ulukale mulberry: around 70% of the fruit dries and falls naturally on the branch.',
      ar: 'السمة المميّزة لتوت أولوكالة العضوي ذي العلامة الجغرافية: نحو 70% من الثمر يجفّ ويتساقط طبيعيًا على الغصن.',
    },
    url: 'https://www.cumhuriyet.com.tr/yasam/tuncelinin-koyunden-cikip-dunyaya-ihrac-ediliyor-yuzde-70i-dalinda-2221299',
  },
  {
    section: 'dut', kind: 'article',
    outlet: { tr: 'CNN Türk', en: 'CNN Türk', ar: 'CNN Türk' },
    date: { tr: '26 Temmuz 2017', en: '26 July 2017', ar: '26 يوليو 2017' },
    headline: {
      tr: "Uzun yaşamanın sırrını açıkladı: Tunceli'de yetişen dut",
      en: 'The secret of a long life: the mulberry grown in Tunceli',
      ar: 'سرّ طول العمر: التوت الذي ينمو في تونجلي',
    },
    summary: {
      tr: "Hollanda, Almanya, Belçika ve Fransa'ya ihraç edilen organik Ulukale dutu; köyün yüz yaşını aşkın sakinlerince uzun yaşamın sırrı olarak anlatılıyor.",
      en: 'Exported to the Netherlands, Germany, Belgium and France, the organic Ulukale mulberry is described by the village\'s residents — many over a hundred years old — as the secret of long life.',
      ar: 'يُصدَّر إلى هولندا وألمانيا وبلجيكا وفرنسا، ويصفه سكّان القرية — وكثيرٌ منهم تجاوزوا المئة عام — بأنه سرّ طول العمر.',
    },
    url: 'https://www.cnnturk.com/turkiye/uzun-yasamanin-sirrini-acikladi-tuncelide-yetisen-dut-662623',
  },
  {
    section: 'memory', kind: 'article',
    outlet: { tr: 'İHA', en: 'İHA', ar: 'İHA' },
    date: { tr: '2020', en: '2020', ar: '2020' },
    headline: {
      tr: 'Ulukale köyündeki olayın yıl dönümü',
      en: 'The anniversary of the event in Ulukale village',
      ar: 'ذكرى الحدث في قرية أولوكالة',
    },
    summary: {
      tr: "1994'te Ulukale köyünde yaşanan ve basında yer bulan olayın yıl dönümüne dair haber.",
      en: 'News on the anniversary of the event that took place in Ulukale village in 1994 and was covered in the press.',
      ar: 'خبرٌ في ذكرى الحدث الذي وقع في قرية أولوكالة عام 1994 ونالته التغطية الصحفية.',
    },
    url: 'https://www.iha.com.tr/haber-ulukale-koyundeki-katliamin-26nci-yili-865592',
  },
];
