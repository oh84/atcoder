import { readFileSync } from 'fs';

function main(input: string): void {
  const lines = input.trim().split('\n');
  const [N, K] = lines[0].split(' ').map(Number);
  const S = lines[1];

  const counts: { [t: string]: number } = {};
  let maxCount = 0;

  for (let i = 0; i + K <= N; i++) {
    const t = S.slice(i, i + K);

    if (!counts[t]) counts[t] = 0;
    counts[t]++;

    if (maxCount < counts[t]) {
      maxCount = counts[t];
    }
  }

  let answers = [];

  for (const [t, count] of Object.entries(counts)) {
    if (count === maxCount) {
      answers.push(t);
    }
  }

  console.log(maxCount);
  console.log(answers.sort().join(' '));
}

main(readFileSync('/dev/stdin', 'utf8'));
