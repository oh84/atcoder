function main(input: string): void {
  const lines = input.split('\n');
  const N = Number(lines[0]);

  console.log(2 ** N - 2 * N);
}

// ----------------------------------------

if (process.env.NODE_ENV === 'test') {
  const inputs = `
1

2

11

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
