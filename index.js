function fibonacci(num) {
  let a = 0;
  let b = 1;
  let series = [a, b];
  let result = 0;
  for (let i = 0; i < num; i++) {
    result = a + b;
    a = b;
    b = result;
    series.push(result);
  }
  return series;
}

console.log(fibonacci(6));

function recursiveFibonacci(num) {
  if (num < 2) {
    return num;
  }

  return recursive(num - 1) + recursive(num - 2);
}
console.log(recursiveFibonacci(5));
