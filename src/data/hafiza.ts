import type { Lang } from '../lib/i18n';
type L = Record<Lang, string>;
const x = (tr: string, en: string, ar: string): L => ({ tr, en, ar });

export const HAFIZA_CARDS: { icon: string; h3: L; p: L }[] = [
  { icon: 'ev', h3: x('Hane & Aile Hikâyeleri', 'Household & Family Stories', 'حكايات البيوت والعائلات'),
    p: x('Hangi ev kimindi, hangi soyadı nereden gelir, kim nereye göçtü? Köyün insan haritasını birlikte çıkaralım.', "Whose house was which, where each family name comes from, who migrated where? Let's map the village's people together.", 'لمن كان هذا البيت، ومن أين جاء كل لقب عائلي، ومن هاجر إلى أين؟ لنرسم خريطة أهل القرية معًا.') },
  { icon: 'muzik', h3: x('Türküler & Lakaplar', 'Folk Songs & Nicknames', 'الأغاني والألقاب'),
    p: x('Köye özgü deyişler, ezgiler, sülale lakapları ve onların hikâyeleri.', 'Sayings, melodies and family nicknames particular to the village, and the stories behind them.', 'أقوالٌ وألحانٌ وألقاب عائلية خاصة بالقرية، والحكايات وراءها.') },
  { icon: 'bugday', h3: x('Gelenekler & İşler', 'Customs & Work', 'العادات والأعمال'),
    p: x('Dut hasadı, değirmen sırası, düğün âdetleri, bayramlar, imece günleri.', 'The mulberry harvest, the queue at the mill, wedding customs, festivals, days of collective work.', 'حصاد التوت، دور الطاحونة، عادات الأعراس، الأعياد، أيام العمل الجماعي.') },
  { icon: 'tencere', h3: x('Mutfak & Tarifler', 'Kitchen & Recipes', 'المطبخ والوصفات'),
    p: x('Köyün yemekleri, dut pekmezi, kışlık hazırlıklar ve nineden kalma tarifler.', "The village's dishes, mulberry molasses, winter preparations and recipes handed down from grandmothers.", 'أطباق القرية، دِبس التوت، تجهيزات الشتاء، ووصفاتٌ توارثتها الجدّات.') },
  { icon: 'okul', h3: x('Okul Anıları', 'School Memories', 'ذكريات المدرسة'),
    p: x('Köy okulunda geçen yıllar, öğretmenler, sınıf arkadaşları ve o günlerin fotoğrafları.', 'The years spent at the village school, teachers, classmates and photographs from those days.', 'سنواتٌ في مدرسة القرية، المعلّمون، زملاء الصفّ، وصورٌ من تلك الأيام.') },
  { icon: 'belge', h3: x('Olaylar & Dönüm Noktaları', 'Events & Turning Points', 'أحداثٌ ومنعطفات'),
    p: x('Göç, doğal afetler, önemli yıllar — köyün kaderini değiştiren anlar.', 'Migration, natural disasters, important years — the moments that changed the village\'s fate.', 'الهجرة، الكوارث الطبيعية، سنواتٌ مهمّة — اللحظات التي غيّرت مصير القرية.') },
];

