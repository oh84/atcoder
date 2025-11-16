function main(input: string): void {
  const lines = input.split('\n');
  const [N, X, Y] = lines[0].split(' ').map(BigInt);
  const A = lines[1].split(' ').map(BigInt);

  A.sort((a, b) => Number(a - b));

  const W = A[0] * Y;
  let answer = 0n;

  for (let i = 0; i < N; i++) {
    const w = A[i] * Y;

    const diff = w - W;
    if (diff % (Y - X) !== 0n) {
      console.log(-1);
      return;
    }

    const x = diff / (Y - X);
    if (x > A[i]) {
      console.log(-1);
      return;
    }
    answer += A[i] - x;
  }

  console.log(answer.toString());
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

2 1 3
10 15

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
