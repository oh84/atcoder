function main(input: string): void {
  const lines = input.split('\n');
  const N = Number(lines[0]);
  const A = lines[1].split(' ').map(Number);

  const stack = [...A.slice(0, 3)];

  for (let i = 3; i < N; i++) {
    let doDelete = true;

    for (let j = 1; j <= 3; j++) {
      if (stack.at(-j) !== A[i]) {
        doDelete = false;
        break;
      }
    }

    if (doDelete) {
      for (let j = 1; j <= 3; j++) {
        stack.pop();
      }
    } else {
      stack.push(A[i]);
    }
  }

  console.log(stack.length);
}

// ----------------------------------------

if (process.env.NODE_ENV === 'test') {
  const inputs = `
10
1 1 1 4 4 4 4 1 2 3

3
2 1 3

13
1 1 4 4 4 1 1 1 1 4 1 4 1

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
