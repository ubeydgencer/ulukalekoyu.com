import { writeFileSync } from 'node:fs';
import { DUT } from '../src/data/dut.ts';
import { ARSIV } from '../src/data/arsiv.ts';
import { ILETISIM } from '../src/data/iletisim.ts';
import { BASIN } from '../src/data/basin.ts';
const w = (name: string, data: unknown) => {
  writeFileSync(`src/content/pages/${name}.json`, JSON.stringify(data, null, 2) + '\n');
  console.log(`${name}.json yazıldı`);
};
w('dut', DUT); w('arsiv', ARSIV); w('iletisim', ILETISIM); w('basin', BASIN);
