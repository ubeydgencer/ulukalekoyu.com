# Ulukale Köyü — Dijital Arşiv

Tunceli (Dersim) Çemişgezek ilçesine bağlı **Ulukale köyünün** tarihini, mimarisini
ve hafızasını koruyan çok dilli (TR / EN / AR) web sitesi. `ulukalekoyu.com`.

**Astro** ile derlenir, **Cloudflare Pages**'te yayınlanır; içerik **Sveltia CMS**
paneliyle (`/admin`) kod yazmadan yönetilebilir. Panel kullanımı ve kurulum için
**[KILAVUZ.md](KILAVUZ.md)** dosyasına bakın.

## Diller
- Türkçe — kök (`/`)
- İngilizce — `/en/`
- Arapça — `/ar/` (RTL, Cairo fontu, Arapça-Hint rakamları)

## Sayfalar (her biri 3 dilde)
`index` · `tarih` · `mimari` · `dut` · `arsiv` · `hafiza` · `basin` · `iletisim`
· `tesekkurler` · `404`

## Mimari
```
src/
  pages/        İnce sayfa dosyaları (tr kök, en/, ar/)
  layouts/      Base.astro (head, SEO, hreflang, JSON-LD, GA)
  components/   Header, Footer, *Body, Gallery
  data/         Sayfa metinleri (TR/EN/AR) — *.ts
  content/      Panelden yönetilen içerik — press/*.json, gallery/*.json
  lib/i18n.ts   Diller, yollar, menü
public/         Statik varlıklar (images, css, js, robots, sitemap, admin/)
```

## Teknoloji
- **Astro 4** (statik çıktı, `dist/`).
- Fontlar: Google Fonts (Fraunces + Lora; Arapça için Cairo).
- Formlar: **Web3Forms** → `mubeyd@gmail.com`.
- Panel: **Sveltia CMS** (git tabanlı, GitHub backend, Cloudflare Worker OAuth).

## Komutlar
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # -> dist/
npm run preview
```

## Yayına alma — Cloudflare Pages
`main` dalına her push otomatik deploy tetikler. Build command `npm run build`,
output directory `dist` (Cloudflare Pages panelinde tanımlı). Eski `.html` URL'leri
`public/_redirects` ile 301 yönlendirilir; HTTP başlıkları `public/_headers`.

## Kaynaklar
- Enver Çakar — *Osmanlı Döneminde Ulukale Köyü* (Fırat Üniv. Harput Araştırmaları Dergisi, 2018)
- İ.Ü. Sanat Tarihi — *Çemişgezek'in Ulukale Köyündeki Mimari Eserler*
- Sevan Nişanyan — *Nişanyan Yeradları* (Xozan)
- Anadolu Ajansı, NTV, Hürriyet, Cumhuriyet vd. (basın derlemesi)
