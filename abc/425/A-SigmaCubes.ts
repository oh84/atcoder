import { readFileSync } from 'fs';

const input = readFileSync('/dev/stdin', 'utf8');
const n = Number(input.trim());

let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += (-1) ** i * i ** 3;
}

console.log(sum);
