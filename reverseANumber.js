const number = 123456;
function reverseANumber(number) {
  let res = [];
  while (number != 0) {
    res.push(number % 10);
    number = parseInt(number / 10);
  }
  return res;
}

console.log(parseInt(reverseANumber(number).join('')));