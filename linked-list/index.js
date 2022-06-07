import Node from './node.js';
import LinkedList from './linked-list.js';


// Javascript Linked List 


const node1 = new Node(56);
const node2 = new Node(25);
const node3 = new Node(5);
const node4 = new Node(560);
const node5 = new Node(546);
const node6 = new Node(6);
const node7 = new Node(12);
const node8 = new Node(2);
const node9 = new Node(1000);
const node10 = new Node(33);


const linkedList = new LinkedList();

linkedList.addElementAtEnd(node1);
linkedList.addElementAtEnd(node2);
linkedList.addElementAtEnd(node3);
linkedList.addElementAtEnd(node4);
linkedList.addElementAtEnd(node5);
linkedList.addElementAtEnd(node6);
linkedList.addElementAtEnd(node7);



linkedList.readAllNodes();

console.log('-------------',linkedList.findElement(560))