// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

// function power(num1, num2) {
//   if (num1 === 0) return false;
//   return num1 ** num2;
// }
// console.log(power(2, 4));

// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

// function factorial(num) {
//   if (num < 0) return 0;
//   if (num === 0) return 1;
//   return num * factorial(num - 1);
// }
// console.log(factorial(3));

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
// const productOfArray = (arr) => {
//   if (arr.length === 0) return 1;

//   return arr[0] * productOfArray(arr.slice(1));
// };
// console.log(productOfArray([1, 2, 3]));

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

// function recursiveRange(num) {
//   if (num === 0) return 0;
//   return num + recursiveRange(num - 1);
// }
// console.log(recursiveRange(4));

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num) {
  // add whatever parameters you deem necessary - good luck!
  if (num <= 1) return 1;
  return fib(num - 1) + fib(num - 2);
}
console.log(fib(2));
