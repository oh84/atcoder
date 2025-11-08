function main(input: string): void {
  const lines = input.split('\n');
  const [N, M, K] = lines[0].split(' ').map(Number);
  const H = lines[1].split(' ').map(Number);
  const B = lines[2].split(' ').map(Number);

  H.sort((a, b) => b - a);
  B.sort((a, b) => b - a);

  let h = 0;
  let b = 0;
  let count = 0;

  while (h < N && b < M) {
    if (H[h] <= B[b]) {
      // console.log({ result: true, H: H[h], B: B[b] })
      count++;
      h++;
      b++;
    } else {
      // console.log({ result: false, H: H[h], B: B[b] })
      h++;
    }
  }

  // console.log({ H, B, count })
  console.log(count >= K ? 'Yes' : 'No');
}

// ----------------------------------------

if (process.env.NODE_ENV === 'test') {
  const inputs = `
6 6 3
2 7 1 8 2 8
1 8 2 8 4 5

1 1 1
43
1

1 1 1
100
100

12 15 12
748 169 586 329 972 529 432 519 408 587 138 249
656 114 632 299 984 755 404 772 155 506 832 854 353 465 387

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
