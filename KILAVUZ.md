# Ulukale Köyü Dijital Arşivi — Yönetim Kılavuzu

Site **Astro** ile derlenir, **Cloudflare Workers** üzerinde `ulukalekoyu.com`'da
yayınlanır. İçeriğin büyük kısmı **Sveltia CMS** paneliyle (kod yazmadan)
güncellenebilir. Panel git tabanlıdır: her değişiklik GitHub'a kaydedilir,
Cloudflare otomatik olarak yeni sürümü yayına alır (~1-2 dk).

- **Panel:** https://ulukalekoyu.com/admin
- **Formlar:** Web3Forms → gönderiler **mubeyd@gmail.com**'a mail olur

---

## 1. Panele giriş (Access Token ile)

`https://ulukalekoyu.com/admin` → açılışta **iki buton** olur:

- 🟦 **"Sign In with GitHub"** → KULLANMA (ayrı bir OAuth sunucusu gerektirir, kurulmadı)
- ⬜ **"Sign In Using Access Token"** → **BUNU KULLAN**

**Token nasıl alınır (bir kez):**
1. https://github.com/settings/tokens/new?scopes=repo&description=Ulukale%20CMS
   (ya da Fine-grained token → repo: `ulukalekoyu.com`, Contents: Read and write)
2. Aşağı in → **Generate token** → kopyala
3. Panelde **"Sign In Using Access Token"** → yapıştır → gir

> ⚠️ Token'ı kimseyle paylaşma; sadece Sveltia ekranına yapıştır (tarayıcında saklanır).

---

## 2. Panelde neler var?

| Koleksiyon | Ne işe yarar |
|-----------|--------------|
| **Sayfalar** | Tüm sabit sayfaların metinleri (Ana Sayfa, Tarih, Dut, Mimari, Arşiv, Hafıza, İletişim, Basın, Footer). Her metin **TR/EN/AR yan yana**. |
| **Duyurular** | Köye dair tarihli yazılar/duyurular (blog). Markdown + kapak görseli. |
| **Özel Sayfalar** | Panelden **sıfırdan yeni sayfa** oluştur; istersen menüye ekle. |
| **Fotoğraf Galerisi** | Arşiv/Mimari/Dut sayfalarındaki fotoğraflar (3 dilde başlık + kaynak). |
| **Basın / Haberler** | Basın sayfasındaki haber kartları. |

Her değişiklikte sağ üstten **Save → Publish**. ~1-2 dakikada sitede görünür.

---

## 3. Sık yapılacaklar

**Yeni duyuru eklemek:** Duyurular → New → tarih, başlık/özet/içerik (3 dil), (ops.) kapak → Publish.

**Fotoğraf eklemek:** Fotoğraf Galerisi → New → galeri seç, görseli yükle, kaynak künyesi, 3 dilde başlık → Publish.

**Yeni sayfa eklemek:** Özel Sayfalar → New → **URL adı** (örn. `tarihce`, küçük harf-tire), "Üst menüde göster", menü/başlık/içerik (3 dil, markdown) → Publish. Adres: `ulukalekoyu.com/tarihce/`.

**Sayfa metni düzenlemek:** Sayfalar → ilgili sayfa → metni 3 dilde düzenle → Publish.

**Görsel eklemek (markdown içine):** İçerik alanında görseli yükle ya da `![açıklama](/images/dosya.jpg)` yaz. Dosyalar `public/images/` altına gider.

---

## 4. Özel sayfalardaki görseller (ör. Şehitler sayfası)

Şehitler anma sayfasındaki anıt görseli `public/images/sehitlik-aniti.jpg`
dosyasıdır. Değiştirmek için bu dosyanın üzerine yeni görseli aynı adla kaydet
(panelden Özel Sayfalar → ilgili sayfa → içerikteki görseli de değiştirebilirsin).

---

## 5. Feribot saatleri (otomatik)

`/ulasim/` sayfasındaki feribot tablosu **otomatik**tir; ayrı bir Cloudflare
Worker (`feribot-api.ubeyd.workers.dev`) her gece **Çemişgezek ve Pertek
belediyelerinin** sayfalarından saatleri çeker. Elle bir şey yapman gerekmez.
- Kod: `feribot-worker/` (kurulum: `feribot-worker/README.md`).
- Saatler yanlışsa kaynak belediyenin sayfası değişmiş olabilir; söyle, parser'ı güncelleyeyim.

---

## 6. Formlar

`/hafiza/` ve `/iletisim/` formları **Web3Forms** ile çalışır; gönderiler doğrudan
**mubeyd@gmail.com**'a mail gelir, sonra `/tesekkurler/` sayfasına yönlenir.

---

## 7. Geliştirici notları

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # -> dist/
npm run preview
```

- Panel içeriği: `src/content/{pages,blog,custom,gallery,press}/*.json`.
- Panel yapılandırması: `public/admin/config.yml`.
- Yönlendirme/başlık: `public/_redirects`, `public/_headers`. Sitemap: `src/pages/sitemap.xml.ts`.
- `main`'e push → Cloudflare otomatik build. Acil elle deploy: kökte
  `CLOUDFLARE_API_TOKEN=... npx wrangler deploy`.

> **Not (macOS/iCloud):** Masaüstü iCloud'a senkronluysa bazen `Dosya 2.ext`
> kopyaları oluşur; bunlar derlemeyi kirletebilir. Görürsen sil:
> `find . -name '* 2*' -not -path './node_modules/*' -delete`
