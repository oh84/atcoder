import { readFileSync } from 'fs';

main(readFileSync('/dev/stdin', 'utf8'));

function main(input: string): void {
  const lines = input.trim().split('\n');
  const n = Number(lines[0]);
  const s = lines[1];

  const t = 'atcoder';
  const m = t.length;
  const MOD = 1_000_000_007;

  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j > 0 && s[i - 1] === t[j - 1]) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j - 1]) % MOD;
      }
    }
  }

  console.log(dp[n][m]);
}
