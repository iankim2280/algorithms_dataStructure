// Base Case

// Different Input

// const countDown = (num) => {
//   if (num <= 0) {
//     console.log("All Done!");
//     return;
//   }
//   console.log(num);
//   num--;
//   countDown(num);
// };
// countDown(10);

const countDown2 = (num) => {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All Done!");
};
countDown2(5);
