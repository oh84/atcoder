import { readFileSync } from 'fs';

function main(input: string): void {
  const lines = input.trim().split('\n');
  const [N, A, B] = lines[0].split(' ').map(Number);
  const S = lines[1];

  let answer = 0;
  let rA = 0;
  let rB = 0;
  let countA = 0;
  let countB = 0;

  for (let l = 0; l < N; l++) {
    while (rA < N && countA < A) {
      if (S[rA] === 'a') countA++;
      rA++;
    }
    if (rA === N && countA < A) {
      rA++;
    }

    while (rB < N && countB < B) {
      if (S[rB] === 'b') countB++;
      rB++;
    }
    if (rB === N && countB < B) {
      rB++;
    }

    if (rB >= rA) {
      answer += rB - rA;
    }

    if (S[l] === 'a') countA--;
    if (S[l] === 'b') countB--;
  }

  console.log(answer);
}

main(readFileSync('/dev/stdin', 'utf8'));
