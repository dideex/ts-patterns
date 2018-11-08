const times10 = n => n * 10

const memoize = fn => {
  const cache = {}
  return n => (n in cache ? cache[n] : (cache[n] = fn(n)))
};

const memoClousreTimes10 = memoize(times10)

console.log(
  memoClousreTimes10(10), 
  memoClousreTimes10(10),
  memoClousreTimes10(9),
  memoClousreTimes10(9),
  memoClousreTimes10(9),
  )

// cache factorial
const cache = {};

const factorial = n => {
  if (cache[n - 1]) return cache[n - 1] * n;
  return (cache[n] = n !== 1 ? factorial(n - 1) * n : 1);
};

console.log(factorial(4));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(7));