export function quickSort(arr, startIndex, endIndex) {
  if (startIndex < endIndex) {
    const pivotIndex = getPivotIndex(arr, startIndex, endIndex);
    quickSort(arr, startIndex, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, endIndex);
  }
}

function getPivotIndex(arr, start, end) {
  const pivot = arr[end];
  let i = start - 1;
  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      i++;
      const temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }

  const temp = arr[i + 1];
  arr[i + 1] = arr[end];
  arr[end] = temp;

  return i + 1;
}

const arr = [6, 1, 3, 5, 2, 45, 9, 8];

quickSort(arr, 0, arr.length - 1);
console.log(arr);
