function main(input: string): void {
  const lines = input.split('\n');
  const N = Number(lines[0]);

  const parts = [];
  let sumW = 0;
  let sumB = 0

  for (let i = 1; i <= N; i++) {
    const [w, h, b] = lines[i].split(' ').map(Number);
    sumW += w;
    sumB += b;
    parts.push({ w, v: h - b });
  }

  const W = Math.floor(sumW / 2);
  const dp = Array.from({ length: N + 1 }, () => Array(W + 1).fill(0));

  for (let i = 1; i <= N; i++) {
    const { w, v } = parts[i - 1];
    for (let j = 0; j <= W; j++) {
      if (j < w) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w] + v);
      }
    }
  }

  console.log(sumB + dp[N][W]);
}

// ----------------------------------------

if (process.env.NODE_ENV === 'test') {
  const inputs = `
3
1 41 59
2 65 35
8 97 93

1
1 1000000000 1

2
1 1000000000 1
1 1 1000000000

20
483 984529882 299667119
372 428935469 104847758
467 709733529 102461200
421 659244277 110859936
231 786224280 773073478
351 334234040 193222121
119 404159408 772024933
302 519596088 432627257
433 910226244 337833733
184 406236461 530198622
335 465203041 353047747
418 656273464 114923636
482 972364803 329650748
453 748321854 169441643
105 138464898 587159653
401 832952051 506021805
403 810916971 468755944
231 798801044 749313343
292 631278033 556088607
366 567211596 374825770

`.trim().split('\n\n').map((input) => input.trim());

  for (let i = 0; i < inputs.length; i++) {
    console.time('\n[Time]');
    console.log(`\n=== Case ${i} ===`);
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
