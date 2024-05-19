// LEETCODE NO. 2336

/*

You have a set which contains all positive integers [1, 2, 3, 4, 5, ...].

Implement the SmallestInfiniteSet class:

SmallestInfiniteSet() Initializes the SmallestInfiniteSet object to contain all positive integers.
int popSmallest() Removes and returns the smallest integer contained in the infinite set.
void addBack(int num) Adds a positive integer num back into the infinite set, if it is not already in the infinite set.
 

*/

var SmallestInfiniteSet = function () {
    this.infinteSet = new Set(Array(1000).fill().map((_, i) => i + 1));
};

SmallestInfiniteSet.prototype.popSmallest = function () {
    let smallestPosInt = 1;
    let retVal = 0;

    while (retVal === 0) {
        if (!this.infinteSet.has(smallestPosInt)) {
            smallestPosInt += 1;
        } else {
            retVal = smallestPosInt;
            this.infinteSet.delete(smallestPosInt);
        }
    }

    return retVal;
};

SmallestInfiniteSet.prototype.addBack = function (num) {
    this.infinteSet.add(num);
};


var smallestInfiniteSet = new SmallestInfiniteSet();
console.log(smallestInfiniteSet.addBack(2)); // 2 is already in the set, so no change is made.
console.log(smallestInfiniteSet.popSmallest()); // return 1, since 1 is the smallest number, and remove it from the set.
console.log(smallestInfiniteSet.popSmallest()); // return 2, and remove it from the set.
console.log(smallestInfiniteSet.popSmallest()); // return 3, and remove it from the set.
console.log(smallestInfiniteSet.addBack(1)); // 1 is added back to the set.
console.log(smallestInfiniteSet.popSmallest()); // return 1, since 1 was added back to the set and
// is the smallest number, and remove it from the set.
console.log(smallestInfiniteSet.popSmallest()); // return 4, and remove it from the set.
console.log(smallestInfiniteSet.popSmallest()); // return 5, and remove it from the set.