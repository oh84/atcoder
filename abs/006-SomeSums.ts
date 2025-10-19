import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const [n, a, b] = input.trim().split(' ').map((x) => Number(x));

let ans = 0;

for (let i = 1; i <= n; i++) {
  let sum = 0;
  let q = i;

  while (q > 0) {
    sum += q % 10;
    q = Math.floor(q / 10);
  }

  if (a <= sum && sum <= b) {
    ans += i;
  }
}

console.log(ans);
