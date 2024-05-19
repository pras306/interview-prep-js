// LEETCODE NO. 2095

/*

You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

*/

function LinkedList(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

const deleteMiddle = function (head) {
    let left = 0;
    let right = 0;
    let node = head;

    while (node.next !== null) {
        node = node.next;
        right += 1;
    }

    let n = right - left + 1;

    let middle = Math.floor(n / 2);
    node = head;
    let prevNode = head;

    while (left < middle) {
        prevNode = node;
        node = node.next;
        left += 1;
    }

    let nextNode = node.next;

    prevNode.next = nextNode;

    return head;

};

let a = new LinkedList(6);
let b = new LinkedList(2, a);
let c = new LinkedList(1, b);
let d = new LinkedList(7, c);
let e = new LinkedList(4, d);
let f = new LinkedList(3, e);
let head = new LinkedList(1, f);

console.log(deleteMiddle(head));