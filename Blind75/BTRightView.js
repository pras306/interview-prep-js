// LEETCODE NO. 199

/*

Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

*/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
};

var rightSideView = function (root) {
    if (root === null) return [];

    let stack = [root, 's'];
    let rightSideArray = [];

    while (stack.length > 1) {
        let current = stack.shift();

        if (current === 's') {
            stack.push('s');
        } else {
            if (current) {
                if (stack[0] === 's') rightSideArray.push(current.val);
            }

            if (current.left) stack.push(current.left);
            if (current.right) stack.push(current.right);
        }
    }

    return rightSideArray;
};

const a = new TreeNode(1);
const b = new TreeNode(2);
const c = new TreeNode(3);
const d = new TreeNode(4);
const e = new TreeNode(5);

a.left = b;
a.right = c;

b.right = e;

c.right = d;

console.log(rightSideView(a));