/*
            BIG O Shorthands
            1. Arithmetic operations ar constant
            2. Variable assignment is constatn.
            3. Accessing elements in an arrya (by index) or object (by key) is constant
            4. In a loop, the the complexity is the length of the loop times the comlexity of whatever happens inside of the loop
        */
const logAtLeat5 = (n) => {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
};
logAtLeat5(10);

const logAtMost5 = (n) => {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
};
logAtMost5(5);
