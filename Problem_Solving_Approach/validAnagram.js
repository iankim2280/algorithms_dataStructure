const validAnagram = (str1, str2) => {
  // add whatever parameters you deem necessary - good luck!
  // compare length
  if (str1.length !== str2.length) {
    return false;
  }
  const result = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    // if letter exists, increment, otherwise set to 1
    result[letter] ? (result[letter] += 1) : (result[letter] = 1);
  }
  // console.log(result)
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!result[letter]) {
      return false;
    } else {
      console.log(result);
      result[letter] -= 1;
    }
  }
  return true;
};
validAnagram("hello", "hello");
