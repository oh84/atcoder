import { readFileSync } from 'fs';

function main(input: string): void {
  const [N, K] = input.trim().split(' ').map(Number);

  const counts = Array(N + 1).fill(0);

  for (let i = 2; i <= N; i++) {
    if (counts[i] !== 0) {
      continue;
    }
    for (let j = i; j <= N; j += i) {
      counts[j]++;
    }
  }

  const answer = counts.filter((count) => count >= K).length;
  console.log(answer);
}

main(readFileSync('/dev/stdin', 'utf8'));
