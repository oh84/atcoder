function main(input: string): void {
  const lines = input.split('\n');
  const N = Number(lines[0]);
  const A = lines[1].split(' ').map(Number);

  for (let i = 0; i < N; i++) {
    let answer = -1;
    for (let j = i - 1; j >= 0; j--) {
      if (A[j] > A[i]) {
        answer = j + 1;
        break;
      }
    }
    console.log(answer);
  }
}

// ----------------------------------------

if (process.env.NODE_ENV === 'test') {
  const inputs = `
4
4 3 2 5

3
7 7 7

6
31 9 17 10 2 9

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
