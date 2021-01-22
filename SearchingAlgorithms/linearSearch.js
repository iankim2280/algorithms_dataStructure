function linearSearch(arr, index) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length <= 1) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === index) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([10, 15, 20, 1, 3, 8], 8));
