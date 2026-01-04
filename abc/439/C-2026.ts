function main(input: string): void {
  const lines = input.split('\n');
  const N = Number(lines[0]);

  const counts = Array(N + 1).fill(0);
  for (let x = 1; x * x <= N; x++) {
    for (let y = x + 1; x * x + y * y <= N; y++) {
      counts[x * x + y * y]++;
    }
  }

  const answer = [];
  for (let n = 1; n <= N; n++) {
    if (counts[n] === 1) answer.push(n);
  }
  console.log(answer.length);
  console.log(answer.join(' '));
}

// ----------------------------------------

if (process.env.NODE_ENV === 'test') {
  const inputs = `
10

1

50

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
