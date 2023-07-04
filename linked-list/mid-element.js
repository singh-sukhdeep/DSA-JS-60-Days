import Node from './node.js';
import LinkedList from './linked-list.js';



const node1 = new Node("Node 1");
const node2 = new Node("Node 2");
const node3 = new Node("Node 3");
const node4 = new Node("Node 4");
const node5 = new Node("Node 5");
// const node6 = new Node("Node 6");
// const node7 = new Node("Node 7");



const linkedList = new LinkedList();

linkedList.addElementAtEnd(node1);
linkedList.addElementAtEnd(node2);
linkedList.addElementAtEnd(node3);
// linkedList.addElementAtEnd(node4);
// linkedList.addElementAtEnd(node5);
// linkedList.addElementAtEnd(node6);
// linkedList.addElementAtEnd(node7);



function findMiddleOfList(list) {

    if (list.head === null) {
        return null;
    }

    let slow = list.head, fast = list.head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

console.log(findMiddleOfList(linkedList));