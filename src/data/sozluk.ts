import type { Lang } from '../lib/i18n';
import sozlukData from '../content/sozluk/sozluk.json';
import deyimlerData from '../content/sozluk/deyimler.json';
import yerData from '../content/sozluk/yer.json';
import kaynakData from '../content/sozluk/kaynak.json';

export interface SozWord { k: string; a: string; e: string }

// Tamamı büyük harfle girilmiş kelimeleri "baş harf büyük, gerisi küçük" yap (Türkçe I/İ kurallarıyla)
function normWord(s: string): string {
  const letters = s.replace(/[^A-Za-zÇĞİIÖŞÜçğıiöşü]/g, '');
  if (letters && letters === letters.toLocaleUpperCase('tr') && letters !== letters.toLocaleLowerCase('tr')) {
    const lower = s.toLocaleLowerCase('tr');
    return lower.charAt(0).toLocaleUpperCase('tr') + lower.slice(1);
  }
  return s;
}
export const SOZLUK: SozWord[] = (sozlukData as SozWord[]).map((w) => ({ ...w, k: normWord(w.k) }));

export interface Deyim { d: string; a: string }
export const DEYIMLER = deyimlerData.deyimler as Deyim[];
export const DUALAR = deyimlerData.dualar as string[];
export const BEDDUALAR = deyimlerData.beddualar as string[];
export const YERLER = yerData as string[];

export interface KaynakGroup { title: string; links: { label: string; url: string }[] }
export const KAYNAK = kaynakData as {
  groups: KaynakGroup[];
  note_tr: string; note_en: string; note_ar: string;
};

// Türk alfabesi sırası + URL için ASCII slug (özel harfler çift harfle ayrılır)
const ALPHABET: [string, string][] = [
  ['A', 'a'], ['B', 'b'], ['C', 'c'], ['Ç', 'cc'], ['D', 'd'], ['E', 'e'], ['F', 'f'],
  ['G', 'g'], ['Ğ', 'gg'], ['H', 'h'], ['I', 'i'], ['İ', 'ii'], ['J', 'j'], ['K', 'k'],
  ['L', 'l'], ['M', 'm'], ['N', 'n'], ['O', 'o'], ['Ö', 'oo'], ['P', 'p'], ['R', 'r'],
  ['S', 's'], ['Ş', 'ss'], ['T', 't'], ['U', 'u'], ['Ü', 'uu'], ['V', 'v'], ['Y', 'y'], ['Z', 'z'],
];
const SLUG_OF = new Map(ALPHABET.map(([l, s]) => [l, s]));

// İlk harfi Türkçe kurallarıyla büyüt (i→İ, ı→I)
function firstLetter(word: string): string {
  const ch = word.trim().charAt(0);
  if (ch === 'i') return 'İ';
  if (ch === 'ı') return 'I';
  const up = ch.toLocaleUpperCase('tr');
  return SLUG_OF.has(up) ? up : up;
}

// Harf -> o harfle başlayan, Türkçe sıraya göre sıralı kelimeler
const byLetter = new Map<string, SozWord[]>();
for (const w of SOZLUK) {
  const L = firstLetter(w.k);
  if (!byLetter.has(L)) byLetter.set(L, []);
  byLetter.get(L)!.push(w);
}
for (const list of byLetter.values()) {
  list.sort((a, b) => a.k.localeCompare(b.k, 'tr'));
}

export interface LetterInfo { letter: string; slug: string; count: number }
// Yalnızca kelimesi olan harfler, alfabetik sırayla
export const LETTERS: LetterInfo[] = ALPHABET
  .filter(([l]) => byLetter.has(l))
  .map(([letter, slug]) => ({ letter, slug, count: byLetter.get(letter)!.length }));

const bySlug = new Map(LETTERS.map((li) => [li.slug, li.letter]));
export function wordsForSlug(slug: string): SozWord[] {
  const letter = bySlug.get(slug);
  return letter ? byLetter.get(letter)! : [];
}
export function letterOfSlug(slug: string): LetterInfo | undefined {
  return LETTERS.find((l) => l.slug === slug);
}

export const TOTAL_WORDS = SOZLUK.length;

