function main(input: string): void {
  const lines = input.split('\n');
  const [D, F] = lines[0].split(' ').map(Number);

  const remaining = D - F;
  console.log(7 - remaining % 7);
}

// ----------------------------------------

if (process.env.NODE_ENV === 'test') {
  const inputs = `
365 4

10 5

7 7

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
