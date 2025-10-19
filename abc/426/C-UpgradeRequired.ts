import { readFileSync } from 'fs';

main(readFileSync('/dev/stdin', 'utf8'));

function main(input: string): void {
  const lines = input.trim().split('\n');
  const [n, q] = lines[0].split(' ').map(Number);

  const pcs = {};

  for (let i = 1; i <= n; i++) {
    pcs[i] = 1;
  }

  let minVer = 1;

  for (let i = 1; i <= q; i++) {
    const [x, y] = lines[i].split(' ').map(Number);
    let sum = 0;

    for (let j = minVer; j <= x; j++) {
      sum += pcs[j];
      pcs[j] = 0;
    }

    minVer = Math.max(Math.min(x + 1, y), minVer);
    pcs[y] += sum;
    console.log(sum);
  }
}
