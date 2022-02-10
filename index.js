function countDigit(number) {
  console.log(
    ` Number of digits in ${number} is : ${number.toString().length}`
  );
}
const number = 93456;
countDigit(number);

function countDigitByMath(numeric) {
  let count = 0;
  while (numeric % 10 != 0) {
    count++;
  }

  return count;
}

const numeric = 1234;
console.log(countDigitByMath(numeric));
