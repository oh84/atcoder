import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const [line0, line1, ...strQueries] = input.trim().split('\n');
const [n, q] = line0.split(' ').map(Number);
const a = line1.split(' ').map(Number);
const queries = strQueries.map((strQuery) => strQuery.split(' ').map(Number));

const b = [...a, ...a];
for (let i = b.length - 1; i > 0; i--) {
  b[i - 1] += b[i];
}

let offset = 0;
for (const query of queries) {
  if (query[0] === 1) {
    const c = query[1];
    offset = (offset + c) % n;
  } else {
    const l = query[1] - 1;
    const r = query[2];
    console.log(b[l + offset] - b[r + offset]);
  }
}
