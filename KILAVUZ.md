# Ulukale Köyü Dijital Arşivi — Yönetim Kılavuzu

Bu site **Astro** ile derlenir, **Cloudflare Pages**'te yayınlanır ve içeriğinin
bir kısmı **Sveltia CMS** paneliyle (kod yazmadan) güncellenebilir. Panel git
tabanlıdır: yaptığınız her değişiklik GitHub deposuna kaydedilir, Cloudflare
otomatik olarak yeni sürümü yayına alır.

- **Barındırma:** Cloudflare Pages (ücretsiz, build kredisi derdi yok)
- **Formlar:** Web3Forms → gönderiler **mubeyd@gmail.com**'a mail olur
- **Panel:** https://ulukalekoyu.com/admin

---

## 1. Panele giriş

Adres: **https://ulukalekoyu.com/admin** → **"Login with GitHub"**.

> İlk kullanımdan önce Bölüm 5'teki tek seferlik GitHub girişi kurulumunu yapın.

---

## 2. Fotoğraf eklemek / düzenlemek

1. Sol menüden **"Fotoğraf Galerisi"** → **"New Fotoğraf"**.
2. Alanlar:
   - **Hangi galeri?** — *Arşiv — Eski Albümler*, *Arşiv — Köyden Kareler*,
     *Mimari — Belgeleme* ya da *Dut — Hasattan Kareler*.
   - **Fotoğraf** — Bilgisayardan yükleyin veya arşivden seçin.
   - **Kaynak künyesi** — Basından alındıysa kaynağı yazın (ör. `AA`, `NTV`),
     kendi fotoğrafınızsa boş bırakın.
   - **Geniş göster** — Genelde kapalı kalsın.
   - **Başlık (TR/EN/AR)** ve **Alt metin (TR/EN/AR)**.
3. **Save → Publish.** Birkaç dakikada yayında.

---

## 3. Haber (basın) eklemek / düzenlemek

1. Sol menüden **"Basın / Haberler"** → **"New Haber"**.
2. **Bölüm** (Tarih / Dut / Köyün Hafızası), **Tür** (Haber yazısı / Foto-galeri),
   **URL**, ve 3 dilde **Kaynak / Tarih / Başlık / Özet**.
3. **Save → Publish.**

---

## 4. Değişiklik nasıl yayına çıkar?

- Panelde **Publish** → değişiklik GitHub'a kaydedilir.
- **Cloudflare Pages** bunu görüp siteyi otomatik derler ve yayına alır (~1–2 dk).
- Cloudflare'in ücretsiz planında aylık build limiti çok yüksektir; Netlify'daki
  kredi sıkıntısı burada yoktur.

---

## 5. TEK SEFERLİK KURULUM — GitHub girişi (Cloudflare Worker ile)

Panelin GitHub'a giriş yapabilmesi için bir OAuth aracısı gerekir. Site Cloudflare'de
olduğu için bunu küçük bir **Cloudflare Worker** (`sveltia-cms-auth`) ile kurarız.

**a) GitHub OAuth uygulaması oluşturun**
1. GitHub → **Settings → Developer settings → OAuth Apps → New OAuth App**.
2. Doldurun:
   - **Application name:** `Ulukale Arşivi CMS`
   - **Homepage URL:** `https://ulukalekoyu.com`
   - **Authorization callback URL:** `https://sveltia-cms-auth.<KULLANICI>.workers.dev/callback`
     *(Worker adresini bir sonraki adımda alacaksınız; oluşturduktan sonra bu alanı güncelleyin.)*
3. **Client ID** ve **Client Secret**'i not alın.

**b) Worker'ı dağıtın**
1. Cloudflare → **Workers & Pages → Create** → `sveltia/sveltia-cms-auth` deposunu
   kullanın (GitHub'daki "Deploy to Cloudflare" düğmesi en kolayı).
2. Worker'a ortam değişkenlerini (Settings → Variables / Secrets) ekleyin:
   - `GITHUB_CLIENT_ID` = (yukarıdaki Client ID)
   - `GITHUB_CLIENT_SECRET` = (yukarıdaki Client Secret)
   - `ALLOWED_DOMAINS` = `ulukalekoyu.com`
3. Worker adresini kopyalayın (ör. `https://sveltia-cms-auth.ubeyd.workers.dev`).
4. GitHub OAuth uygulamasındaki **callback URL**'i bu adres + `/callback` olacak
   şekilde güncelleyin.

**c) Panele tanıtın**
`public/admin/config.yml` dosyasındaki `base_url` satırını Worker adresinizle
değiştirin (şu an `https://sveltia-cms-auth.UBEYD-WORKER.workers.dev` yazıyor).
Kaydedip push edin; artık `/admin`'de **"Login with GitHub"** çalışır.

---

## 6. Panelden düzenlenenler ve düzenlenmeyenler

**Panelden (kod yazmadan):** Galeri fotoğrafları (`/arsiv/`, `/mimari/`, `/dut/`)
ve haberler (`/basin/`).

**Şimdilik kod tarafında (benden/geliştiriciden isteyin):** Sayfa metinleri
(ana sayfa, tarih, dut anlatısı, mimari kartlar…), tasarım, menü, diller.
İstenirse bu metinler de panele taşınabilir.

---

## 7. Formlar (Hafıza & İletişim) — Web3Forms

`/hafiza/` ve `/iletisim/` formları **Web3Forms** ile çalışır. Gönderiler doğrudan
**mubeyd@gmail.com** adresine e-posta olarak gelir; gönderim sonrası kullanıcı
`/tesekkurler/` sayfasına yönlenir.

- Access key, formların içinde gömülüdür (`public` bilgidir, sakıncası yoktur).
- Değiştirmek gerekirse: `src/components/HafizaBody.astro` ve `IletisimBody.astro`
  içindeki `access_key` değeri.
- Ücretsiz plan sınırı aşılırsa web3forms.com hesabından yükseltebilirsiniz.

---

## 8. Cloudflare Pages kurulumu (tek seferlik)

1. Cloudflare → **Workers & Pages → Create → Pages → Connect to Git**.
2. `ubeydgencer/ulukalekoyu.com` deposunu seçin.
3. Ayarlar:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. **Custom domains** → `ulukalekoyu.com` ekleyin (DNS zaten Cloudflare'de).
5. Eski `.html` adresleri `public/_redirects` ile, başlıklar `public/_headers`
   ile otomatik uygulanır.

---

## 9. Geliştirici notları

```bash
npm install        # bağımlılıkları kur
npm run dev        # yerel geliştirme (http://localhost:4321)
npm run build      # dist/ klasörüne üretim derlemesi
npm run preview    # üretim derlemesini önizle
```

- Panel içeriği: `src/content/press/*.json`, `src/content/gallery/*.json`.
- Sayfa metinleri: `src/data/*.ts`. Panel yapılandırması: `public/admin/config.yml`.
- Yönlendirme/başlık: `public/_redirects`, `public/_headers`.
- Site haritası: `node scripts/gen-sitemap.mjs`.

> **Not (macOS/iCloud):** Masaüstü iCloud'a senkronluysa bazen `Dosya 2.ext`
> biçiminde çakışma kopyaları oluşabiliyor. Bunlar git'e girmez ama derlemeyi
> kirletebilir; görürseniz silin: `find . -name '* 2*' -not -path './node_modules/*' -delete`.
