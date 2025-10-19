import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const [a, b, c, x] = input.trim().split('\n').map((x) => Number(x));

let count = 0;

for (let ia = 0; ia <= a; ia++) {
  for (let ib = 0; ib <= b; ib++) {
    const r = x - 500 * ia - 100 * ib;

    if (r >= 0 && r % 50 === 0 && r / 50 <= c) {
      count++;
    }
  }
}

console.log(count);
