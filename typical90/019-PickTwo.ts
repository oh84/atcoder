import { readFileSync } from 'fs';

function main(input: string): void {
  const lines = input.trim().split('\n');
  const N = Number(lines[0]);
  const A = [0, ...lines[1].split(' ').map(Number)];

  const dp = Array.from({ length: 2 * N + 1 }, () => Array(2 * N + 1).fill(Infinity));

  for (let i = 1; i <= 2 * N; i++) {
    if (i < 2 * N) {
      dp[i][i + 1] = Math.abs(A[i] - A[i + 1]);
    }
  }

  for (let length = 3; length <= 2 * N; length += 2) {
    for (let l = 1; l + length <= 2 * N; l++) {
      const r = l + length;

      for (let k = l; k + 1 <= r; k++) {
        dp[l][r] = Math.min(dp[l][r], dp[l][k] + dp[k + 1][r]);
      }

      dp[l][r] = Math.min(dp[l][r], dp[l + 1][r - 1] + Math.abs(A[l] - A[r]));
    }
  }

  console.log(dp[1][2 * N]);
}

main(readFileSync('/dev/stdin', 'utf8'));
