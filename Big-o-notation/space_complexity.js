/*
Space Complexity
how much additional memory do we need to allocate in order to run the code in our algrithm?
*/

// 2 numbers total, i
const sum = (array) => {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};
// let sumArray = [1, 2, 3, 7]
// console.log(sum(sumArray))

const double = (array) => {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(2 * array[i]);
  }
  return newArr;
};
let sumArray = [1, 2, 3, 7];
console.log(double(sumArray));
