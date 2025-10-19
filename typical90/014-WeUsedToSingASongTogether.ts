import { readFileSync } from 'fs';

function main(input: string): void {
  const lines = input.trim().split('\n');
  const n = Number(lines[0]);
  const a = lines[1].split(' ').map(Number);
  const b = lines[2].split(' ').map(Number);

  a.sort((a1, a2) => a1 - a2);
  b.sort((b1, b2) => b1 - b2);

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Math.abs(a[i] - b[i]);
  }
  console.log(sum);
}

main(readFileSync('/dev/stdin', 'utf8'));
