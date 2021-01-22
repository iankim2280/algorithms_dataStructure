// Iteratively
const factorial = (num) => {
  if (num === 1) return 1;
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
};
console.log(factorial(5));

// Recursively
function factorial2(num) {
  if (num === 1) return 1;
  return num * factorial2(num - 1);
}

// console.log(factorial2(5));
