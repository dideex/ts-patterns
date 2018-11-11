const bynarySearh = (arr, str) => {
  const getHalfLength = (index = 0) =>
    Math.max(Math.round((arr.length - index) / 2), 1);
  let index = getHalfLength();
  let sumIndex = 0;
  while (str !== arr[index]) {
    sumIndex += index;
    if (str > arr[index]) {
      index += getHalfLength(sumIndex);
    } else {
      index -= getHalfLength(sumIndex);
    }
  }
  return index;
};

// prettier-ignore
const arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ]; // 10

console.log(bynarySearh(arr, 19));

const bynarySearh2 = (arr, str) => {
  let min = 0;
  let max = arr.length - 1;
  let guess;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);
    if (arr[guess] === str) return guess;
    else {
      if (arr[guess] < str) min = guess + 1;
      else max = guess - 1;
    }
  }
  return  -1
};

console.log(bynarySearh2(arr, 19));