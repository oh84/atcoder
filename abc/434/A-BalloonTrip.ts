function main(input: string): void {
  const lines = input.split('\n');
  const [W, B] = lines[0].split(' ').map(Number);

  let n = 1;
  while (n * B <= W * 1000) {
    n++;
  }

  console.log(n);
}

// ----------------------------------------

if (process.env.NODE_ENV === 'test') {
  const inputs = `
80 5

70 6

100 100

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
