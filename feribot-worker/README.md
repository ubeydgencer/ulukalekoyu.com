# Feribot Saatleri Worker (Çemişgezek + Pertek → Elazığ)

Çemişgezek ve Pertek belediyelerinin duyuru sayfalarındaki feribot saatlerini her
gece otomatik tarayıp **tek bir JSON API** olarak sunan bağımsız bir Cloudflare
Worker. Ana siteden ayrıdır; kendi başına deploy edilir.

Canlı adres: `https://feribot-api.ubeyd.workers.dev`
Sitede kullanan bileşen: `src/components/FeribotBody.astro` (`/ulasim/` sayfası).

## Mimari
- **scheduled()** — Cron ile her gece 03:00'te (TR) her iki kaynağı tarar, `FERIBOT_KV`'ye yazar.
- **fetch()** — Frontend istek attığında KV'deki veriyi (yeniden tarama yapmadan)
  hızlıca, CORS başlıklarıyla JSON döner. KV boşsa ilk istekte bir kez tarar.
- **Kaynaklar** (`src/index.js` → `SOURCES`):
  - `cemisgezek` — https://www.cemisgezek.bel.tr/ (2 sütun: Çemişgezek / Elazığ)
  - `pertek` — https://www.pertek.bel.tr/ (3 sütun: Pertek / işletme / Elazığ)
- Bir kaynak çekilemezse (HTML yapısı değişmişse) o hat atlanır; diğeri yine döner.
  Hiçbiri çekilemezse Worker hata döndürür, site son KV verisini göstermeye devam eder.

## Kurulum (tek seferlik)

```bash
cd feribot-worker

# 1) KV alanı oluştur — çıktıdaki id'yi kopyala
npx wrangler kv namespace create FERIBOT_KV
#   -> { binding = "FERIBOT_KV", id = "abc123..." }

# 2) wrangler.toml içindeki [[kv_namespaces]] id'sini o değerle güncelle

# 3) Deploy et
npx wrangler deploy

# 4) (İsteğe bağlı) ilk veriyi hemen doldurmak için API'ye bir kez istek at
#    (KV boşsa kendi tarar):
#    curl https://feribot-api.<hesabın>.workers.dev
```

Deploy sonrası adres: `https://feribot-api.<hesabın>.workers.dev`

> **Cron saati:** `crons = ["0 0 * * *"]` = 00:00 UTC = **03:00 Türkiye**. Cloudflare cron'ları UTC'dir.

## API yanıtı

Her hat `routes` dizisinde bir nesnedir:

```json
{
  "updatedAt": "2026-08-01T00:00:00.000Z",
  "note": "Saatler ilgili belediyelerin duyurularından otomatik derlenir; doğruluğu garanti edilmez. Seyahatten önce teyit ediniz.",
  "routes": [
    {
      "id": "cemisgezek",
      "side1": "Çemişgezek",
      "side2": "Elazığ",
      "source": "https://www.cemisgezek.bel.tr/...",
      "hasOperator": false,
      "rows": [{ "from": "07:00", "operator": "", "to": "07:30" }],
      "side1Times": ["07:00", "..."],
      "side2Times": ["07:30", "..."]
    },
    {
      "id": "pertek",
      "side1": "Pertek",
      "side2": "Elazığ",
      "source": "https://www.pertek.bel.tr/...",
      "hasOperator": true,
      "rows": [{ "from": "05:30", "operator": "Belediye", "to": "06:00" }],
      "side1Times": ["05:30", "..."],
      "side2Times": ["06:00", "..."]
    }
  ]
}
```

- `rows[].from` = `side1` kalkışı, `rows[].to` = `side2` kalkışı, `operator` yalnızca `hasOperator: true` hatlarda dolu.
- `side1Times` / `side2Times` = "sıradaki kalkış" hesabı için düz saat listeleri.

## Frontend entegrasyonu (özet)

Site içinde bunu `FeribotBody.astro` yapar (her hat için ayrı tablo + "sıradaki
kalkış"). Ham kullanım:

```js
const WORKER_URL = "https://feribot-api.<hesabın>.workers.dev";
const data = await (await fetch(WORKER_URL)).json();
for (const route of data.routes) {
  console.log(`${route.side1} → ${route.side2}`);
  for (const r of route.rows) console.log(r.from, r.operator, r.to);
}
```

## Notlar / riskler
- Kaynaklar belediye duyuru sayfalarıdır; saatler nadiren değişir. Bir sayfanın HTML
  yapısı değişirse yalnızca o hattın parser'ı güncellenmelidir (diğer hat çalışmaya
  devam eder).
- İstersen tamamen statik (panelde elle güncellenen) bir tabloya da çevrilebilir;
  bu Worker, "otomatik güncel kalsın" senaryosu içindir.
