// LEETCODE NO. 450

// Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

// Basically, the deletion can be divided into two stages:

// Search for a node to remove.
// If the node is found, delete the node.

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
};

const a = new TreeNode(5);
const b = new TreeNode(3);
const c = new TreeNode(6);
const d = new TreeNode(2);
const e = new TreeNode(4);
const f = new TreeNode(7);

a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.right = f;

const deleteNode = (root, key) => {
    if (root === null) return null;

    if (root.val > key) {
        root.left = deleteNode(root.left, key);
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key);
    } else {
        if (!root.left && !root.right) return null;
        if (!root.left) return root.right;
        if (!root.right) return root.left;

        root.val = min(root.right);
        root.right = deleteNode(root.right, root.val);

    }

    return root;

};

const min = (root) => {
    if (!root.left) return root.val;
    return min(root.left);
}


console.log(deleteNode(a, 3));