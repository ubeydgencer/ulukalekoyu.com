// Pertek–Elazığ feribot saatleri — Cloudflare Worker
// - scheduled(): her gece kaynağı tarar, FERIBOT_KV'ye JSON yazar
// - fetch():     KV'deki veriyi CORS'lu JSON olarak döner (gerekirse anında tarar)

const SOURCE_URL =
  'https://www.pertek.bel.tr/30042021-tarihinden-itibaren-feribot-saatleri-degisecektir/36/';
const KV_KEY = 'saatler';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Cache-Control': 'public, max-age=600',
};

const isTime = (s) => /^\d{1,2}:\d{2}$/.test(s.trim());

// Kaynaktaki 3 sütunlu tabloyu HTMLRewriter ile akışta ayrıştırır
async function scrape() {
  const res = await fetch(SOURCE_URL, {
    headers: { 'User-Agent': 'UlukaleKoyuBot/1.0 (+https://ulukalekoyu.com)' },
    cf: { cacheTtl: 300 },
  });
  if (!res.ok) throw new Error(`Kaynak yanıtı: ${res.status}`);

  const cells = [];
  let buf = '';
  const rewriter = new HTMLRewriter().on('td', {
    element(el) {
      buf = '';
      el.onEndTag(() => cells.push(buf.replace(/\s+/g, ' ').trim()));
    },
    text(t) {
      buf += t.text;
    },
  });
  // İçeriği tüketerek handler'ları çalıştır
  await rewriter.transform(res).arrayBuffer();

  // Hücreleri 3'erli grupla: [pertek, isletme, elazig]
  const rows = [];
  for (let i = 0; i + 2 < cells.length; i += 3) {
    const pertek = cells[i];
    const operator = cells[i + 1];
    const elazig = cells[i + 2];
    if (isTime(pertek) || isTime(elazig)) {
      rows.push({ pertek: isTime(pertek) ? pertek : '', operator, elazig: isTime(elazig) ? elazig : '' });
    }
  }

  const pertek = rows.map((r) => r.pertek).filter(Boolean);
  const elazig = rows.map((r) => r.elazig).filter(Boolean);

  if (pertek.length === 0 && elazig.length === 0) {
    throw new Error('Tabloda saat bulunamadı (kaynak yapısı değişmiş olabilir)');
  }

  return {
    updatedAt: new Date().toISOString(),
    source: SOURCE_URL,
    route: 'Pertek ↔ Elazığ',
    note: 'Saatler Pertek Belediyesi duyurusundan otomatik derlenir; doğruluğu garanti edilmez.',
    pertek,
    elazig,
    rows,
  };
}

async function refresh(env) {
  const data = await scrape();
  await env.FERIBOT_KV.put(KV_KEY, JSON.stringify(data));
  return data;
}

export default {
  // Cron tetikleyici (wrangler.toml -> [triggers].crons)
  async scheduled(event, env, ctx) {
    ctx.waitUntil(refresh(env));
  },

  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS });
    }
    if (request.method !== 'GET') {
      return new Response('Method Not Allowed', { status: 405, headers: CORS });
    }

    try {
      let raw = await env.FERIBOT_KV.get(KV_KEY);
      // KV boşsa (ör. ilk çalışma) anında bir kez tara
      if (!raw) {
        const data = await refresh(env);
        raw = JSON.stringify(data);
      }
      return new Response(raw, {
        headers: { ...CORS, 'Content-Type': 'application/json; charset=utf-8' },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: String(err && err.message || err) }), {
        status: 502,
        headers: { ...CORS, 'Content-Type': 'application/json; charset=utf-8' },
      });
    }
  },
};
