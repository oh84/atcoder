function main(input: string): void {
  const lines = input.split('\n');
  const [N, M] = lines[0].split(' ').map(Number);

  const counts = Array(M + 1).fill(0);
  const weightSums = Array(M + 1).fill(0);

  for (let i = 1; i <= N; i++) {
    const [A, B] = lines[i].split(' ').map(Number);
    counts[A]++;
    weightSums[A] += B;
  }

  for (let i = 1; i <= M; i++) {
    const average = weightSums[i] / counts[i];
    console.log(average);
  }
}

// ----------------------------------------

if (process.env.NODE_ENV === 'test') {
  const inputs = `
10 5
4 92
1 16
3 77
4 99
2 89
3 8
1 40
5 56
1 40
4 77

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
