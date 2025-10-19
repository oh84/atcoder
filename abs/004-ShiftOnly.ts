import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');
const n = Number(lines[0]);
const a = lines[1].split(' ').map((x) => Number(x));

let minCount = Infinity;

for (let i = 0; i < n; i++) {
  let q = a[i];
  let count = 0;

  while (q % 2 === 0) {
    q = Math.floor(q / 2);
    count++;

    if (count > minCount) {
      break;
    }
  }

  if (count < minCount) {
    minCount = count;
  }

  // console.log({ i, a: a[i], count, minCount });
}

console.log(minCount);
