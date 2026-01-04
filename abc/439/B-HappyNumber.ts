function main(input: string): void {
  const lines = input.split('\n');
  const N = Number(lines[0]);

  const memo = new Set();
  let n = N;

  while (n !== 1) {
    if (memo.has(n)) {
      console.log('No');
      return;
    }

    memo.add(n);

    const digits = [];
    let m = n;

    while (m > 0) {
      digits.push(m % 10);
      m = Math.floor(m / 10);
    }

    n = digits.reduce((sum, d) => sum + d ** 2, 0);
  }

  console.log('Yes');
}

// ----------------------------------------

if (process.env.NODE_ENV === 'test') {
  const inputs = `
2026

439

440

68

86

1177

1717

1771

1339

1393

1933

`.trim().split('\n\n').map((input) => input.trim());

  // const inputs = Array.from({ length: 2026 }, (v, i) => String(i + 1));

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
