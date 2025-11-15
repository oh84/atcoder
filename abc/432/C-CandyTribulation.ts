// WA

function main(input: string): void {
  const lines = input.split('\n');
  const [N, X, Y] = lines[0].split(' ').map(BigInt);
  const A = lines[1].split(' ').map(BigInt);

  let maxW: bigint = 1000000000000000000n;
  let minW: bigint = -1000000000000000000n;

  for (let i = 0; i < N; i++) {
    maxW = maxW < Y * A[i] ? maxW : Y * A[i];
    minW = minW > X * A[i] ? minW : X * A[i];
  }
  if (minW > maxW) {
    console.log(-1);
    return;
  }

  let y = 0n;
  for (let i = 0; i < N; i++) {
    y += (maxW - A[i] * X) / (Y - X);
  }
  console.log(y.toString());
}

// ----------------------------------------

if (process.env.NODE_ENV === 'test') {
  const inputs = `
3 6 8
11 10 13

2 3 4
3 5

8 4 32
1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000

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
