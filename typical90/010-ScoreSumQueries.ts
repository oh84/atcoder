import { readFileSync } from 'fs';

main(readFileSync('/dev/stdin', 'utf8'));

function main(input: string): void {
  const lines = input.trim().split('\n');
  const n = Number(lines[0]);

  const scores = [{ c: 0, p: 0 }];
  const cumSums1 = [0];
  const cumSums2 = [0];

  for (let i = 1; i <= n; i++) {
    const [c, p] = lines[i].split(' ').map(Number);
    if (c === 1) {
      cumSums1.push(cumSums1[i - 1] + p);
      cumSums2.push(cumSums2[i - 1]);
    } else if (c === 2) {
      cumSums1.push(cumSums1[i - 1]);
      cumSums2.push(cumSums2[i - 1] + p);
    }
  }

  const q = Number(lines[n + 1]);

  for (let i = 1; i <= q; i++) {
    const [l, r] = lines[n + i + 1].split(' ').map(Number);

    const sum1 = cumSums1[r] - cumSums1[l - 1];
    const sum2 = cumSums2[r] - cumSums2[l - 1];

    console.log(`${sum1} ${sum2}`);
  }
}
