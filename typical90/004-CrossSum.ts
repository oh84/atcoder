import { readFileSync } from 'fs';

main(readFileSync('/dev/stdin', 'utf8'));

function main(input: string): void {
  const [hw, ...ayx] = input.trim().split('\n');
  const [h, w] = hw.split(' ').map(Number);
  const a = ayx.map((ay) => ay.split(' ').map(Number));

  // const sum = Array(h).fill(Array(w).fill(0));
  // ↑ の書き方だとすべての行が同じ配列を参照してしまう（今回の問題ではたまたま影響はないが）。
  // ↓ のように書くべき。
  const sum = Array.from({ length: h }, () => Array(w).fill(0));
  const sumX = Array(h).fill(0);
  const sumY = Array(w).fill(0);

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      sumX[y] += a[y][x];
      sumY[x] += a[y][x];
    }
  }

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      sum[y][x] = sumX[y] + sumY[x] - a[y][x];
    }
    console.log(sum[y].join(' '));
  }
}
