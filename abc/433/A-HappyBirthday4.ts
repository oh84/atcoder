function main(input: string): void {
  const lines = input.split('\n');
  const [X, Y, Z] = lines[0].split(' ').map(Number);

  if (X - Y * Z < 0 || (X - Y * Z) % (Z - 1) !== 0) {
    console.log('No');
    return;
  }

  console.log('Yes');
}

// ----------------------------------------

if (process.env.NODE_ENV === 'test') {
  const inputs = `
44 20 2

28 10 3

50 5 10

1 100 2

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
