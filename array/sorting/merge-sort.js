function mergeSort(arr) {
  const totalLength = arr.length;

  let currIterationCount = 1;

  while (currIterationCount < totalLength) {
    for (let i = 0; i < totalLength; i += 2 * currIterationCount) {
      const start = i;
      const end = Math.min(i + 2 * currIterationCount - 1, totalLength - 1);
      const middle = Math.min(start + currIterationCount - 1, totalLength - 1);
      // console.log("--------------------------");
      // console.log("Start is ", start);
      // console.log("Middle is ", middle);
      // console.log("End is ", end);
      // console.log("--------------------------");
      merge(arr, start, middle, end);
    }

    currIterationCount *= 2;
  }
}

function merge(arr, start, mid, end) {
  const leftArr = arr.slice(start, mid + 1);
  const rightArr = arr.slice(mid + 1, end + 1);

  let leftIndex = 0;
  let rightIndex = 0;
  let arrayIndex = start;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      arr[arrayIndex++] = leftArr[leftIndex++];
    } else {
      arr[arrayIndex++] = rightArr[rightIndex++];
    }
  }

  while (leftIndex < leftArr.length) {
    arr[arrayIndex++] = leftArr[leftIndex++];
  }

  while (rightIndex < rightArr.length) {
    arr[arrayIndex++] = rightArr[rightIndex++];
  }
}

function mergeSortRecursive(arr, start, end) {
  console.log(start, end);
  if (start >= end) {
    return;
  }

  const mid = Math.floor(start + (end - start) / 2);

  mergeSortRecursive(arr, start, mid);
  mergeSortRecursive(arr, mid + 1, end);

  merge(arr, start, mid, end);
}

const arr = [6, 1, 3, 5, 2, 45, 9, 8, 23, 12];

mergeSortRecursive(arr, 0, arr.length - 1);
console.log(arr);
