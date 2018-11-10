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

console.log(bynarySearh(arr, 10));
