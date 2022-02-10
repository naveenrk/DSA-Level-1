function countDigit(number) {
  console.log(
    ` countDigit() Number of digits in ${number} is : ${
      number.toString().length
    }`
  );
}
const number = 93456;
countDigit(number);

function countDigitByMath(num) {
  let count = 0;
  while (num != 0) {
    num = parseInt(num / 10);
    count++;
  }

  return count;
}

const num = 1234;
console.log(
  `countDigitByMath() Number of digits in ${num} is : ${countDigitByMath(num)}`
);
