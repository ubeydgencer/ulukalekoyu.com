import type { Lang } from '../lib/i18n';

export const ILETISIM: Record<Lang, {
  metaTitle: string; metaDesc: string; crumb: string; kicker: string; h1: string; intro: string; home: string;
  fName: string; fEmail: string; fSubject: string; subjects: string[]; fMessage: string; submit: string; formNote: string;
  locH: string; locP: string; mapBtn: string; emailH: string; emailP: string; howH: string; howList: string;
  quote: string; cite: string;
}> = {
  tr: {
    metaTitle: 'İletişim & Katkı — Ulukale Köyü Dijital Arşivi',
    metaDesc: 'Ulukale köyü dijital arşivine fotoğraf, belge ve anılarınızla katkıda bulunun. İletişim ve konum bilgileri.',
    crumb: 'İletişim', kicker: 'Arşivi Birlikte Büyütelim', h1: 'İletişim & Katkı', home: 'Ana Sayfa',
    intro: 'Bu arşiv gönüllülükle ayakta duruyor. Köye dair her fotoğraf, belge, harita, anı ve düzeltme bizim için kıymetli. Aşağıdaki formla ulaşabilirsiniz.',
    fName: 'Adınız', fEmail: 'E-posta', fSubject: 'Konu',
    subjects: ['Fotoğraf / belge paylaşmak istiyorum', 'Bir anı / hikâye eklemek istiyorum', 'Bilgi düzeltmesi', 'İş birliği / gönüllülük', 'Diğer'],
    fMessage: 'Mesajınız', submit: 'Gönder', formNote: 'Büyük dosya ve fotoğraf albümleri için önce mesaj atın; size dosya gönderebileceğiniz bir yöntemle dönüş yapalım.',
    locH: 'Konum', locP: 'Ulukale Köyü, Çemişgezek ilçesi, Tunceli (Dersim).<br>İlçe merkezine ~30 km, Tunceli\'ye ~93 km.<br>Rakım 940 m · 39.025°N, 39.036°E',
    mapBtn: 'Haritada Aç', emailH: 'E-posta', emailP: 'Doğrudan yazmak isterseniz formu kullanmanız yeterli; mesajınız bize ulaşır.',
    howH: 'Nasıl Katkı Yapabilirim?', howList: '• Eski ve yeni fotoğraflar<br>• Tapular, mektuplar, haritalar<br>• Sözlü tarih ve anılar<br>• Yapıların güncel durumu<br>• Bilgi düzeltmeleri',
    quote: '"Bir köyün belleği, onu hatırlayanlar yaşadıkça yaşar. Yazıya geçen ise kalıcı olur."', cite: '— Ulukale Köyü Dijital Arşivi',
  },
  en: {
    metaTitle: 'Contact & Contribute — Ulukale Village Digital Archive',
    metaDesc: 'Contribute to the Ulukale village digital archive with your photos, documents and memories. Contact and location information.',
    crumb: 'Contact', kicker: "Let's Grow the Archive Together", h1: 'Contact & Contribute', home: 'Home',
    intro: 'This archive stands on volunteering. Every photo, document, map, memory and correction about the village is precious to us. You can reach us through the form below.',
    fName: 'Your name', fEmail: 'Email', fSubject: 'Subject',
    subjects: ["I'd like to share a photo / document", "I'd like to add a memory / story", 'Information correction', 'Collaboration / volunteering', 'Other'],
    fMessage: 'Your message', submit: 'Send', formNote: "For large files and photo albums, please message first; we'll reply with a way for you to send the files.",
    locH: 'Location', locP: 'Ulukale Village, Çemişgezek district, Tunceli (Dersim).<br>~30 km to the district centre, ~93 km to Tunceli.<br>Altitude 940 m · 39.025°N, 39.036°E',
    mapBtn: 'Open in Maps', emailH: 'Email', emailP: "If you'd like to write directly, just use the form; your message reaches us as an email.",
    howH: 'How can I contribute?', howList: '• Old and new photographs<br>• Deeds, letters, maps<br>• Oral history and memories<br>• The current state of buildings<br>• Information corrections',
    quote: '"A village\'s memory lives as long as those who remember it live. What is written down, however, endures."', cite: '— Ulukale Village Digital Archive',
  },
  ar: {
    metaTitle: 'اتصل بنا والمساهمة — أرشيف قرية أولوكالة الرقمي',
    metaDesc: 'ساهِم في أرشيف قرية أولوكالة الرقمي بصورك ووثائقك وذكرياتك. معلومات الاتصال والموقع.',
    crumb: 'اتصل بنا', kicker: 'لنُنمِّ الأرشيف معًا', h1: 'اتصل بنا والمساهمة', home: 'الرئيسية',
    intro: 'يقوم هذا الأرشيف على التطوّع. كل صورة ووثيقة وخريطة وذكرى وتصحيح عن القرية ثمينٌ لنا. يمكنك الوصول إلينا عبر النموذج أدناه.',
    fName: 'اسمك', fEmail: 'البريد الإلكتروني', fSubject: 'الموضوع',
    subjects: ['أودّ مشاركة صورة / وثيقة', 'أودّ إضافة ذكرى / حكاية', 'تصحيح معلومة', 'تعاون / تطوّع', 'أخرى'],
    fMessage: 'رسالتك', submit: 'إرسال', formNote: 'للملفّات الكبيرة وألبومات الصور، راسِلنا أولًا؛ وسنردّ بطريقةٍ ترسل بها الملفّات.',
    locH: 'الموقع', locP: 'قرية أولوكالة، قضاء تشيميشكزك، تونجلي (ديرسيم).<br>~30 كم إلى مركز القضاء، ~93 كم إلى تونجلي.<br>الارتفاع 940 م · 39.025°N, 39.036°E',
    mapBtn: 'افتح في الخرائط', emailH: 'البريد الإلكتروني', emailP: 'إن أردت المراسلة مباشرةً، فاستخدم النموذج؛ تصل رسالتك إلينا بريدًا إلكترونيًا.',
    howH: 'كيف أساهم؟', howList: '• صورٌ قديمة وحديثة<br>• سندات ورسائل وخرائط<br>• تاريخٌ شفهي وذكريات<br>• الحالة الراهنة للمباني<br>• تصحيحات للمعلومات',
    quote: '«تحيا ذاكرة القرية ما دام يحيا من يتذكّرونها. أما ما يُدوَّن فيبقى.»', cite: '— أرشيف قرية أولوكالة الرقمي',
  },
};
