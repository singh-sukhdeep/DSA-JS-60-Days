import Node from './node.js';

class LinkedList {


    constructor() {
        this.head = null;
    }

    readAllNodes() {
        if (this.head === null) {
            return null
        }
        return this.readAllNodesRecur(this.head);
    }

    readAllNodesRecur(node) {
        console.log(node.prop);
        if (node.next === null) {
            return null;
        }

        this.readAllNodesRecur(node.next);
    }

    getLastNode(head) {
        if (head === null) {
            return null;
        } else {
            return this.getLastNodeRecur(head);
        }
    }

    getLastNodeRecur(node) {
        if (node.next === null) {
            return node;
        } else {
            return this.getLastNodeRecur(node.next);
        }
    }

    addElementAtEnd(node) {
        if (this.head) {
            const lastNode = this.getLastNode(this.head);
            lastNode.next = node;
        } else {
            this.head = node;
        }
    }

    findElement(value) {
        return this.findElementRecur(this.head, value);
    }

    findElementRecur(node, value) {
        if (node.next === null) {
            return null;
        }
        if (node.prop === value) {
            return node;
        }
        return this.findElementRecur(node.next, value);
    }


    deleteElement(val) {

        let head = this.head;

        let currentNode = this.head;
        let prevNode = this.head;
        let condition = true;
        while (currentNode.next!==null) {
            if (currentNode.prop === val) {
                prevNode.next = currentNode.next;
                break;
            } else {
                prevNode = currentNode;
                currentNode = currentNode.next;
            }
        }
    }

    deleteElementRecur(node, value) {
        if (node === null) {
            return null;
        }

        if (node.prop === value) {
            return node.next;
        }

        node.next = this.deleteElementRecur(node.next, value);
        
        return node;
    }


}

export default LinkedList;