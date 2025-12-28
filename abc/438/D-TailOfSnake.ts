function main(input: string): void {
  const lines = input.split('\n');
  const N = Number(lines[0]);
  const A = lines[1].split(' ').map(Number);
  const B = lines[2].split(' ').map(Number);
  const C = lines[3].split(' ').map(Number);

  const dp = Array.from({ length: N + 1 }, () => Array(4).fill(-Infinity));
  dp[0][0] = 0

  for (let i = 0; i < N; i++) {
    for (let j = 0; j <= 1; j++) dp[i + 1][1] = Math.max(dp[i + 1][1], dp[i][j] + A[i]);
    for (let j = 1; j <= 2; j++) dp[i + 1][2] = Math.max(dp[i + 1][2], dp[i][j] + B[i]);
    for (let j = 2; j <= 3; j++) dp[i + 1][3] = Math.max(dp[i + 1][3], dp[i][j] + C[i]);
  }

  console.log(dp[N][3]);
}

// ----------------------------------------

if (process.env.NODE_ENV === 'test') {
  const inputs = `
5
1 4 2 4 3
2 3 4 2 2
3 2 4 4 3

3
1 1 1
1 1 1
1 1 1

6
2 10 7 7 7 11
5 7 9 10 9 12
6 6 7 10 12 7

`.trim().split('\n\n').map((input) => input.trim());

  for (let i = 0; i < inputs.length; i++) {
    console.time('\n[Time]');
    console.log(`\n=== Case ${i + 1} ===`);
    console.log('\n[Input]:');
    console.log(inputs[i]);
    console.log('\n[Output]:');
    main(inputs[i]);
    console.timeEnd('\n[Time]');
  }
} else {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
  main(input);
}
