import { readFileSync } from 'fs';

main(readFileSync('/dev/stdin', 'utf8'));

function main(input: string): void {
  const [line0, line1, line2, ...others] = input.trim().split('\n');
  const n = Number(line0);
  const a = line1.split(' ').map(Number);
  const q = Number(line2);
  const b = others.map(Number);

  a.sort((v1, v2) => v1 - v2);

  for (let j = 0; j < q; j++) {
    let left = 0;
    let right = n;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (a[mid] < b[j]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    let minValue = Infinity;

    if (left > 0) {
      minValue = Math.min(minValue, b[j] - a[left - 1]);
    }

    if (left < n) {
      minValue = Math.min(minValue, a[left] - b[j]);
    }

    console.log(minValue);
  }
}
