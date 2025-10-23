import { readFileSync } from 'fs';

function main(input: string): void {
  const lines = input.trim().split('\n');
  const [N, K] = lines[0].split(' ').map(Number);
  const A = lines[1].split(' ').map(Number);
  const B = lines[2].split(' ').map(Number);

  let diff = 0;

  for (let i = 0; i < N; i++) {
    diff += Math.abs(A[i] - B[i]);
  }

  console.log(diff <= K && diff % 2 === K % 2 ? 'Yes' : 'No');
}

main(readFileSync('/dev/stdin', 'utf8'));
