// function sumZero(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }

// const sumZero = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 1; j < array.length; j++) {
//             if (array[i] + array[j] === 0) {
//                 console.log(array[i], array[j])
//             }
//         }
//     }
// }

// const sumZero = (arr) => {
//     let left = 0;
//     let right = arr.length - 1;
//     while (left < right) {
//         let sum = arr[left] + arr[right]
//         if (sum === 0) {
//             console.log([arr[left], arr[right]])
//             return [arr[left], arr[right]]
//         } else if (sum > 0) {
//             right--;
//             console.log(right)
//         } else {
//             left++;
//         }
//     }
// }
// sumZero([-4, -3, -2, -1, 0, 1, 2, 4])

const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
    } else if (arr[i] === arr[j]) {
      arr[i] = arr[j];
    }
  }
  console.log(i + 1);
};
countUniqueValues([1, 2, 3, 3, 5]);
