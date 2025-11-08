function main(input: string): void {
  const lines = input.split('\n');
  const X = Number(lines[0]);
  const N = Number(lines[1]);
  const W = lines[2].split(' ').map(Number);
  const Q = Number(lines[3]);

  let weight = X;
  const attached = new Set<number>();

  for (let i = 1; i <= Q; i++) {
    const P = Number(lines[3 + i]);

    if (attached.has(P)) {
      attached.delete(P);
      weight -= W[P - 1];
    } else {
      attached.add(P);
      weight += W[P - 1];
    }

    console.log(weight);
  }
}

// ----------------------------------------

if (process.env.NODE_ENV === 'test') {
  const inputs = `
31
4
15 92 65 35
4
3
1
4
1

41
10
73 8 55 26 97 48 37 47 35 55
15
1
2
7
1
6
3
10
8
4
8
1
5
9
9
3

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
