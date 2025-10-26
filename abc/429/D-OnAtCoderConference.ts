import { readFileSync } from 'fs';

function main(input: string): void {
  const lines = input.trim().split('\n');
  const [N, M, C] = lines[0].split(' ').map(Number);
  const A = lines[1].split(' ').map(Number);

  const countByPosition = new Map<number, number>();
  for (let i = 0; i < N; i++) {
    countByPosition.set(A[i], (countByPosition.get(A[i]) ?? 0) + 1);
  }

  const positions = Array.from(countByPosition.keys()).sort((a, b) => a - b);
  const posLen = positions.length;
  let answer = 0n;

  let count = 0;
  let j = 0;

  for (let i = 0; i < posLen; i++) {
    while (count < C) {
      count += countByPosition.get(positions[j % posLen])!;
      j++;
    }

    let interval: number;
    if (i === 0) {
      interval = M + positions[0] - positions[posLen - 1];
    } else {
      interval = positions[i] - positions[i - 1];
    }

    answer += BigInt(count) * BigInt(interval);
    count -= countByPosition.get(positions[i])!;
  }

  console.log(answer.toString());
}

main(readFileSync('/dev/stdin', 'utf8'));
