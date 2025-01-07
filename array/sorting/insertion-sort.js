export function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;

    while (j > 0) {
      if (arr[j - 1] < arr[j]) {
        break;
      } else {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
      j--;
    }

    console.log(arr);
  }
}

const arr = [6, 1, 3, 5, 2, 45, 9, 8];

insertionSort(arr);
console.log(arr);
