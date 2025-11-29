// WA

function main(input: string): void {
  const lines = input.split('\n');
  const T = Number(lines[0]);

  let ln = 1;

  for (let c = 1; c <= T; c++) {
    const [N, H] = lines[ln].split(' ').map(Number);

    let answer = 'Yes';
    let h = H;

    for (let i = 1; i <= N; i++) {
      const [t, l, u] = lines[ln + i].split(' ').map(Number);

      const distToL = Math.abs(h - l);
      const distToU = Math.abs(h - u);
      const dist = Math.min(distToL, distToU);

      if (dist > t) {
        answer = 'No';
        break;
      }

      const remainingTime = t - dist;
      if (l === u && remainingTime % 2 !== 0) {
        answer = 'No';
        break;
      }
    }

    console.log(answer);
    ln += N + 1;
  }
}

// ----------------------------------------

if (process.env.NODE_ENV === 'test') {
  const inputs = `
3
2 5
3 1 4
8 9 11
2 6
1 1 4
3 5 8
10 36
27 37 38
30 34 54
38 20 77
45 1 36
49 38 51
52 31 58
65 43 60
71 14 42
73 36 38
85 14 29

1
2 5
1 4 4
2 4 4

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
