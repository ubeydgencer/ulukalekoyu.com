# Ulukale Köyü Dijital Arşivi — Yönetim Kılavuzu

Bu site artık **Astro** ile derleniyor ve içeriğinin bir kısmı **Sveltia CMS** adlı
yönetim paneli üzerinden, kod yazmadan güncellenebiliyor. Panel git tabanlıdır:
panelde yaptığınız her değişiklik doğrudan GitHub deposuna kaydedilir, Netlify de
otomatik olarak yeni sürümü yayına alır.

---

## 1. Panele giriş

Adres: **https://ulukalekoyu.com/admin**

İlk açılışta GitHub ile giriş yapmanız istenir. Giriş, deponuza
(`ubeydgencer/ulukalekoyu.com`) yazma yetkisi olan GitHub hesabıyla yapılır.

> **Önemli — tek seferlik kurulum (aşağıdaki "Bölüm 5"):** Panel ilk kez
> kullanılmadan önce GitHub girişini etkinleştiren bir ayar yapılmalıdır.
> Bunu bir kez yapınca bir daha gerekmez.

---

## 2. Fotoğraf eklemek / düzenlemek

1. Panelde sol menüden **"Fotoğraf Galerisi"**ni açın.
2. Sağ üstten **"New Fotoğraf"** (Yeni Fotoğraf) deyin.
3. Alanları doldurun:
   - **Hangi galeri?** — Fotoğraf hangi sayfada görünsün:
     - *Arşiv — Eski Albümler* → `/arsiv/` üst galeri
     - *Arşiv — Köyden Kareler* → `/arsiv/` alt galeri
     - *Mimari — Belgeleme* → `/mimari/` galerisi
     - *Dut — Hasattan Kareler* → `/dut/` galerisi
   - **Fotoğraf** — Bilgisayardan yükleyin ya da daha önce yüklenenlerden seçin.
   - **Kaynak künyesi** — Basından alındıysa kaynağı yazın (ör. `AA`, `NTV`).
     Kendi fotoğrafınızsa boş bırakın.
   - **Geniş göster** — Açarsanız fotoğraf iki sütun genişliğinde gösterilir
     (genelde kapanık bırakın).
   - **Başlık (TR/EN/AR)** — Her üç dilde de kısa bir başlık yazın.
   - **Alt metin (TR/EN/AR)** — Görme engelliler ve arama motorları için kısa
     açıklama (başlığa benzer olabilir).
4. Sağ üstten **"Save"** → ardından **"Publish"** deyin.

Birkaç dakika içinde fotoğraf ilgili sayfada yayında olur.

---

## 3. Haber (basın) eklemek / düzenlemek

`/basin/` sayfasındaki haber kartları buradan yönetilir.

1. Sol menüden **"Basın / Haberler"**i açın → **"New Haber"**.
2. Alanlar:
   - **Bölüm** — Haber hangi başlık altında listelensin: *Tarih*, *Dut* veya
     *Köyün Hafızası*.
   - **Tür** — *Haber yazısı* ya da *Foto-galeri* (bağlantı yazısını belirler).
   - **Haberin bağlantısı (URL)** — Haberin tam adresi.
   - **Kaynak adı / Tarih / Başlık / Özet** — Her biri 3 dilde (TR/EN/AR).
3. **Save → Publish.**

---

## 4. Değişiklik nasıl yayına çıkar?

- Panelde **Publish** dediğinizde değişiklik GitHub'a kaydedilir.
- Netlify bunu görür ve siteyi **otomatik** yeniden derleyip yayına alır
  (genellikle 1–2 dakika).
- **Dikkat:** Her yayın bir Netlify "build" kredisi harcar (ayda 300 hak var).
  Mümkünse birkaç değişikliği biriktirip art arda yapın; tek tek, uzun aralıklarla
  yayınlamak yerine bir oturumda topluca yayınlamak daha verimlidir.

---

## 5. TEK SEFERLİK KURULUM — GitHub girişini etkinleştirme

Panelin GitHub'a giriş yapabilmesi için bir kez şu ayarı yapmanız gerekir.
Site Netlify'da barındırıldığı için en kolay yol Netlify'ın OAuth sağlayıcısını
kullanmaktır:

**a) GitHub'da bir OAuth uygulaması oluşturun**
1. GitHub → **Settings → Developer settings → OAuth Apps → New OAuth App**.
2. Doldurun:
   - **Application name:** `Ulukale Arşivi CMS`
   - **Homepage URL:** `https://ulukalekoyu.com`
   - **Authorization callback URL:** `https://api.netlify.com/auth/done`
3. Kaydedin; size bir **Client ID** ve **Client Secret** verir.

**b) Netlify'a tanıtın**
1. Netlify → siteniz → **Site configuration → Access & security → OAuth**
   (eski arayüzde: *Access control → OAuth*).
2. **Install provider → GitHub** seçin, yukarıdaki **Client ID** ve **Secret**'i
   girin, kaydedin.

Artık `https://ulukalekoyu.com/admin` adresinde **"Login with GitHub"** çalışır.

> Alternatif: GitHub OAuth'u Cloudflare Workers ile barındıran `sveltia-cms-auth`
> yöntemi de kullanılabilir; ama yukarıdaki Netlify yolu en pratiğidir.

---

## 6. Panelden düzenlenenler ve düzenlenmeyenler

**Panelden (kod yazmadan) yönetilir:**
- `/arsiv/`, `/mimari/`, `/dut/` sayfalarındaki **fotoğraflar**
- `/basin/` sayfasındaki **haberler**

**Şimdilik kod tarafında (benden/geliştiriciden isteyin):**
- Sayfa metinleri (ana sayfa, tarih, dut anlatısı, mimari kart açıklamaları vb.)
- Tasarım, menü, diller ve sayfa yapısı

Sayfa metinlerinden herhangi birini de panele taşımak isterseniz söylemeniz yeterli;
o içerikleri de düzenlenebilir koleksiyonlara dönüştürebiliriz.

---

## 7. Formlar (Hafıza & İletişim)

`/hafiza/` ve `/iletisim/` formları **Netlify Forms** ile çalışır. Gelen
gönderiler Netlify panelinde **Forms** bölümünde görünür; e-posta bildirimi
**mubeyd@gmail.com** adresine gider. (Form gönderileri otomatik yayınlanmaz;
arşive eklemek isterseniz uygun olanları panele siz girersiniz.)

---

## 8. Geliştirici notları

```bash
npm install        # bağımlılıkları kur
npm run dev        # yerel geliştirme (http://localhost:4321)
npm run build      # dist/ klasörüne üretim derlemesi
npm run preview    # üretim derlemesini yerelde önizle
```

- İçerik verisi: `src/content/press/*.json`, `src/content/gallery/*.json`
  (panel bunları düzenler), sayfa metinleri: `src/data/*.ts`.
- Panel yapılandırması: `public/admin/config.yml`.
- Yönlendirmeler: `public/_redirects`, başlık/yapı: `netlify.toml`.
- Site haritası üretimi: `node scripts/gen-sitemap.mjs`.
