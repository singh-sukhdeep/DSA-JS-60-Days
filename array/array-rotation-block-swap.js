let leftRotate = (arr, d, n) => {
    /* Return If number of elements to be rotated 
    is zero or equal to array size */
    if (d == 0 || d == n)
        return;

    /*If number of elements to be rotated
    is exactly half of array size */
    if (n - d == d) {
        arr = swap(arr, 0, n - d, d);
        return;
    }

    /* If A is shorter*/
    if (d < n - d) {
        arr = swap(arr, 0, n - d, d);
        leftRotate(arr, d, n - d);
    }
    else {
        /* If B is shorter*/
        arr = swap(arr, 0, d, n - d);
        /*This is tricky*/
        leftRotate(arr + n - d, 2 * d - n, d);
    }
}

/*UTILITY FUNCTIONS*/
/* function to print an array */
let printArray = (arr, size) => {
    ans = ''
    for (let i = 0; i < size; i++)
        ans += arr[i] + " ";
    console.log(ans)
}

/*This function swaps d elements
starting at index fi
with d elements starting at index si */
let swap = (arr, fi, si, d) => {
    for (let i = 0; i < d; i++) {
        let temp = arr[fi + i];
        arr[fi + i] = arr[si + i];
        arr[si + i] = temp;
    }
    return arr
}

// Driver Code
arr = [1, 2, 3, 4, 5, 6, 7];
leftRotate(arr, 2, 7);
printArray(arr, 7);