


// Simple way of rotating the array one by one


function rotateArrayOneByOne(arr, positionsToRotate) {
    let actualRotations = positionsToRotate % arr.length;
    if (actualRotations === 0) {
        return arr;
    }

    for (let i = 0; i < actualRotations; i++) {
        const temp = arr[0];

        for (let pointer in arr) {
            pointer = parseInt(pointer, 10);
            if (pointer < (arr.length - 1)) {
                arr[pointer] = arr[pointer + 1];
            } else {
                arr[arr.length - 1] = temp;
            }
        }
    }
    return arr;
}




/**
 * Reversal Algorithm to reverse the array
 * rotate(arr[], d, n)
  reverse(arr[], 1, d) ;
  reverse(arr[], d + 1, n);
  reverse(arr[], 1, n);
 */


function reverseArray(arr, startPosition, endPosition) {
    const middleElement = Math.floor((endPosition - startPosition) / 2) + startPosition;
    for (let index = startPosition; startPosition <= middleElement; startPosition++) {
        if (startPosition < endPosition) {
            let temp = arr[startPosition];
            arr[startPosition] = arr[endPosition];
            arr[endPosition] = temp
            endPosition--;
        }
    }
}

function rotateArrayReversalAlgorithm(arr, d) {
    let actualRotations = d % arr.length;
    if (actualRotations === 0) {
        return arr;
    }
    reverseArray(arr, 0, actualRotations - 1);
    reverseArray(arr, actualRotations, arr.length - 1);
    reverseArray(arr, 0, arr.length - 1);
    return arr;
}




/**
 * Block Swap Algorithm
 * 
 * 
 Initialize A = arr[0..d-1] and B = arr[d..n-1]
1) Do following until size of A is equal to size of B

  a)  If A is shorter, divide B into Bl and Br such that Br is of same 
       length as A. Swap A and Br to change ABlBr into BrBlA. Now A
       is at its final place, so recur on pieces of B.  

   b)  If A is longer, divide A into Al and Ar such that Al is of same 
       length as B Swap Al and B to change AlArB into BArAl. Now B
       is at its final place, so recur on pieces of A.

2)  Finally when A and B are of equal size, block swap them.
 */


const d = 4;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

[6, 7, 8, 9, 5, 1, 2, 3, 4]
[5, 7, 8, 9, 6, 1, 2, 3, 4]