// Çok dilli arayüz metinleri
export interface SozlukUI {
  metaTitle: string; metaDesc: string; crumb: string; home: string;
  kicker: string; h1: string; intro: string;
  azKicker: string; azH: string; azP: string; wordsSuffix: string;
  deyKicker: string; deyH: string; deyP: string;
  duaH: string; bedH: string;
  yerKicker: string; yerH: string; yerP: string;
  kayKicker: string; kayH: string; kayP: string;
  letterMeta: (l: string) => string;
  colWord: string; colMeaning: string; colExample: string;
  addMeaning: string;
  backToIndex: string; prev: string; next: string;
  formKicker: string; formH: string; formP: string; subject: string;
  fName: string; fContact: string; fWord: string; fWordPh: string; fMsg: string; fMsgPh: string;
  submit: string; formNote: string; botLabel: string;
}

export const SOZLUK_UI: Record<Lang, SozlukUI> = {
  tr: {
    metaTitle: 'Sözlük — Ulukale Ağzı — Ulukale Köyü Dijital Arşivi',
    metaDesc: 'Ulukale (Çemişgezek) ağzına ait kelimeler, deyimler, dualar, beddualar ve yer adları sözlüğü.',
    crumb: 'Sözlük', home: 'Ana Sayfa',
    kicker: 'Ulukale Ağzı', h1: 'Sözlük',
    intro: 'Ulukale köyünün konuşma dilinden derlenen kelimeler, deyimler, dualar, beddualar ve yer adları. Kaybolmaya yüz tutmuş yöresel ağzı kayıt altına almak için hazırlandı.',
    azKicker: 'Kelimeler', azH: 'Sözlük (A–Z)', azP: 'Bir harfe tıklayarak o harfle başlayan kelimeleri görün.',
    wordsSuffix: 'kelime',
    deyKicker: 'Deyimler', deyH: 'Deyimler ve Tabirler', deyP: 'Yörede kullanılan deyimler, tabirler ve anlamları.',
    duaH: 'Dualar', bedH: 'Beddualar (Garışlar)',
    yerKicker: 'Yer Adları', yerH: 'Yer Adları', yerP: 'Köyde ve çevresinde kullanılan yerel yer adları.',
    kayKicker: 'Kaynaklar', kayH: 'Kaynaklar', kayP: 'Kelime ve anlamların karşılaştırıldığı, yararlanılan kaynaklar.',
    letterMeta: (l) => `“${l}” harfiyle başlayan Ulukale ağzı kelimeleri.`,
    colWord: 'Kelime', colMeaning: 'Anlamı', colExample: 'Örnek (Ulukale ağzı)',
    addMeaning: 'Anlamını biliyorum → ekle',
    backToIndex: '← Tüm harfler', prev: 'Önceki', next: 'Sonraki',
    formKicker: 'Katkıda Bulunun', formH: 'Eksik ya da Hatalı mı?',
    formP: 'Bu sayfada eksik bulduğunuz, yanlış olduğunu düşündüğünüz ya da eklenmesini istediğiniz kelime, deyim veya anlamı bize bildirin.',
    subject: 'Ulukale Sözlük — Katkı / Düzeltme',
    fName: 'Adınız (isteğe bağlı)', fContact: 'İletişim (e-posta veya telefon, isteğe bağlı)',
    fWord: 'Kelime / Deyim', fWordPh: 'Örn: Abad olmak',
    fMsg: 'Düzeltme / ekleme / anlam', fMsgPh: 'Doğru anlamı, örnek cümleyi ya da eklenmesini istediğiniz kelimeyi yazın.',
    submit: 'Gönder', formNote: 'Gönderdikleriniz gözden geçirilip uygun görülürse sözlüğe eklenir. İletişim bilginiz yayımlanmaz.',
    botLabel: 'Boş bırakın:',
  },
  en: {
    metaTitle: 'Dictionary — Ulukale Dialect — Ulukale Village Digital Archive',
    metaDesc: 'A dictionary of words, idioms, blessings, curses and place names from the dialect of Ulukale (Çemişgezek).',
    crumb: 'Dictionary', home: 'Home',
    kicker: 'Ulukale Dialect', h1: 'Dictionary',
    intro: 'Words, idioms, blessings, curses and place names collected from the spoken language of Ulukale village. Compiled to record a fading local dialect.',
    azKicker: 'Words', azH: 'Dictionary (A–Z)', azP: 'Tap a letter to see the words that begin with it.',
    wordsSuffix: 'words',
    deyKicker: 'Idioms', deyH: 'Idioms & Expressions', deyP: 'Local idioms and expressions with their meanings.',
    duaH: 'Blessings', bedH: 'Curses',
    yerKicker: 'Place Names', yerH: 'Place Names', yerP: 'Local place names used in and around the village.',
    kayKicker: 'Sources', kayH: 'Sources', kayP: 'The references consulted when comparing words and meanings.',
    letterMeta: (l) => `Ulukale dialect words beginning with “${l}”.`,
    colWord: 'Word', colMeaning: 'Meaning', colExample: 'Example (Ulukale dialect)',
    addMeaning: 'I know its meaning → add it',
    backToIndex: '← All letters', prev: 'Previous', next: 'Next',
    formKicker: 'Contribute', formH: 'Missing or Incorrect?',
    formP: 'Tell us about any word, idiom or meaning you find missing, believe is wrong, or would like added on this page.',
    subject: 'Ulukale Dictionary — Contribution / Correction',
    fName: 'Your name (optional)', fContact: 'Contact (email or phone, optional)',
    fWord: 'Word / Idiom', fWordPh: 'e.g. Abad olmak',
    fMsg: 'Correction / addition / meaning', fMsgPh: 'Write the correct meaning, an example sentence, or the word you want added.',
    submit: 'Send', formNote: 'Submissions are added to the dictionary if approved after review. Your contact details are not published.',
    botLabel: 'Leave blank:',
  },
  ar: {
    metaTitle: 'المعجم — لهجة أولوكالة — أرشيف قرية أولوكالة الرقمي',
    metaDesc: 'معجم لكلمات لهجة أولوكالة (تشيميشكزك) وتعابيرها وأدعيتها وأسماء أماكنها.',
    crumb: 'المعجم', home: 'الرئيسية',
    kicker: 'لهجة أولوكالة', h1: 'المعجم',
    intro: 'كلمات وتعابير وأدعية ودعوات وأسماء أماكن جُمعت من لغة الحديث في قرية أولوكالة، توثيقًا للهجة محلية آخذة في الاندثار.',
    azKicker: 'الكلمات', azH: 'المعجم (أ–ي)', azP: 'اضغط على حرف لعرض الكلمات التي تبدأ به.',
    wordsSuffix: 'كلمة',
    deyKicker: 'التعابير', deyH: 'التعابير والأمثال', deyP: 'تعابير وأمثال محلية ومعانيها.',
    duaH: 'الأدعية', bedH: 'الدعوات (اللعنات)',
    yerKicker: 'أسماء الأماكن', yerH: 'أسماء الأماكن', yerP: 'أسماء أماكن محلية تُستخدم في القرية ومحيطها.',
    kayKicker: 'المصادر', kayH: 'المصادر', kayP: 'المراجع التي استُعين بها في مقارنة الكلمات والمعاني.',
    letterMeta: (l) => `كلمات لهجة أولوكالة التي تبدأ بحرف «${l}».`,
    colWord: 'الكلمة', colMeaning: 'المعنى', colExample: 'مثال (لهجة أولوكالة)',
    addMeaning: 'أعرف معناها ← أضِفه',
    backToIndex: '← كل الحروف', prev: 'السابق', next: 'التالي',
    formKicker: 'ساهِم', formH: 'ناقص أو خطأ؟',
    formP: 'أخبِرنا بأي كلمة أو تعبير أو معنى تجده ناقصًا أو تراه خطأً أو تودّ إضافته في هذه الصفحة.',
    subject: 'معجم أولوكالة — مساهمة / تصحيح',
    fName: 'اسمك (اختياري)', fContact: 'وسيلة التواصل (بريد أو هاتف، اختياري)',
    fWord: 'الكلمة / التعبير', fWordPh: 'مثال: Abad olmak',
    fMsg: 'تصحيح / إضافة / معنى', fMsgPh: 'اكتب المعنى الصحيح أو جملة مثال أو الكلمة التي تريد إضافتها.',
    submit: 'إرسال', formNote: 'تُضاف المساهمات إلى المعجم إذا قُبلت بعد المراجعة. لا تُنشَر معلومات التواصل الخاصة بك.',
    botLabel: 'اتركه فارغًا:',
  },
};
