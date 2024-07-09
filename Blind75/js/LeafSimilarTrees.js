// LEETCODE NO. 872

/*

Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

*/

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

var leafSimilar = function (root1, root2) {
    let stack1 = [root1];
    let stack2 = [root2];
    let leaf1 = [];
    let leaf2 = [];

    while (stack1.length > 0) {
        let current = stack1.pop();

        if (current.left) stack1.push(current.left);
        if (current.right) stack1.push(current.right);

        if (current.left === null && current.right === null) leaf1.push(current.val);
    }

    while (stack2.length > 0) {
        let current = stack2.pop();

        if (current.left) stack2.push(current.left);
        if (current.right) stack2.push(current.right);

        if (current.left === null && current.right === null) leaf2.push(current.val);
    }

    if (leaf1.length !== leaf2.length) return false;

    for (let i = 0; i < leaf1.length; i++) {
        if (leaf1[i] !== leaf2[i]) return false;
    }

    return true;

};

var a1 = new TreeNode(6);
var a2 = new TreeNode(6);
var b1 = new TreeNode(7);
var b2 = new TreeNode(7);
var c1 = new TreeNode(9);
var c2 = new TreeNode(9);
var d1 = new TreeNode(4);
var d2 = new TreeNode(4);
var e1 = new TreeNode(8);
var e2 = new TreeNode(8);
var f1 = new TreeNode(2, b1, d1);
var f2 = new TreeNode(2, c2, e2);
var g1 = new TreeNode(5, a1, f1);
var g2 = new TreeNode(5, a2, b2);
var h1 = new TreeNode(1, c1, e1);
var h2 = new TreeNode(1, d2, f2);
var root1 = new TreeNode(3, g1, h1);
var root2 = new TreeNode(3, g2, h2);

console.log(leafSimilar(root1, root2));
