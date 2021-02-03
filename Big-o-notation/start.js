/*
            what does better mean?
            faster? less memory-intensive? more readable?

            The problem with time..
            Differenet machines will record different times
            The same machine will record different times!!
            For fast algorithms, speed measurements may not be precise enough?

        */

// eg1, has several operations
const sum = (n) => {
  let total = 0;
  for (let index = 0; index <= n; index++) {
    total += index;
  }
  return total;
};
let t1 = performance.now();
console.log(sum(1000000000));

// eg2, has only 3 operations, multiple, add, divide
const sum2 = (n) => {
  return (n * (n + 1)) / 2;
};
// console.log(sum2(1000000000))

let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);

/*
            if not time, then what?
            Rather than counting seconds, which ar so variable..

            Lets' count the number of simple  operations the computer has to perform!
            
        */
