# Ulukale Köyü — Dijital Arşiv

Tunceli (Dersim) Çemişgezek ilçesine bağlı **Ulukale köyünün** tarihini, mimarisini,
hafızasını ve bugününü koruyan çok dilli (TR / EN / AR) web sitesi.
Canlı: **https://ulukalekoyu.com**

**Astro** ile derlenir, **Cloudflare Workers** (statik asset) üzerinde yayınlanır;
içerik **Sveltia CMS** paneliyle (`/admin`) kod yazmadan yönetilir.
Kullanım ve kurulum için **[KILAVUZ.md](KILAVUZ.md)**.

## Diller
- Türkçe — kök (`/`)
- İngilizce — `/en/`
- Arapça — `/ar/` (RTL, Cairo fontu, Arapça-Hint rakamları)

Masaüstünde dil seçici sol kenarda dikey yüzen bir popup'tır; mobilde header'dadır.

## Sayfalar (her biri 3 dilde)
`index` · `tarih` · `mimari` · `dut` · `arsiv` · `hafiza` · `basin` ·
`duyurular` (blog) · `ulasim` (yol tarifi + canlı feribot saatleri) ·
`sehitlerimiz` (9 Eylül 1994 anma) · `iletisim` · `tesekkurler` · `404`

## Mimari
```
src/
  pages/        İnce sayfa dosyaları (tr kök, en/, ar/) + dinamik [slug] (özel sayfalar)
  layouts/      Base.astro (head, SEO, hreflang, JSON-LD, GA)
  components/   Header, Footer, *Body, Gallery, FeribotBody, CustomPageBody
  data/         Sayfa metinleri / yükleyiciler — *.ts (JSON'ı import eder)
  content/      Panelden yönetilen içerik:
                  pages/*.json   tüm sayfa metinleri (3 dil, i18n)
                  press/*.json   basın haberleri
                  gallery/*.json fotoğraflar
                  blog/*.json    duyurular
                  custom/*.json  panelden eklenen yeni sayfalar
  lib/i18n.ts   diller, yollar, menü, footer
public/         Statik varlıklar (images, css, js, robots, llms, admin/), _redirects, _headers
feribot-worker/ Ayrı Cloudflare Worker: Çemişgezek + Pertek feribot saatleri API'si
```

## Teknoloji
- **Astro 4** (statik çıktı `dist/`), markdown için `marked`.
- Fontlar: Google Fonts (Fraunces + Lora; Arapça için Cairo).
- **Barındırma:** Cloudflare Workers statik asset (`wrangler.jsonc`), domain `ulukalekoyu.com`.
- **CMS:** Sveltia CMS (`/admin`), GitHub backend, **Access Token (PAT)** ile giriş.
- **Formlar:** Web3Forms → `mubeyd@gmail.com`.
- **Feribot:** `feribot-api.ubeyd.workers.dev` (her gece tarar, KV'de tutar, CORS'lu JSON).

## Komutlar
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # -> dist/
npm run preview
```

## Yayına alma
`main` dalına her push → Cloudflare otomatik build (Workers Build, git'e bağlı).
Acil elle deploy: kök dizinde `CLOUDFLARE_API_TOKEN=... npx wrangler deploy`.
Eski `.html` adresleri `public/_redirects` ile 301 yönlenir; başlıklar `public/_headers`.
Site haritası dinamik (`src/pages/sitemap.xml.ts`).

## Kaynaklar
- Enver Çakar — *Osmanlı Döneminde Ulukale Köyü* (Fırat Üniv. Harput Araştırmaları Dergisi, 2018)
- İ.Ü. Sanat Tarihi — *Çemişgezek'in Ulukale Köyündeki Mimari Eserler*
- Sevan Nişanyan — *Nişanyan Yeradları* (Xozan)
- Anadolu Ajansı, NTV, Hürriyet, Milliyet, Habertürk vd. (basın ve görsel derlemesi)
