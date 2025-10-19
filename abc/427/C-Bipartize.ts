import { readFileSync } from 'fs';

main(readFileSync('/dev/stdin', 'utf8'));

function main(input: string): void {
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number);

  const edges = [];

  for (let i = 1; i <= m; i++) {
    const [u, v] = lines[i].split(' ').map(Number);
    edges.push([u, v]);
  }

  let minCount = m;

  for (let bit = 0; bit < (1 << n); bit++) {
    let count = 0;

    for (const [u, v] of edges) {
      const colorU = 1 & (bit >> u);
      const colorV = 1 & (bit >> v);
      if (colorU === colorV) {
        count++;
      }
    }

    minCount = Math.min(minCount, count);
  }

  console.log(minCount);
}
