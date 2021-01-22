// // ES5
// function swap(arr, idx1, idx2) {
//   var temp = arr[idx1];
//   arr[idx1] = arr[idx2];
//   arr[idx] = temp;
// }

// // ES6
// const swap = (arr, idx1, idx2) => {
//   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// };

// BubbleSort
// const bubbleSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] < arr[j - 1]) {
//         [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// };

const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = arr.length - 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
  return arr;
};

console.log(bubbleSort([2, 4, 0]));
