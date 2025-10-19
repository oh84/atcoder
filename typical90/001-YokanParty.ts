import { readFileSync } from 'fs';

main(readFileSync('/dev/stdin', 'utf8'));

function main(input: string): void {
  const lines = input.trim().split('\n');
  const [n, l] = lines[0].split(' ').map(Number);
  const k = Number(lines[1]);
  const a = lines[2].split(' ').map(Number);

  const positions = [0, ...a, l];

  function canCut(x: number): boolean {
    let cuts = 0;
    let prev = 0;
    for (let i = 1; i <= positions.length; i++) {
      const len = positions[i] - prev;
      if (len >= x) {
        cuts++;
        prev = positions[i]
      }
    }
    return cuts >= k + 1;
  }

  let answer = 0;
  let left = 0;
  let right = l;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (canCut(mid)) {
      left = mid + 1;
      answer = mid;
    } else {
      right = mid - 1;
    }
  }

  console.log(answer);
}
