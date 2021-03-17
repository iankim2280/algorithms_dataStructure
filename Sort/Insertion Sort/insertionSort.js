const insertionSort = (arr) => {
  let currentVal;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    // cause you compare to the previous number, use let j = i - 1 and it should be greater than index 0
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
    console.log(arr);
  }
  return arr;
};
insertionSort([3, 2, 1]);
// console.log(insertionSort([3, 2, 1]));
