// In order to implement heap we use array as data structure to implement it 


class Heap {
    heap;
    isMinHeap;
    constructor(isMinHeap = false) {
        this.heap = [];
        this.isMinHeap = isMinHeap;
    }

    insertElement(element) {
        this.heap.push(element);
        this.heapify();
    }

    deleteElement(element) {

    }

    printHeap() {

    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    leftElement(i) {
        return Math.floor((2 * i) + 1)
    }

    rightElement(i) {
        return Math.floor((2 * i) + 2)
    }

    heapify() {

    }
}