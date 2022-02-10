/**
 * Inverse a Number
 */
const number = 426135;
function inverseANumber(number) {
  console.log(number);
  console.log(Array.from(String(number), Number));
  const arr = Array.from(String(number), Number);
  const length = arr.length;
  let newArr = [];
  let sum = 0;
  for (let i = 1; i <= length; i++) {
    let val = Math.pow(10, arr[length - i]) * i;
    sum += val;
    newArr.push(val);
  }

  console.log(sum);
}
inverseANumber(number);
