let i = 0;
while (i < 10) {
  i++;
  console.log(i);
}

for (let i = 2; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  } else {
    continue;
  }
}

const number = 7;
for (let i = 1; i <= 10; i++) {
  const result = number * i;
  console.log(`${number} * ${i} = ${result}`);
}

const numbers = [1, 2, 3, 4, 5];
let index = 0;
while (index < numbers.length) {
  console.log(numbers[index]);
  index++;
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < nums.length; index++) {
  if (nums[index] === 7) {
    break;
  }
  console.log(nums[index]);
}
function numLowest(n) {
  for (let i = 0; i < n; i++) {
    if (i >= n) {
      break;
    }
    console.log(i);
  }
}
numLowest(10);

for (let i = 0; i <= 20; i++) {
  if (i % 3 === 0) {
    continue;
  } else {
    console.log(i);
  }
}
