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

const isTime = (s) => /^\d{1,2}[.:]\d{2}$/.test(s.trim()); // 05.30 veya 05:30
const norm = (s) => s.trim().replace('.', ':'); // çıktıyı 05:30 olarak normalize et
const decode = (s) =>
  s.replace(/&Ouml;/g, 'Ö').replace(/&ouml;/g, 'ö').replace(/&Uuml;/g, 'Ü').replace(/&uuml;/g, 'ü')
    .replace(/&Ccedil;/g, 'Ç').replace(/&ccedil;/g, 'ç').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ').trim();

// Kaynaktaki 3 sütunlu tabloyu HTMLRewriter ile akışta ayrıştırır
async function scrape() {
  const res = await fetch(SOURCE_URL, {
    headers: { 'User-Agent': 'UlukaleKoyuBot/1.0 (+https://ulukalekoyu.com)' },
    cf: { cacheTtl: 300 },
  });
  if (!res.ok) throw new Error(`Kaynak yanıtı: ${res.status}`);

  // Tabloyu SATIR bazlı ayrıştır: her <tr> -> [pertek, işletme, elazığ]
  const rows = [];
  let curRow = null;
  let cellBuf = null;
  const rewriter = new HTMLRewriter()
    .on('tr', {
      element(el) {
        const row = [];
        curRow = row;
        el.onEndTag(() => {
          if (row.length === 3) {
            const p = decode(row[0]);
            const op = decode(row[1]);
            const e = decode(row[2]);
            if (isTime(p) || isTime(e)) {
              rows.push({ pertek: isTime(p) ? norm(p) : '', operator: op, elazig: isTime(e) ? norm(e) : '' });
            }
          }
          curRow = null;
        });
      },
    })
    .on('td', {
      element(el) {
        if (!curRow) return;
        cellBuf = '';
        const row = curRow;
        el.onEndTag(() => {
          row.push(cellBuf || '');
          cellBuf = null;
        });
      },
      text(t) {
        if (cellBuf !== null) cellBuf += t.text;
      },
    });
  await rewriter.transform(res).arrayBuffer();

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
