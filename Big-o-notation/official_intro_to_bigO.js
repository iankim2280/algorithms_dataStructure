/*
            Big O Definition
            is a way to formalize fuzzy counting..
            allows us to talk formally about how the runtime of an algorithm grows as the inputs grow.
        */
// const string1 = prompt('Input any number.')
// const string2 = parseInt(string1, 10)
// const upAndDown = (n) => {
//     console.log('Goes up!')
//     for (let i = 1; i < n + 1; i++) {
//         console.log(i)
//     }
//     console.log('At the top!\nGoing down')
//     for (let J = n; J >= 1; J--) {
//         console.log(J)
//     }
//     console.log('Done')
// }
// upAndDown(string2)

const pairs = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};
pairs(5);
