function main(input: string): void {
  const lines = input.split('\n');
  const [H, B] = lines[0].split(' ').map(Number);

  console.log(H > B ? H - B : 0);
}

// ----------------------------------------

if (process.env.NODE_ENV === 'test') {
  const inputs = `
43 1

4 31

1 1

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
