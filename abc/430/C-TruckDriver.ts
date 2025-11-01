// TLE

import { readFileSync } from 'fs';

function main(input: string): void {
  const lines = input.trim().split('\n');
  const [N, A, B] = lines[0].split(' ').map(Number);
  const S = lines[1];

  let answer = 0;

  for (let l = 0; l < N; l++) {
    let countA = 0;
    let countB = 0;

    for (let r = l; r < N; r++) {
      if (S[r] === 'a') countA++;
      else countB++;

      if (countB >= B) break;

      if (countA >= A) answer++;
    }
  }

  console.log(answer);
}

main(readFileSync('/dev/stdin', 'utf8'));
