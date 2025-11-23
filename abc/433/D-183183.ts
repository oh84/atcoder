function main(input: string): void {
  const lines = input.split('\n');
  const [N, M] = lines[0].split(' ').map(Number);
  const A = lines[1].split(' ').map(Number);

  const digits = A.map(a => a.toString().length);
  const digitGroups = new Map<number, Map<number, number>>();

  for (let j = 0; j < N; j++) {
    const d = digits[j];
    if (!digitGroups.has(d)) {
      digitGroups.set(d, new Map<number, number>());
    }
    const group = digitGroups.get(d)!;
    const modValue = ((-A[j] % M) + M) % M;
    group.set(modValue, (group.get(modValue) || 0) + 1);
  }

  let answer = 0;

  for (let i = 0; i < N; i++) {
    for (const [d, group] of digitGroups.entries()) {
      let power10 = 1;
      for (let k = 0; k < d; k++) {
        power10 = (power10 * 10) % M;
      }
      const modValue = Number((BigInt(A[i]) * BigInt(power10)) % BigInt(M));
      answer += group.get(modValue) || 0;
    }
  }

  console.log(answer);
}

// ----------------------------------------

if (process.env.NODE_ENV === 'test') {
  const inputs = `
2 11
2 42

4 7
2 8 16 183

5 5
1000000000 1000000000 1000000000 1000000000 1000000000

12 13
80 68 862370 82217 8 56 5 168 672624 6 286057 11864

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
