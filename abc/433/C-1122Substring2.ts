function main(input: string): void {
  const lines = input.split('\n');
  const s = lines[0].split('').map(Number);

  const dp: number[] = Array(s.length).fill(0);
  dp[0] = 0;

  let prevCount = 0;
  let count = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1] + 1) {
      dp[i] = dp[i - 1] + 1;
      prevCount = count;
      count = 1;
    } else if (s[i] === s[i - 1]) {
      count++;
      if (count <= prevCount) {
        dp[i] = dp[i - 1] + 1;
      } else {
        dp[i] = dp[i - 1];
      }
    } else {
      dp[i] = dp[i - 1];
      prevCount = 0;
      count = 1;
    }
  }

  console.log(dp[s.length - 1]);
}

// ----------------------------------------

if (process.env.NODE_ENV === 'test') {
  const inputs = `
1122

7788788

2025

1112222334445556555

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
