export function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestIndex]) {
        smallestIndex = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[smallestIndex];
    arr[smallestIndex] = temp;

    console.log(arr, "Iteration ", i);
  }
}

const arr = [6, 1, 3, 5, 2, 45, 9, 8];

selectionSort(arr);
console.log(arr);
