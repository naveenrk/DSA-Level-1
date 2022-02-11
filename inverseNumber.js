/**
 * Inverse a Number
 */
 const number = 426135;
 function inverseANumber(number) {
   console.log(number);
   console.log(Array.from(String(number), Number));
   const arr = Array.from(String(number), Number);
   const length = arr.length;
   let sum = 0;
   for (let i = 1; i <= length; i++) {
     let val = Math.pow(10, arr[length - i]) * i;
     sum += val / 10;
   }
 
   return sum;
 }
 const value = inverseANumber(number);
 console.log(`Inverse of ${number} is : ${value}`);
 