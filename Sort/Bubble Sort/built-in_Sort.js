// const numberCompare = (a, b) => {
//   return a - b;
// };
// console.log([12, 3, 56, 4, 5].sort(numberCompare));

const lengthCompare = (a, b) => {
  return b.length - a.length;
};
console.log(
  [
    "Algorithm",
    "IBM",
    "Data Structure",
    "Google",
    "JavaScript",
    "Apple",
    "Programming",
    "Sorting",
  ].sort(lengthCompare)
);
