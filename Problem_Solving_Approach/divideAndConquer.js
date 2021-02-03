const findNumber = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      console.log(i);
    }
  }
  return console.log("-1");
};
findNumber([1, 2, 3, 4, 5], 12);
