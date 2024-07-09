// LEETCODE NO. 1448

/*

Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.
 

*/

/**
 * Definition for a binary tree node.
*/
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
};

const goodNodes = function (root) {
    if (root === null) return 0;

    return maxToRoot(root, root.val);
};

const maxToRoot = (root, maxValue) => {
    let goodNodesCount = 0;

    if (root.val >= maxValue) {
        goodNodesCount += 1;
        maxValue = root.val;
    }

    if (root.left) goodNodesCount += maxToRoot(root.left, maxValue);

    if (root.right) goodNodesCount += maxToRoot(root.right, maxValue);

    return goodNodesCount;
};

const a = new TreeNode(3);
const b = new TreeNode(1);
const c = new TreeNode(4);
const d = new TreeNode(3);
const e = new TreeNode(1);
const f = new TreeNode(5);


const g = new TreeNode(3);
const h = new TreeNode(3);
const i = new TreeNode(4);
const j = new TreeNode(2);

a.left = b;
a.right = c;

b.left = d;

c.left = e;
c.right = f;

g.left = h;

h.left = i;
h.right = j;

console.log(goodNodes(a));
console.log(goodNodes(g));