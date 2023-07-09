


function ListNode(value) {

    this.value = value;
    this.next = null;
}


function LinkedList() {

    this.head = null;

}
const linkedList = new LinkedList();



function insertAtStart(linkedList, node) {
    // Insert New Node at start of list

    if (linkedList.head !== null) {

        // Make
        // head --> existing node
        // new node
        // new node.next --> head
        // head--> new node

        node.next = linkedList.head;
        linkedList.head = node;

    } else {
        linkedList.head = node;
    }
}

function getLastElement(linkedList) {

    if (linkedList.head === null) {
        return null;
    }
    let currentNode = linkedList.head;
    while (currentNode.next !== null) {

        currentNode = currentNode.next;
    }

    return currentNode;
}

function insertAtEnd(linkedList, node) {

    // Add node to the last element
    const lastNode = getLastElement(linkedList);

    if (lastNode !== null) {
        lastNode.next = node;
    } else {
        linkedList.head = node;
    }

}


function searchNode(linkedList, node) {

}

insertAtStart(linkedList, new ListNode('Node 1'));
insertAtEnd(linkedList, new ListNode('Node 2'));
const node3 = new ListNode('Node 3');
node3.next = linkedList.head;
insertAtEnd(linkedList, node3);



// head --> A --> B --> C --> D

// Step 1
// headerPointer --> head
// trailingPointer --> head

// Step 2
// headerPointer --> A
// trailingPointer --> head


// A <-- B <-- C <-- D <-- head

function reverseLinkedList(linkedList) {
    let current = linkedList.head, prev = null, next = null;

    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next
    }
    linkedList.head = prev;

    return linkedList;
}


function lengthOfLinkedList(linkedList) {
    return linkedList.head === null ? 0 : traverse(linkedList.head)
}

function traverse(node) {
    if (node.next === null) {
        return 1;
    } else {
        return 1 + traverse(node.next);
    }
}

function checkIfLinkedListIsCircular(linkedList) {

    if (linkedList.head === null) {
        return true;
    }

    let current = linkedList.head.next;
    while (current != null && current != linkedList.head) {
        current = current.next;
    }

    if (current === null) {
        return false;
    } else {
        return true;
    }
}

function isCircular(head) {
    // An empty linked list is circular
    if (head == null)
        return true;

    // Next of head
    let node = head.next;

    // This loop would stop in both cases (1) If
    // Circular (2) Not circular
    while (node != null && node != head)
        node = node.next;

    // If loop stopped because of circular
    // condition
    return (node == head);
}

// console.log(linkedList);
console.log(checkIfLinkedListIsCircular(linkedList), '--');

