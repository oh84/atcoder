function main(input: string): void {
  const lines = input.split('\n');
  const s = lines[0].split('').map(Number);

  const rle: [number, number][] = [];
  for (const c of s) {
    if (rle.length !== 0 && rle[rle.length - 1][0] === c) {
      rle[rle.length - 1][1]++;
    } else {
      rle.push([c, 1]);
    }
  }

  let answer = 0;
  for (let i = 0; i < rle.length - 1; i++) {
    if (rle[i][0] + 1 !== rle[i + 1][0]) continue;
    answer += Math.min(rle[i][1], rle[i + 1][1]);
  }
  console.log(answer);
}

// ----------------------------------------

if (process.env.NODE_ENV === 'test') {
  const inputs = `
1122

7788788

2025

1112222334445556555

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
