// LEETCODE NO. 104

/*

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

*/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
};

var maxDepth = function (root) {
    if (root === null) return 0;

    let depth = 1;
    let leftDepth = 0;
    let rightDepth = 0;

    if (root.left) leftDepth = maxDepth(root.left);
    if (root.right) rightDepth = maxDepth(root.right);

    return depth + Math.max(leftDepth, rightDepth);
};

const a = new TreeNode(3);
const b = new TreeNode(9);
const c = new TreeNode(20);
const d = new TreeNode(15);
const e = new TreeNode(7);

a.left = b;
a.right = c;

c.left = d;
c.right = e;


console.log(maxDepth(a));