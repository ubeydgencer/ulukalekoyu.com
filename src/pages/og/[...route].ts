import type { APIRoute } from 'astro';
import { generateOpenGraphImage } from 'astro-og-canvas';
import { ogPages, getCardOptions, type CardData } from '../../lib/og-cards';

// Her sayfa/dil için 1200×630 özel sosyal paylaşım kartı → /og/<lang>/<page>.png
export function getStaticPaths() {
  return Object.entries(ogPages).map(([key, card]) => ({
    params: { route: `${key}.png` },
    props: { card },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const png = await generateOpenGraphImage(getCardOptions(props.card as CardData));
  return new Response(png, { headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' } });
};
