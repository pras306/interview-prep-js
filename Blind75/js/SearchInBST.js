// LEETCODE NO. 700

/*

You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

*/

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

var searchBST = function (root, val) {
    if (root === null) return null;

    if (root.val > val) return searchBST(root.left, val);
    if (root.val < val) return searchBST(root.right, val);
    if (root.val === val) return root;
};

var a = new TreeNode(1);
var b = new TreeNode(3);
var c = new TreeNode(2, a, b);
var d = new TreeNode(7);

var root = new TreeNode(4, c, d);

console.log(searchBST(root, 2));