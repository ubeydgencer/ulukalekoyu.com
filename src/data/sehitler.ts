import type { Lang } from '../lib/i18n';

// 9 Eylül 1994 Ulukale şehitleri — Tarih sayfasındaki "Yakın Tarih" bölümünde gösterilir.
export const SEHITLER: Record<Lang, {
  kicker: string; h2: string; intro: string;
  raidH: string; raidLead: string; raidNames: string[];
  othersP: string; resistP: string;
  anitH: string; anitP: string;
  portraitCap: string; monumentCap: string; closing: string; src: string;
}> = {
  tr: {
    kicker: 'Yakın Tarih', h2: '9 Eylül 1994 — Ulukale Şehitleri',
    intro: '9 Eylül 1994 gecesi Ulukale köyü, bölücü terör örgütü PKK mensuplarının düzenlediği hain bir baskına uğradı. Evler, köy camisi ve dükkânlar ateşe verildi; savunmasız sivil vatandaşlarımız hunharca katledildi. Onları rahmetle, minnetle ve sonsuz bir vefayla anıyoruz.',
    raidH: 'Baskında şehit edilenler', raidLead: '9 Eylül 1994 baskınında isimleri net olarak bilinen 7 köylümüz şehit edilmiştir:',
    raidNames: ['Abdulaziz Karaduman', 'Abdullah Fidan', 'Ahmet Altunoluk (Hacı Ahmet Altınok)', 'Dursun Ateş', 'Latif Gürtürk (Latif Gültürk)', 'İskender Gürbüz', 'Şerife Çoban'],
    othersP: 'Köyün acılı tarihinde, bu baskının dışında <strong>farklı tarihlerde</strong> de şehitler verilmiştir; bunların arasında <strong>bahçe nöbetinde</strong> şehit edilen <strong>Mehmet Çiçek</strong> ve <strong>Süleyman Aydın</strong> da vardır. Köyün verdiği toplam şehit sayısı 13\'tür. Geriye kalan 4 şehidimize dair elimizde kesin bilgi bulunmamaktadır; bilgisi olan varsa <a href="/iletisim/">bizimle paylaşabilir</a>, sayfaya ekleyelim.',
    resistP: 'Terör örgütünün amacı korku salmak, köy halkını göçe zorlamak ve bu kadim toprakları insansızlaştırmaktı. Fakat Ulukale halkı boyun eğmedi; yurtlarını terk etmediler, aksine topraklarına daha sıkı sarıldılar. Aradan geçen yıllarda köy küçülmedi, büyüdü. Bu dik duruş, vatana bağlılığın ve şehitlere vefanın bir simgesi oldu.',
    anitH: 'Anıt ve anma törenleri', anitP: 'Şehitlerimizin aziz hatırasını yaşatmak için <strong>2018 yılında Ulukale köyünde bir Şehitler Anıtı</strong> inşa edildi. Her yıl <strong>9 Eylül</strong>\'de köy şehitliğinde resmî anma törenleri düzenleniyor; Kur\'an-ı Kerim tilavet ediliyor, dualar ediliyor. Törenlere Tunceli Valisi, Çemişgezek Kaymakamı, bölge milletvekilleri, üniversite ve belediye temsilcileri, köy derneği yetkilileri, şehit yakınları ve çok sayıda vatandaş katılıyor.',
    portraitCap: 'Ulukale şehitlerimizin aziz hatıraları', monumentCap: 'Ulukale Şehitliği Anıtı (2018) — Foto: Tunceli Valiliği',
    closing: 'Şehitlerimizin ruhu şad, mekânları cennet olsun. Aziz hatıraları, bu köy yaşadıkça yaşayacak.',
    src: 'Kaynaklar: Tunceli Valiliği (görseller), Elazığ Son Haber, Habertürk, Milliyet ve köy kaynakları.',
  },
  en: {
    kicker: 'Recent History', h2: '9 September 1994 — The Ulukale Martyrs',
    intro: 'On the night of 9 September 1994, Ulukale village suffered a treacherous raid carried out by members of the separatist terrorist organisation PKK. Houses, the village mosque and shops were set ablaze, and defenceless civilians were brutally killed. We remember them with mercy, gratitude and endless faithfulness.',
    raidH: 'Martyred in the raid', raidLead: 'Seven villagers whose names are clearly known were martyred in the raid of 9 September 1994:',
    raidNames: ['Abdulaziz Karaduman', 'Abdullah Fidan', 'Ahmet Altunoluk (Hacı Ahmet Altınok)', 'Dursun Ateş', 'Latif Gürtürk (Latif Gültürk)', 'İskender Gürbüz', 'Şerife Çoban'],
    othersP: 'In the village\'s painful history, martyrs were also lost on <strong>other dates</strong> apart from this raid; among them are <strong>Mehmet Çiçek</strong> and <strong>Süleyman Aydın</strong>, martyred while on <strong>watch duty in the orchards</strong>. The total number of martyrs the village has given is thirteen. We do not have definite information about the remaining four; if you have any, please <a href="/en/iletisim/">share it with us</a> and we will add it.',
    resistP: 'The terrorist organisation aimed to spread fear, force the villagers to migrate, and empty this ancient land of its people. Yet the people of Ulukale would not bow; they did not abandon their homeland but held on to their soil all the more firmly. In the years that followed, the village did not shrink — it grew. This steadfastness became a symbol of devotion to the homeland and faithfulness to the martyrs.',
    anitH: 'The monument and commemorations', anitP: 'To keep the cherished memory of our martyrs alive, a <strong>Martyrs\' Monument was built in Ulukale village in 2018</strong>. Every year on <strong>9 September</strong>, official commemoration ceremonies are held at the village memorial; the Qur\'an is recited and prayers are offered. The ceremonies are attended by the Governor of Tunceli, the District Governor of Çemişgezek, regional MPs, university and municipal representatives, village association officials, the martyrs\' families and many citizens.',
    portraitCap: 'In cherished memory of the Ulukale martyrs', monumentCap: 'The Ulukale Martyrs\' Monument (2018) — Photo: Tunceli Governorate',
    closing: 'May the souls of our martyrs rest in peace. Their cherished memory will live on as long as this village lives.',
    src: 'Sources: Tunceli Governorate (images), Elazığ Son Haber, Habertürk, Milliyet and village sources.',
  },
  ar: {
    kicker: 'تاريخٌ قريب', h2: '9 سبتمبر 1994 — شهداء أولوكالة',
    intro: 'في ليلة 9 سبتمبر 1994 تعرّضت قرية أولوكالة لهجومٍ غادر نفّذه عناصرٌ من المنظمة الإرهابية الانفصالية (PKK). أُضرمت النيران في البيوت ومسجد القرية والمتاجر، وقُتل المدنيون العُزّل بوحشية. نذكرهم بالرحمة والامتنان ووفاءٍ لا ينتهي.',
    raidH: 'شهداء الهجوم', raidLead: 'استُشهد في هجوم 9 سبتمبر 1994 سبعةٌ من أبناء القرية معروفةٌ أسماؤهم بوضوح:',
    raidNames: ['عبد العزيز كارادومان', 'عبد الله فيدان', 'أحمد ألتونولوك (حاجي أحمد ألتينوك)', 'درسون أتش', 'لطيف غورتورك (لطيف غولتورك)', 'إسكندر غوربوز', 'شريفة تشوبان'],
    othersP: 'في تاريخ القرية المؤلم، سقط شهداء أيضًا في <strong>تواريخ أخرى</strong> غير هذا الهجوم؛ ومنهم <strong>محمد تشيتشك</strong> و<strong>سليمان أيدن</strong> اللذان استُشهدا أثناء <strong>الحراسة في البساتين</strong>. ويبلغ مجموع شهداء القرية ثلاثة عشر. ولا تتوفّر لدينا معلومات مؤكّدة عن الشهداء الأربعة الباقين؛ من لديه معلومة فليُشاركنا <a href="/ar/iletisim/">عبر صفحة التواصل</a> لنُضيفها.',
    resistP: 'كان هدف المنظمة الإرهابية بثّ الخوف وإجبار الأهالي على الهجرة وإفراغ هذه الأرض العريقة. لكنّ أهل أولوكالة لم يخضعوا؛ لم يتركوا وطنهم بل تمسّكوا بأرضهم أكثر. وفي السنوات التالية لم تصغُر القرية بل كبرت. وصار هذا الثبات رمزًا للتعلّق بالوطن والوفاء للشهداء.',
    anitH: 'النُّصب ومراسم الإحياء', anitP: 'لإحياء الذكرى العزيزة لشهدائنا، <strong>شُيِّد نُصبٌ للشهداء في قرية أولوكالة عام 2018</strong>. وفي كل عام في <strong>9 سبتمبر</strong> تُقام مراسم إحياءٍ رسمية عند نُصب القرية؛ يُتلى القرآن الكريم وتُرفع الأدعية. ويحضرها والي تونجلي وقائمقام تشيميشكزك ونوّاب المنطقة وممثّلو الجامعة والبلدية ومسؤولو جمعية القرية وذوو الشهداء وجمعٌ غفير.',
    portraitCap: 'إحياءً للذكرى العزيزة لشهداء أولوكالة', monumentCap: 'نُصب شهداء أولوكالة (2018) — تصوير: ولاية تونجلي',
    closing: 'رحم الله شهداءنا وأسكنهم فسيح جنّاته. وستبقى ذكراهم حيّةً ما دامت هذه القرية حيّة.',
    src: 'المصادر: ولاية تونجلي (الصور)، Elazığ Son Haber، Habertürk، Milliyet ومصادر القرية.',
  },
};
