const arr = [1, 2, 5, 9, 3, 0];
const arr2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

const bubbleSort = arr => {
  const sort = arr => {
    let isArraySorted = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isArraySorted = true;
      }
    }
    return isArraySorted;
  };

  while (sort(arr)) {}
  return arr;
};

console.log(bubbleSort(arr));
console.log(bubbleSort(arr2));
