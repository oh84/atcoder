import { readFileSync } from 'fs';

function main(input: string): void {
  const lines = input.trim().split('\n');
  const [N, M] = lines[0].split(' ').map(Number);
  const A = lines[1].split(' ').map(Number);

  const sum = A.reduce((acc, a) => acc + a, 0);

  for (let i = 0; i < N; i++) {
    if (sum - A[i] === M) {
      console.log('Yes');
      return;
    }
  }
  console.log('No');
}

main(readFileSync('/dev/stdin', 'utf8'));
