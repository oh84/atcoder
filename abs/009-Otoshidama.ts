import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const [n, y] = input.trim().split(' ').map(Number);

let a = -1;
let b = -1;
let c = -1;

outer: for (let i = 0; i <= n; i++) {
  for (let j = 0; j <= n - i; j++) {
    if (10000 * i + 5000 * j + 1000 * (n - i - j) === y) {
      a = i;
      b = j;
      c = n - i - j;
      break outer;
    }
  }
}

console.log(`${a} ${b} ${c}`);
