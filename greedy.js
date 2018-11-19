const calc = amount =>
  Object.keys({ 25: 0, 10: 0, 5: 0 }).reduceRight((total, value) => {
    const temp = Math.floor(amount / value);
    amount = amount % value;
    return total + temp;
  }, 0);

console.log(calc(40));
