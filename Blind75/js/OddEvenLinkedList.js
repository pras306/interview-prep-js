// LEETCODE NO. 328

/*

Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.

*/

function LinkedList(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

const oddEvenList = function (head) {

    if (head !== null) {
        let odd = head;
        let even = head.next;
        let evenHead = even;

        while (even && even.next !== null) {
            odd.next = even.next;
            odd = odd.next;

            even.next = odd.next;
            even = even.next
        }

        odd.next = evenHead;
    }

    return head;
};


let a = new LinkedList(7);
let b = new LinkedList(4, a);
let c = new LinkedList(6, b);
let d = new LinkedList(5, c);
let e = new LinkedList(3, d);
let f = new LinkedList(1, e);
let head = new LinkedList(2, f);

console.log(oddEvenList(head));