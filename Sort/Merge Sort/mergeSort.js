const merge = (arr1, arr2) => {
  console.log(arr1, arr2, "arrays");
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  console.log(`results: ${results}`);
  return results;
};

// merge([1, 5], [2, 6, 12, 20]);

// Recursive
const merge2 = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = merge2(arr.slice(0, mid));
  let right = merge2(arr.slice(mid));
  return merge(left, right);
};
merge2([45, 15, 38, 26]);
