const naiverSearch = (str, key) => {
  if (str.length <= 1 && key.length < 1) return false;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < key.length; j++) {
      if (key[j] !== str[i + j]) break;
      if (j === key.length - 1) count++;
    }
  }
  return count;
};
console.log(naiverSearch("hello", "l"));
// naiverSearch("hello", "el");