export const HAFIZA: Record<Lang, {
  metaTitle: string; metaDesc: string; crumb: string; kicker: string; h1: string; intro: string; home: string;
  quote: string; cite: string; note: string;
  cardsK: string; cardsH: string;
  formK: string; formH: string; formP: string;
  fName: string; fNamePh: string; fConn: string; conn: string[]; fTitle: string; fTitlePh: string;
  fMemory: string; fMemoryPh: string; fEmail: string; fEmailPh: string; submit: string; formNote: string;
}> = {
  tr: {
    metaTitle: 'Hafıza & Sözlü Tarih — Ulukale Köyü Dijital Arşivi',
    metaDesc: 'Ulukale köyünün sözlü tarihi: anılar, hane hikâyeleri, gelenekler, lakaplar ve yaşanmışlıklar. Köyün hafızasını birlikte kaydedelim.',
    crumb: 'Hafıza', kicker: 'Sözlü Tarih', h1: 'Anlatılmazsa Unutulur', home: 'Ana Sayfa',
    intro: 'Yapılar zamanla yıkılır ama bir köyü asıl yaşatan, insanların hatıralarıdır. Bu sayfa; köylülerin anlattığı hikâyeleri, gelenekleri, lakapları ve yaşanmışlıkları kayıt altına almak için ayrıldı.',
    quote: '"Köyünden ayrılanlar zaman zaman geri dönüp eski evlerinin, okullarının arasında dolaşıyor; geçmiş günleri hatırlıyorlar."', cite: '— Ulukale üzerine bir gözlem',
    note: 'Bu bölüm henüz başlangıç aşamasında. Aşağıdaki başlıklar, toplamak istediğimiz hatıra türlerini gösteriyor. <strong>İlk hikâyeyi siz yazabilirsiniz.</strong>',
    cardsK: 'Ne Topluyoruz?', cardsH: 'Hafızanın başlıkları',
    formK: 'İlk Sözü Söyle', formH: 'Hatıranı Bırak', formP: 'Kısa bir anı, bir isim, bir tarih... Ne hatırlıyorsanız değerli. Aşağıya yazın, arşive ekleyelim.',
    fName: 'Adınız (isteğe bağlı)', fNamePh: 'Nasıl anılmak istersiniz?', fConn: 'Köyle bağınız',
    conn: ['Köyde doğdum/büyüdüm', "Ailem Ulukale'den", 'Akrabalarım var', 'Ziyaret ettim', 'Araştırmacı / ilgileniyorum', 'Diğer'],
    fTitle: 'Hatıranın başlığı', fTitlePh: 'Örn: Değirmen sırası beklerken',
    fMemory: 'Hatıranız', fMemoryPh: 'Aklınızda kalan her şey — kısa ya da uzun fark etmez...',
    fEmail: 'E-posta (yayınlanmaz, sadece size ulaşabilmek için)', fEmailPh: 'ornek@eposta.com',
    submit: 'Hatırayı Gönder', formNote: 'Gönderdiğiniz hatıralar gözden geçirildikten sonra arşivde yayımlanabilir. İsminizin görünmesini istemiyorsanız belirtmeniz yeterli.',
  },
  en: {
    metaTitle: 'Memory & Oral History — Ulukale Village Digital Archive',
    metaDesc: "The oral history of Ulukale village: memories, household stories, customs, nicknames and lived experiences. Let's record the village's memory together.",
    crumb: 'Memory', kicker: 'Oral History', h1: 'If It Isn\'t Told, It Is Forgotten', home: 'Home',
    intro: "Buildings collapse in time, but what truly keeps a village alive is people's memories. This page is set aside to record the stories, customs, nicknames and lived experiences told by the villagers.",
    quote: '"Those who left the village sometimes return and wander among their old houses and schools, remembering days gone by."', cite: '— An observation about Ulukale',
    note: 'This section is still at the beginning. The topics below show the kinds of memories we hope to gather. <strong>You can be the one to write the first story.</strong>',
    cardsK: 'What Are We Collecting?', cardsH: 'The headings of memory',
    formK: 'Say the First Word', formH: 'Leave Your Memory', formP: 'A short memory, a name, a date... whatever you remember is valuable. Write it below and let\'s add it to the archive.',
    fName: 'Your name (optional)', fNamePh: 'How would you like to be credited?', fConn: 'Your connection to the village',
    conn: ['I was born/raised in the village', 'My family is from Ulukale', 'I have relatives there', 'I visited', 'Researcher / interested', 'Other'],
    fTitle: 'Title of the memory', fTitlePh: 'e.g. Waiting in the queue at the mill',
    fMemory: 'Your memory', fMemoryPh: "Anything you remember — short or long, it doesn't matter...",
    fEmail: 'Email (not published, only so we can reach you)', fEmailPh: 'example@email.com',
    submit: 'Send the Memory', formNote: 'Submitted memories may be published in the archive after review. If you prefer your name not to appear, just let us know.',
  },
  ar: {
    metaTitle: 'الذاكرة والتاريخ الشفهي — أرشيف قرية أولوكالة الرقمي',
    metaDesc: 'التاريخ الشفهي لقرية أولوكالة: ذكريات، حكايات بيوت، عادات، ألقاب وتجارب معاشة. لنوثّق ذاكرة القرية معًا.',
    crumb: 'الذاكرة', kicker: 'التاريخ الشفهي', h1: 'ما لا يُروى يُنسى', home: 'الرئيسية',
    intro: 'تنهار المباني بمرور الزمن، لكن ما يُبقي القرية حيّةً حقًا هو ذكريات الناس. خُصِّصت هذه الصفحة لتدوين الحكايات والعادات والألقاب والتجارب التي يرويها أهل القرية.',
    quote: '«من غادروا القرية يعودون أحيانًا ليتجوّلوا بين بيوتهم ومدارسهم القديمة، يتذكّرون أيامًا مضت.»', cite: '— ملاحظةٌ عن أولوكالة',
    note: 'هذا القسم ما يزال في بدايته. العناوين أدناه تبيّن أنواع الذكريات التي نأمل جمعها. <strong>يمكن أن تكون أنت من يكتب القصة الأولى.</strong>',
    cardsK: 'ماذا نجمع؟', cardsH: 'عناوين الذاكرة',
    formK: 'قُل الكلمة الأولى', formH: 'اترُك ذكراك', formP: 'ذكرى قصيرة، اسم، تاريخ... كل ما تتذكّره ثمين. اكتبه أدناه ولنُضِفه إلى الأرشيف.',
    fName: 'اسمك (اختياري)', fNamePh: 'كيف تودّ أن تُذكَر؟', fConn: 'صلتك بالقرية',
    conn: ['وُلدتُ/نشأتُ في القرية', 'عائلتي من أولوكالة', 'لي أقارب هناك', 'زرتُها', 'باحث / مهتمّ', 'أخرى'],
    fTitle: 'عنوان الذكرى', fTitlePh: 'مثال: انتظار الدور عند الطاحونة',
    fMemory: 'ذكراك', fMemoryPh: 'كل ما تتذكّره — قصيرًا كان أم طويلًا، لا فرق...',
    fEmail: 'البريد الإلكتروني (لا يُنشَر، فقط للتواصل معك)', fEmailPh: 'example@email.com',
    submit: 'أرسِل الذكرى', formNote: 'قد تُنشَر الذكريات المُرسَلة في الأرشيف بعد المراجعة. إن كنت تفضّل عدم ظهور اسمك، فأخبِرنا فحسب.',
  },
};
