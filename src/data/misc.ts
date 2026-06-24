import type { Lang } from '../lib/i18n';

export const TESEKKUR: Record<Lang, {
  metaTitle: string; kicker: string; h1: string; p: string; back: string; explore: string;
}> = {
  tr: { metaTitle: 'Teşekkürler — Ulukale Köyü Dijital Arşivi', kicker: 'Alındı', h1: 'Teşekkür ederiz!',
    p: 'Mesajınız bize ulaştı. Köyün hafızasına kattığınız her şey için minnettarız. En kısa sürede dönüş yapacağız.', back: 'Ana Sayfaya Dön', explore: 'Arşivi Keşfet' },
  en: { metaTitle: 'Thank You — Ulukale Village Digital Archive', kicker: 'Received', h1: 'Thank you!',
    p: 'Your message has reached us. We are grateful for everything you add to the village\'s memory. We will get back to you as soon as possible.', back: 'Back to Home', explore: 'Explore the Archive' },
  ar: { metaTitle: 'شكرًا لك — أرشيف قرية أولوكالة الرقمي', kicker: 'تمّ الاستلام', h1: 'شكرًا لك!',
    p: 'وصلتنا رسالتك. نحن ممتنّون لكل ما تضيفه إلى ذاكرة القرية. وسنردّ عليك في أقرب وقت.', back: 'العودة إلى الرئيسية', explore: 'استكشف الأرشيف' },
};

export const NOTFOUND: Record<Lang, {
  metaTitle: string; kicker: string; h1: string; p: string; back: string;
}> = {
  tr: { metaTitle: 'Sayfa Bulunamadı — Ulukale Köyü', kicker: '404', h1: 'Bu yol bir yere çıkmıyor',
    p: 'Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir. Köyün hafızasına dönmek için aşağıdaki bağlantıyı kullanın.', back: 'Ana Sayfaya Dön' },
  en: { metaTitle: 'Page Not Found — Ulukale Village', kicker: '404', h1: 'This path leads nowhere',
    p: 'The page you are looking for may have moved or never existed. Use the link below to return to the village\'s memory.', back: 'Back to Home' },
  ar: { metaTitle: 'الصفحة غير موجودة — قرية أولوكالة', kicker: '404', h1: 'هذا الطريق لا يؤدّي إلى شيء',
    p: 'قد تكون الصفحة التي تبحث عنها انتقلت أو لم توجد أصلًا. استخدم الرابط أدناه للعودة إلى ذاكرة القرية.', back: 'العودة إلى الرئيسية' },
};
