function isPrime_(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}
console.log('//- isPrimeNumber Time complexity is : O(n)');
const num = 12;
console.log(
  num,
  ' is a',
  isPrime_(num) ? 'prime number' : 'not a prime number'
);

function isPrime(number) {
  for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return number > 1;
}

console.log('//- isPrimeNumber Time complexity is : O(sqrt(n))');
const number = 23;
console.log(
  number,
  ' is a',
  isPrime(number) ? 'prime number' : 'not a prime number'
);

console.log('//- Print list of prime numbers between');
function printPrimeTillN(low, high) {
  console.log(low, ' & ', high);
  const listOfPrime = [];
  for (let i = low; i <= high; i++) {
    if (isPrime(i)) listOfPrime.push(i);
  }
  return listOfPrime;
}
const low = 6;
const high = 24;
console.log(
  'List of prime numbers between ',
  low,
  ' & ',
  high,
  ' is ',
  printPrimeTillN(low, high)
);
