import { readFileSync } from 'fs';

function main(input: string): void {
  const lines = input.trim().split('\n');
  const n = Number(lines[0]);
  const [a, b, c] = lines[1].split(' ').map(Number).sort((v1, v2) => v2 - v1);

  let minCount = Infinity;

  for (let i = Math.floor(n / a); i >= 0; i--) {
    const rest1 = n - a * i;
    for (let j = Math.floor(rest1 / b); j >= 0; j--) {
      const rest2 = rest1 - b * j;
      if (rest2 % c === 0) {
        const count = i + j + rest2 / c;
        if (minCount > count) {
          minCount = count;
        }
      }
    }
  }

  console.log(minCount);
}

main(readFileSync('/dev/stdin', 'utf8'));
