// Feribot saatleri — Cloudflare Worker (Çemişgezek + Pertek hatları)
// - scheduled(): her gece iki belediye sayfasını tarar, FERIBOT_KV'ye JSON yazar
// - fetch():     KV'deki veriyi CORS'lu JSON döner (KV boşsa anında tarar)

const SOURCES = {
  cemisgezek: {
    url: 'https://www.cemisgezek.bel.tr/sayfa/cemisgezek-feribot-saatleri/',
    side1: 'Çemişgezek', side2: 'Elazığ', cols: 2, hasOperator: false,
  },
  pertek: {
    url: 'https://www.pertek.bel.tr/30042021-tarihinden-itibaren-feribot-saatleri-degisecektir/36/',
    side1: 'Pertek', side2: 'Elazığ', cols: 3, hasOperator: true,
  },
};
const KV_KEY = 'saatler';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Cache-Control': 'public, max-age=600',
};

const isTime = (s) => /^\d{1,2}[.:]\d{2}$/.test((s || '').trim()); // 05.30 veya 05:30
const norm = (s) => s.trim().replace('.', ':');
const decode = (s) =>
  s.replace(/&Ouml;/g, 'Ö').replace(/&ouml;/g, 'ö').replace(/&Uuml;/g, 'Ü').replace(/&uuml;/g, 'ü')
    .replace(/&Ccedil;/g, 'Ç').replace(/&ccedil;/g, 'ç').replace(/&Iuml;/g, 'İ').replace(/&Şamp;/g, 'Ş')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();

// Bir sayfadaki tüm tablo satırlarını [hücre,...] dizileri olarak döndürür
async function scrapeTable(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'UlukaleKoyuBot/1.0 (+https://ulukalekoyu.com)' },
    cf: { cacheTtl: 300 },
  });
  if (!res.ok) throw new Error(`${res.status}`);
  const rows = [];
  let curRow = null;
  let cellBuf = null;
  const rewriter = new HTMLRewriter()
    .on('tr', {
      element(el) {
        const row = [];
        curRow = row;
        el.onEndTag(() => { rows.push(row); curRow = null; });
      },
    })
    .on('td', {
      element(el) {
        if (!curRow) return;
        cellBuf = '';
        const row = curRow;
        el.onEndTag(() => { row.push(decode(cellBuf || '')); cellBuf = null; });
      },
      text(t) { if (cellBuf !== null) cellBuf += t.text; },
    });
  await rewriter.transform(res).arrayBuffer();
  return rows;
}

// Bir kaynağı route nesnesine dönüştürür (hata olursa null)
async function buildRoute(id) {
  const src = SOURCES[id];
  try {
    const tableRows = await scrapeTable(src.url);
    const rows = [];
    for (const r of tableRows) {
      if (src.cols === 3 && r.length === 3 && (isTime(r[0]) || isTime(r[2]))) {
        rows.push({ from: isTime(r[0]) ? norm(r[0]) : '', operator: r[1], to: isTime(r[2]) ? norm(r[2]) : '' });
      } else if (src.cols === 2 && r.length === 2 && (isTime(r[0]) || isTime(r[1]))) {
        rows.push({ from: isTime(r[0]) ? norm(r[0]) : '', operator: '', to: isTime(r[1]) ? norm(r[1]) : '' });
      }
    }
    if (!rows.length) return null;
    return {
      id, side1: src.side1, side2: src.side2, source: src.url, hasOperator: src.hasOperator,
      rows,
      side1Times: rows.map((r) => r.from).filter(Boolean),
      side2Times: rows.map((r) => r.to).filter(Boolean),
    };
  } catch (e) {
    return null;
  }
}

async function scrape() {
  const ids = Object.keys(SOURCES); // cemisgezek önce
  const routes = (await Promise.all(ids.map(buildRoute))).filter(Boolean);
  if (!routes.length) throw new Error('Hiçbir kaynaktan feribot saati çekilemedi (yapı değişmiş olabilir)');
  return {
    updatedAt: new Date().toISOString(),
    note: 'Saatler ilgili belediyelerin duyurularından otomatik derlenir; doğruluğu garanti edilmez. Seyahatten önce teyit ediniz.',
    routes,
  };
}

async function refresh(env) {
  const data = await scrape();
  await env.FERIBOT_KV.put(KV_KEY, JSON.stringify(data));
  return data;
}

export default {
  async scheduled(event, env, ctx) {
    ctx.waitUntil(refresh(env));
  },

  async fetch(request, env) {
    if (request.method === 'OPTIONS') return new Response(null, { headers: CORS });
    if (request.method !== 'GET') return new Response('Method Not Allowed', { status: 405, headers: CORS });
    const url = new URL(request.url);
    try {
      let raw = await env.FERIBOT_KV.get(KV_KEY);
      // KV boşsa veya ?refresh=1 ise yeniden tara
      if (!raw || url.searchParams.has('refresh')) {
        raw = JSON.stringify(await refresh(env));
      }
      return new Response(raw, { headers: { ...CORS, 'Content-Type': 'application/json; charset=utf-8' } });
    } catch (err) {
      return new Response(JSON.stringify({ error: String((err && err.message) || err) }), {
        status: 502, headers: { ...CORS, 'Content-Type': 'application/json; charset=utf-8' },
      });
    }
  },
};
