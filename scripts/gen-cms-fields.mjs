// Sayfa JSON'larından Sveltia "files" alan tanımlarını üretir (TR etiketli, i18n).
// Kullanım: node scripts/gen-cms-fields.mjs <çıktı> <sayfa1> <sayfa2> ...
import { readFileSync, writeFileSync } from 'node:fs';

const LABELS = {
  metaTitle: 'SEO başlık (tarayıcı sekmesi)', metaDesc: 'SEO açıklama (arama motoru)',
  crumb: 'Üst menüde görünen ad', kicker: 'Küçük üst başlık', h1: 'Sayfa başlığı',
  intro: 'Giriş metni', home: '“Ana Sayfa” link metni',
  stats: 'İstatistikler', num: 'Sayı', lbl: 'Etiket',
  introP: 'Giriş paragrafları', steps: 'Süreç adımları', step: 'Adım etiketi', h4: 'Alt başlık',
  h3: 'Başlık', p: 'Metin', cards: 'Kartlar', note: 'Açıklama (opsiyonel)', icon: 'İkon',
  ctaH2: 'Kapanış başlığı', ctaP: 'Kapanış metni', ctaBtn: 'Kapanış buton yazısı',
  subjects: 'Konu seçenekleri', quote: 'Alıntı', cite: 'Alıntı kaynağı',
  motifK: 'Bölüm küçük başlık', motifH: 'Bölüm başlığı',
  procK: 'Süreç: küçük başlık', procH: 'Süreç: başlık', procP: 'Süreç: açıklama',
  muhtarQ: 'Muhtar alıntısı', muhtarC: 'Muhtar alıntı kaynağı',
  womenK: 'Kadın emeği: küçük başlık', womenH: 'Kadın emeği: başlık', womenP: 'Kadın emeği: metin',
  q2: 'Alıntı 2', c2: 'Alıntı 2 kaynağı', q3: 'Alıntı 3', c3: 'Alıntı 3 kaynağı',
  econK: 'Ekonomi: küçük başlık', econH: 'Ekonomi: başlık',
  giNote: 'Coğrafi işaret notu', healthNote: 'Sağlık notu',
  endemicQ: 'Endemik alıntısı', endemicC: 'Endemik alıntı kaynağı', sources: 'Kaynaklar',
  galK: 'Galeri: küçük başlık', galH: 'Galeri: başlık', galP: 'Galeri: açıklama', galNote: 'Galeri notu',
  s1k: 'Bölüm 1: küçük başlık', s1h: 'Bölüm 1: başlık', s1p: 'Bölüm 1: metin',
  s2k: 'Bölüm 2: küçük başlık', s2h: 'Bölüm 2: başlık', s2p: 'Bölüm 2: metin',
  s3k: 'Bölüm 3: küçük başlık', s3h: 'Bölüm 3: başlık', s3p: 'Bölüm 3: metin',
  phPhoto: 'Boş çerçeve yazısı', read: '“Haberi oku” yazısı', readGallery: '“Galeriyi gör” yazısı',
  fName: 'Form: ad alanı', fEmail: 'Form: e-posta alanı', fSubject: 'Form: konu alanı',
  fMessage: 'Form: mesaj alanı', submit: 'Form: gönder butonu', formNote: 'Form: alt not',
  locH: 'Konum başlığı', locP: 'Konum metni', mapBtn: 'Harita butonu',
  emailH: 'E-posta başlığı', emailP: 'E-posta metni', howH: 'Katkı başlığı', howList: 'Katkı listesi',
  // tarih
  nameEvo: 'İsim evrimi listesi', date: 'Dönem / tarih', name: 'Ad',
  nameK: 'İsim bölümü: küçük başlık', nameH: 'İsim bölümü: başlık', nameIntro: 'İsim bölümü: giriş',
  namePara: 'İsim bölümü: paragraf (HTML)', nameSrc: 'İsim bölümü: kaynak',
  timeline: 'Zaman çizelgesi', era: 'Dönem', ott: 'Osmanlı bölümü maddeleri',
  ottK: 'Osmanlı: küçük başlık', ottH: 'Osmanlı: başlık', ottIntro: 'Osmanlı: giriş', ottSrc: 'Osmanlı: kaynak',
  srcNote: 'Kaynak notu',
  // mimari
  docK: 'Belgeleme: küçük başlık', docH: 'Belgeleme: başlık', docP: 'Belgeleme: açıklama', docNote: 'Belgeleme notu',
  srcTitle: 'Kaynaklar başlığı', srcList: 'Kaynak listesi',
  // hafiza
  cardsK: 'Kartlar: küçük başlık', cardsH: 'Kartlar: başlık',
  formK: 'Form: küçük başlık', formH: 'Form: başlık', formP: 'Form: açıklama',
  fNamePh: 'Ad alanı ipucu', fConn: 'Bağlantı alanı etiketi', conn: 'Bağlantı seçenekleri',
  fTitle: 'Başlık alanı etiketi', fTitlePh: 'Başlık alanı ipucu',
  fMemory: 'Hatıra alanı etiketi', fMemoryPh: 'Hatıra alanı ipucu', fEmailPh: 'E-posta ipucu',
};
const label = (k) => LABELS[k] || k;
const longField = (k, v) => typeof v === 'string' && (v.length > 70 || v.includes('<'));
const widget = (k, v) => (longField(k, v) ? 'text' : 'string');

