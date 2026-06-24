import { defineConfig } from 'astro/config';

// Ulukale Köyü — çok dilli statik site (TR kök, /en/, /ar/)
// Dizin tabanlı temiz URL'ler: /, /tarih/, /en/, /en/tarih/, /ar/tarih/
export default defineConfig({
  site: 'https://ulukalekoyu.com',
  trailingSlash: 'ignore',
});
