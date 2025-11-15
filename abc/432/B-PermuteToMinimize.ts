function main(input: string): void {
  const lines = input.split('\n');
  const nums = lines[0].split('').map(Number);

  nums.sort((a, b) => a - b);

  const zeros = [];

  let i = 0;
  while (nums[i] === 0) {
    zeros.push(nums[i]);
    i++;
  }

  console.log([nums[i], ...zeros, ...nums.slice(i + 1)].join(''));
}

// ----------------------------------------

if (process.env.NODE_ENV === 'test') {
  const inputs = `
903

432

100

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
