function main(input: string): void {
  const lines = input.split('\n');
  const T = Number(lines[0]);

  let ln = 1;

  for (let c = 1; c <= T; c++) {
    const [N, H] = lines[ln].split(' ').map(Number);

    let answer = 'Yes';
    let prevL = H;
    let prevU = H;
    let prevT = 0;

    for (let i = 1; i <= N; i++) {
      const [t, l, u] = lines[ln + i].split(' ').map(Number);

      const dt = t - prevT;

      // console.log({ T: prevT, L: prevL, U: prevU, dt })
      // console.log({ t, l, u })

      if (prevL > u) {
        if (prevL - dt > u) {
          answer = 'No';
          break;
        }
        prevL = Math.max(prevL - dt, l);
        prevU = u;
      } else if (prevU < l) {
        if (prevU + dt < l) {
          answer = 'No';
          break;
        }
        prevL = l;
        prevU = Math.min(prevU + dt, u);
      } else {
        prevL = prevL < l ? l : Math.max(prevL - dt, l);
        prevU = prevU > u ? u : Math.min(prevU + dt, u);
      }

      prevT = t;
    }

    console.log(answer);
    ln += N + 1;
  }
}

/*

| パターン                | 'No'となる条件 | 次のL               | 次のU               |
| ----------------------- | -------------- | ------------------- | ------------------- |
| 0       l       u L---U | L - dt > u     | L -> max(L - dt, l) | U -> u              |
| 0 L---U l       u       | U + dt < l     | L -> l              | U -> min(U + dt, u) |
| 0       l L---U u       | なし           | L -> max(L - dt, l) | U -> min(U + dt, u) |
| 0       l     L-u-U     | なし           | L -> max(L - dt, l) | U -> u              |
| 0     L-l-U     u       | なし           | L -> l              | U -> min(U + dt, u) |
| 0     L-l-------u-U     | なし           | L -> l              | U -> u              |

*/

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
