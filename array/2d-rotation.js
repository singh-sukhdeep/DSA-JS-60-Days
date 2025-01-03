function rotateArray(matrix) {
  const lenghtOfMatrix = matrix[0].length;
  getTransposeOfMatrix(matrix);

  for (let rowIndex = 0; rowIndex < lenghtOfMatrix; rowIndex++) {
    for (
      let columnIndex = 0;
      columnIndex < Math.floor(lenghtOfMatrix / 2);
      columnIndex++
    ) {
      let temp = matrix[rowIndex][columnIndex];
      matrix[rowIndex][columnIndex] =
        matrix[rowIndex][lenghtOfMatrix - 1 - columnIndex];
      matrix[rowIndex][lenghtOfMatrix - 1 - columnIndex] = temp;
    }
  }
}

function getTransposeOfMatrix(matrix) {
  const lenghtOfMatrix = matrix[0].length;
  for (let rowIndex = 0; rowIndex < lenghtOfMatrix; rowIndex++) {
    for (
      let columnIndex = rowIndex + 1;
      columnIndex < lenghtOfMatrix;
      columnIndex++
    ) {
      const temp = matrix[rowIndex][columnIndex];
      matrix[rowIndex][columnIndex] = matrix[columnIndex][rowIndex];
      matrix[columnIndex][rowIndex] = temp;
    }
  }
}

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotateArray(arr);

console.log(arr);
[
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
];