function fieldDef(key, val, indent, arr) {
  const pad = ' '.repeat(indent);
  const lbl = label(key);
  if (key === 'icon' && typeof val === 'string' && arr) {
    const opts = [...new Set(arr.map((i) => i.icon))];
    return `${pad}- name: icon\n${pad}  label: "İkon"\n${pad}  widget: select\n${pad}  i18n: true\n${pad}  options: [${opts.join(', ')}]\n`;
  }
  if (Array.isArray(val)) {
    const sample = val[0];
    if (sample && typeof sample === 'object') {
      let out = `${pad}- name: ${key}\n${pad}  label: "${lbl}"\n${pad}  widget: list\n${pad}  i18n: true\n${pad}  fields:\n`;
      for (const [k, v] of Object.entries(sample)) out += fieldDef(k, v, indent + 6, val);
      return out;
    }
    return `${pad}- name: ${key}\n${pad}  label: "${lbl}"\n${pad}  widget: list\n${pad}  i18n: true\n${pad}  field: { name: deger, label: "Madde", widget: ${widget(key, sample)}, i18n: true }\n`;
  }
  if (val && typeof val === 'object') {
    let out = `${pad}- name: ${key}\n${pad}  label: "${lbl}"\n${pad}  widget: object\n${pad}  i18n: true\n${pad}  fields:\n`;
    for (const [k, v] of Object.entries(val)) out += fieldDef(k, v, indent + 6, null);
    return out;
  }
  return `${pad}- { name: ${key}, label: "${lbl}", widget: ${widget(key, val)}, i18n: true }\n`;
}

const TITLES = {
  dut: 'Dut Sayfası', arsiv: 'Arşiv Sayfası', iletisim: 'İletişim Sayfası', basin: 'Basın Sayfası (başlıklar)',
  tarih: 'Tarih Sayfası', mimari: 'Mimari Sayfası', hafiza: 'Hafıza Sayfası',
};
const [outFile, ...pages] = process.argv.slice(2);
let out = '';
for (const name of pages) {
  const data = JSON.parse(readFileSync(`src/content/pages/${name}.json`, 'utf8'));
  out += `      - name: ${name}\n        label: "${TITLES[name]}"\n        file: src/content/pages/${name}.json\n        i18n: true\n        fields:\n`;
  for (const [k, v] of Object.entries(data.tr)) out += fieldDef(k, v, 10, null);
}
writeFileSync(outFile, out);
console.log(`üretildi -> ${outFile} (${pages.join(', ')})`);
