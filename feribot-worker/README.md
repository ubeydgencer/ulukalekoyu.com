# Feribot Saatleri Worker (Pertek ↔ Elazığ)

Pertek Belediyesi'nin duyuru sayfasındaki feribot saatlerini her gece otomatik
tarayıp **JSON API** olarak sunan bağımsız bir Cloudflare Worker. Ana siteden
ayrıdır; kendi başına deploy edilir.

## Mimari
- **scheduled()** — Cron ile her gece 03:00'te (TR) kaynağı tarar, `FERIBOT_KV`'ye yazar.
- **fetch()** — Frontend istek attığında KV'deki veriyi (yeniden tarama yapmadan)
  hızlıca, CORS başlıklarıyla JSON döner. KV boşsa ilk istekte bir kez tarar.

## Kurulum (tek seferlik)

```bash
cd feribot-worker

# 1) KV alanı oluştur — çıktıdaki id'yi kopyala
npx wrangler kv namespace create FERIBOT_KV
#   -> { binding = "FERIBOT_KV", id = "abc123..." }

# 2) wrangler.toml içindeki BURAYA_KV_NAMESPACE_ID yerine o id'yi yapıştır

# 3) Deploy et
npx wrangler deploy

# 4) (İsteğe bağlı) ilk veriyi hemen doldurmak için cron'u elle tetikle
#    veya API'ye bir kez istek at (KV boşsa kendi tarar):
#    curl https://feribot-api.<hesabın>.workers.dev
```

Deploy sonrası adres: `https://feribot-api.<hesabın>.workers.dev`

> **Cron saati:** `crons = ["0 0 * * *"]` = 00:00 UTC = **03:00 Türkiye**. Cloudflare cron'ları UTC'dir.

## API yanıtı

```json
{
  "updatedAt": "2026-06-24T00:00:00.000Z",
  "source": "https://www.pertek.bel.tr/...",
  "route": "Pertek ↔ Elazığ",
  "note": "Saatler ... otomatik derlenir; doğruluğu garanti edilmez.",
  "pertek": ["05:30", "06:00", "..."],
  "elazig": ["06:00", "06:30", "..."],
  "rows": [{ "pertek": "05:30", "operator": "Belediye", "elazig": "06:00" }]
}
```

## Frontend entegrasyonu (site önyüzü)

```html
<div id="feribot"></div>
<script>
const WORKER_URL = "https://feribot-api.<hesabın>.workers.dev"; // <-- kendi adresin
(async () => {
  const el = document.getElementById("feribot");
  try {
    const data = await (await fetch(WORKER_URL)).json();
    const now = new Date();
    const cur = now.getHours() * 60 + now.getMinutes();
    const toMin = (t) => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };
    const next = (list) => list.find((t) => toMin(t) >= cur) || list[0];

    el.innerHTML = `
      <p class="feribot-next">
        <strong>Sıradaki kalkış</strong> — Pertek: <b>${next(data.pertek)}</b> ·
        Elazığ: <b>${next(data.elazig)}</b>
      </p>
      <table class="feribot-tablo">
        <thead><tr><th>Pertek'ten</th><th>İşletme</th><th>Elazığ'dan</th></tr></thead>
        <tbody>${data.rows.map((r) => `
          <tr><td>${r.pertek || "—"}</td><td>${r.operator || ""}</td><td>${r.elazig || "—"}</td></tr>`).join("")}
        </tbody>
      </table>
      <p class="feribot-not">${data.note} Güncelleme: ${new Date(data.updatedAt).toLocaleDateString("tr-TR")}</p>`;
  } catch (e) {
    el.innerHTML = '<p>Feribot saatleri şu an yüklenemedi.</p>';
  }
})();
</script>
```

## Notlar / riskler
- Kaynak 2021 tarihli bir duyuru sayfası; saatler nadiren değişir. Sayfanın HTML
  yapısı değişirse parser güncellenmelidir (Worker `error` döndürür, site eski
  KV verisini göstermeye devam eder).
- İstersen tamamen statik (panelde elle güncellenen) bir tabloya da çevrilebilir;
  bu Worker, "otomatik güncel kalsın" senaryosu içindir.
