function main(input: string): void {
  const lines = input.split('\n');
  const [N, M] = lines[0].split(' ').map(Number);
  const s = lines[1].split('').map(Number);
  const t = lines[2].split('').map(Number);

  let minTotalCount = 9 * M;

  for (let i = 0; i + M <= N; i++) {
    let totalCount = 0;

    for (let j = 0; j < M; j++) {
      let count = 0;
      while (s[i + j] % 10 !== (t[j] + count) % 10) {
        count++;
      }
      totalCount += count;
    }

    if (minTotalCount > totalCount) {
      minTotalCount = totalCount;
    }
  }

  console.log(minTotalCount);
}

// ----------------------------------------

if (process.env.NODE_ENV === 'test') {
  const inputs = `
4 2
2025
91

3 2
438
38

5 5
00000
11111

8 3
20251227
438

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
