const calc = value => {
  const values = [value];

  const next = arg => {
    if (typeof arg === "function") {
      return values.reduce(arg);
    }
    values.push(arg);
    return next;
  };

  return next;
};

const sum = (a, b) => a + b;
const pow = (a, b) => a * b;

console.log(calc(5)(2)(3)(sum));
console.log(calc(1)(2)(sum));
console.log(calc(2)(3)(pow));
