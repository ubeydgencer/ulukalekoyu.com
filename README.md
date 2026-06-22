# Ulukale Köyü — Dijital Arşiv

Tunceli (Dersim) Çemişgezek ilçesine bağlı **Ulukale köyünün** tarihini, mimarisini
ve hafızasını koruyan statik web sitesi. `ulukalekoyu.com` için hazırlanmıştır.

## Sayfalar
| Dosya | İçerik |
|-------|--------|
| `index.html` | Ana sayfa — hero, köy özeti, bölümlere giriş |
| `tarih.html` | Demir Çağı'ndan bugüne zaman çizelgesi |
| `mimari.html` | Cami, türbe, çeşme, hamam, kilise, değirmen, kaya mezarı |
| `arsiv.html` | Fotoğraf arşivi (eski kareler + köyün mevsimleri) |
| `hafiza.html` | Sözlü tarih + hatıra paylaşım formu |
| `iletisim.html` | İletişim ve katkı formu |
| `css/style.css` | Tüm tasarım (toprak/kerpiç tonları, serif tipografi) |

## Teknoloji
- **Bağımlılık yok.** Saf HTML + CSS. Build adımı gerektirmez.
- Fontlar: Google Fonts (Fraunces + Lora).
- Formlar: **Netlify Forms** ile çalışır (`data-netlify="true"`). Gönderimler
  Netlify panelindeki **Forms** sekmesinde toplanır; e-posta bildirimi için
  panelden Form notifications eklenebilir. Form sonrası `/tesekkurler` sayfasına yönlenir.

## Yerelde çalıştırma
Çift tıklayıp tarayıcıda açabilirsiniz. Ya da basit bir sunucu ile:
```bash
cd ulukalekoyu.com
python3 -m http.server 8000   # http://localhost:8000
```
> Not: Netlify Forms yalnızca Netlify'da yayındayken çalışır; yerelde form
> gönderimi test edilemez (sayfa yine de açılır).

## Yayına alma — Netlify (GitHub bağlı)
Bu proje GitHub'a bağlıdır; `main` dalına her push otomatik deploy tetikler.
```bash
git add -A && git commit -m "değişiklik" && git push
```
İlk kurulum: Netlify panelinde **Add new site → Import from Git → GitHub** ile
`ulukalekoyu.com` reposu seçilir. Build command boş, publish directory `.`.
Sonra **Domain settings**'ten `ulukalekoyu.com` özel alan adı bağlanır.

## Yapılacaklar / içerik eklenecek yerler
- [ ] Gerçek fotoğraflar (`arsiv.html` ve `mimari.html` içindeki `.frame` çerçeveleri)
- [ ] Toplanan sözlü tarih hikâyelerinin `hafiza.html`'e işlenmesi
- [ ] Yapıların güncel durum/konum kayıtları
- [ ] (İsteğe bağlı) sosyal medya / paylaşım görseli (og:image)

## Kaynaklar
- Fırat Üniv. Sosyal Bilimler Dergisi — *Çemişgezek-Ulukale Köyü'nün Tarihsel Yerleşim Dokusu*
- Anadolu Ajansı — *Tunceli'nin Ulukale köyü ziyaretçilerini tarihi yolculuğa çıkarıyor*
- Wikipedia — *Ulukale, Çemişgezek*
