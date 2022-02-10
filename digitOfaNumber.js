function countDigit(number) {
  let count = 0;
  while (number != 0) {
    number = parseInt(number / 10);
    count++;
  }

  return count;
}

const number = 56879;
console.log(`Digit Count of number ${number} is  ${countDigit(number)}`);

function digitOfaNumber(number) {
  const digitCount = countDigit(Math.abs(number));
  let pow = Math.pow(10, digitCount - 1);
  let res = '';
  while (pow != 0) {
    const temp = number / pow;
    pow = parseInt(pow / 10);
    res = '' + (parseInt(temp) % 10);
    console.log('\n', res);
  }
}
console.log(`Digit Of a Number as follows : `);
digitOfaNumber(number);
