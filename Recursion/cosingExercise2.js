function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length <= 1) return 1;
  return str.split("").reverse().join("");
}

// console.log(reverse("awesome")); // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// console.log(isPalindrome("tacocat")); // true
// console.log(isPalindrome("amanaplanacanalpanama")); // true
// isPalindrome('amanaplanacanalpandemonium') // false

const isOdd = (val) => val % 2 !== 0;
const someRecursive = (arr, isWhat) => {
  if (arr.length === 0) return false;
  if (isWhat(arr[0])) return true;
  return someRecursive(arr.slice(1), isWhat);
};
console.log(someRecursive([1, 2, 4], isOdd));
