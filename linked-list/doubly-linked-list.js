

class NodeDoublyLinkedList {

    constructor(value) {
        this.prop = value;
        this.prev = null;
        this.next = null;
    }
}


class DoublyLikedList {

    constructor() {
        this.head = null;
    }


    addNode(value) {
        const newNode = new NodeDoublyLinkedList(value);

        if(this.head===null){
            this.head=newNode;
            return;
        }
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.next === null) {
                newNode.prev = currentNode;
                newNode.next = newNode;
                break;
            }
            currentNode=currentNode.next;
        }
    }

    addNodeAfter(value) {

    }

    addNodeAt() {

    }

    deleteNode() {

    }

    deleteNodeAt() {

    }

    printAllNodes() {
        let node = this.head;
        while (node !== null) {
            console.log(node.prop);
            node = node.next;
        }
    }

    findNode() {

    }

    findNodeWithPosition() {

    }


}


export { NodeDoublyLinkedList, DoublyLikedList };