// Original Version
// function binarySearch(arr, index) {
//   if (arr.length <= 1) return false;
//   let start = 0;
//   let end = arr.length - 1;
//   let middle = Math.floor((start + end) / 2);
//   console.log(start, middle, end, index);
//   while (arr[middle] !== index) {
//     if (arr[middle] > index) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//     middle = Math.floor((start + end) / 2);
//     console.log(start, middle, end, index);
//   }
//   if (arr[middle] === index) {
//     return middle;
//   }
//   return -1;
// }

// Refactored Version
const binarySearch = (arr, elem) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  console.log(start, middle, end, elem);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
    console.log(start, middle, end, elem);
  }
  return arr[middle] === elem ? middle : -1;
};

// binarySearch([1, 2, 3, 4, 5, 18, 24, 33, 50, 78, 84, 100], 3);
console.log(binarySearch([1, 2, 3, 4, 5, 18, 24, 33, 50, 78, 84, 100], 1));
