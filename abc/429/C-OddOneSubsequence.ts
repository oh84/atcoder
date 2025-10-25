import { readFileSync } from 'fs';

function main(input: string): void {
  const lines = input.trim().split('\n');
  const N = Number(lines[0]);
  const A = lines[1].split(' ').map(Number);

  const counts: { [key: number]: number } = {};

  for (let i = 0; i < N; i++) {
    if (!counts[A[i]]) {
      counts[A[i]] = 0;
    }
    counts[A[i]]++;
  }

  let answer = 0;
  for (const count of Object.values(counts).filter((count) => count >= 2)) {
    answer += count * (count - 1) / 2 * (N - count);
  }
  console.log(answer);
}

main(readFileSync('/dev/stdin', 'utf8'));
