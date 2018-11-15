const arr = [38, 27, 43, 3, 9, 82, 10];

const merge = (leftArr, rightArr) => {
  const res = [];
  let i = leftArr.length + rightArr.length;
  while (i--) {
    if (leftArr[0] === undefined || leftArr[0] > rightArr[0]) {
      res.push(rightArr.shift());
    } else {
      res.push(leftArr.shift());
    }
  }
  return res;
};
// [38, 27, 43, 3, 9, 82]
const mergeSort = arr => {
  if (arr.length < 2) return arr;
  const leftArr = mergeSort(arr.slice(0, Math.round(arr.length / 2)));
  const rightArr = mergeSort(arr.slice(-1 * Math.floor(arr.length / 2)));
  return merge(leftArr, rightArr);
};

console.log(mergeSort(arr))
