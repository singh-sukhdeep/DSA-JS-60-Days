

class Node {

    constructor(item) {
        this.key = item;
        this.left = null;
        this.right = null;
    }

}



class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insert(key) {
        this.root = this.insertRecur(this.root, key);
    }

    insertRecur(root, value) {
        if (root === null) {
            root = new Node(value);
            return root;
        }
        if (root.key > value) {
            root.left = this.insertRecur(root.left, value);
        } else if (root.key < value) {
            root.right = this.insertRecur(root.right, value);
        }
        return root;
    }


    findSuccesor(node) {
        if (node.left === null) {
            return node;
        } else {
            return this.findSuccesor(node.left);
        }
    }

    findElement(value) {
        return this.findRecur(this.root,value);

    }

    findRecur(root, value) {
        if (root === null) {
            return null;
        }
        if (root.key === value) {
            return root;
        }
        if (value < root.key) {
            return this.findRecur(root.left,value);
        } else {
            return this.findRecur(root.right,value);
        }
    }

    insertIter(value) {
        const node = new Node(value)
        let condition = true;

        if (this.root === null) {
            this.root = node;
            return this.root;
        }

        let prevNode = null;
        let topNode = this.root;

        while (topNode !== null) {

            if (value < topNode.key) {
                prevNode = topNode;
                topNode = topNode.left;
            } else if (value > topNode.key) {
                prevNode = topNode;
                topNode = topNode.right;
            }
        }

        if (prevNode.key > value)
            prevNode.left = node;
        else
            prevNode.right = node;

    }
}


const tree = new BinarySearchTree();

tree.insert(2);
tree.insert(1);
tree.insert(0);
tree.insert(33);
tree.insert(25);
tree.insert(11);
tree.insert(7);
tree.insert(12);
tree.insert(13);
tree.insert(28);
tree.insert(26);
tree.insert(30);
tree.insert(40);
tree.insert(34);
tree.insert(36);




// console.log(tree, '---');

console.log(tree.findElement(25))