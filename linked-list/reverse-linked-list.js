


function Node(value) {

    this.value = value;
    this.next = null;
}


function LinkedList() {

    this.head = null;

}



const node1 = new Node('Name 1');
const node2 = new Node('Name 2');
const node3 = new Node('Name 3');


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


function searchNode(linkedList,node){
    
}

insertAtStart(linkedList,new Node('Node 1'));
insertAtEnd(linkedList,new Node('Node 2'));
insertAtEnd(linkedList,new Node('Node 3'));
console.log(linkedList);