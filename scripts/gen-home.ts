import { writeFileSync } from 'node:fs';
import { HOME } from '../src/data/home.ts';
writeFileSync('src/content/pages/home.json', JSON.stringify(HOME, null, 2) + '\n');
console.log('home.json yazıldı');
