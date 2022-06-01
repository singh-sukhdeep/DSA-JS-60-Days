

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
        console.log(this.root,'INSERT START FUNCTION');
        this.root = this.insertRecur(this.root, key);
        console.log(this.root,'INSERT END FUNCTION');
    }

    insertRecur(root, value) {
        console.log(root, value, 'Value')
        if (root === null) {
            console.log('I am empty')
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
}


const tree = new BinarySearchTree();

tree.insert(25);
tree.insert(2);
tree.insert(29);
tree.insert(4);

console.log(tree, '---');