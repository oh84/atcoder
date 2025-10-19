import { readFileSync } from 'fs';

main(readFileSync('/dev/stdin', 'utf8'));

function main(input: string): void {
  const lines = input.trim().split('\n');
  const n = Number(lines[0]);

  const jobs = [{ d: 0, c: 0, s: 0 }];
  for (let i = 1; i <= n; i++) {
    const [d, c, s] = lines[i].split(' ').map(Number);
    jobs.push({ d, c, s });
  }

  jobs.sort((j1, j2) => j1.d - j2.d);

  const maxDay = jobs.map((j) => j.d).reduce((d1, d2) => Math.max(d1, d2), -Infinity);
  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(maxDay + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const { d, c, s } = jobs[i];

    for (let j = 0; j <= maxDay; j++) {
      dp[i][j] = Math.max(dp[i][j], dp[i - 1][j]);

      const endDay = j + c;
      if (endDay <= d) {
        dp[i][endDay] = Math.max(dp[i][endDay], dp[i - 1][j] + s);
      }
    }

    for (let j = 1; j <= maxDay; j++) {
      dp[i][j] = Math.max(dp[i][j], dp[i][j - 1]);
    }
  }

  console.log(dp[n][maxDay]);
}
