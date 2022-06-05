

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
        this.kthElement = -1;
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
        return this.findRecur(this.root, value);

    }

    findRecur(root, value) {
        if (root === null) {
            return null;
        }
        if (root.key === value) {
            return root;
        }
        if (value < root.key) {
            return this.findRecur(root.left, value);
        } else {
            return this.findRecur(root.right, value);
        }
    }

    deleteNode(value) {
        this.root = this.deleteRec(this.root, value);
        return this.root;
    }

    deleteRec(root, key) {
        if (root === null) {
            return null;
        }

        if (key < root.key) {
            root.left = this.deleteRec(root.left, key);
        } else if (key > root.key) {
            root.right = this.deleteRec(root.right, key)
        } else {
            // If found node is to be deleted
            if (root.left == null) {
                return root.right;
            } else if (root.right) {
                return root.left;
            }

            root.key = this.findSuccesor(root.right);

            root.right = this.deleteRec(root.right, root.key);

        }

        return root;

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


    inOrderTraversal(node) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.key);
            this.inOrderTraversal(node.right);
        }

    }

    preOrderTraversal(node) {
        if (node !== null) {
            console.log(node.key);
            this.inOrderTraversal(node.left);
            this.inOrderTraversal(node.right);
        }

    }

    postOrderTraversal(node) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            this.inOrderTraversal(node.right);
            console.log(node.key);
        }

    }


    findKthElement(k) {
        this.kthElement = k;
        return this.findKthElementRecur(this.root, k);
    }
    findKthElementRecur(root, k) {
        if (root === null) {
            return null;
        }

        let left = this.findKthElementRecur(root.left);

        if (left !== null) {
            return left;
        }
        this.kthElement--;
        if (this.kthElement === 0) {
            return root;
        }

        return this.findKthElementRecur(root.right, k);

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



console.log(tree.findKthElement(1), '-------------------------');
// console.log(tree, '---');
// const elementNode = tree.deleteNode(25);


// if (elementNode) {
//     if (elementNode.ele.left === null && elementNode.ele.right === null) {
//         // If element is leaf node

//     } else if (elementNode.left && elementNode.right) {

//     } else {

//     }

// } else {
//     console.log('============================= ELEMENT DELETION =============================');
//     console.log("----------------- ELEMENT COULD NOT BE FOUND -------------------------------");
//     console.log('============================= ELEMENT DELETION =============================');
// }

