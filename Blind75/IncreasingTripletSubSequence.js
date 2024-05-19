// LEETCODE NO. 334

/*

Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

*/

const increasingTriplet = (nums) => {
    let a = Infinity;
    let b = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (a >= nums[i]) a = nums[i];
        if (nums[i] > a && nums[i] <= b) b = nums[i];
        if (nums[i] > a && nums[i] > b) return true;
    }

    return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5]));
console.log(increasingTriplet([5, 4, 3, 2, 1]));
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));
console.log(increasingTriplet([0, 4, 2, 1, 0, -1, -3]));
