// LEETCODE NO. 1679

/*

You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.

*/

const maxOperations = (nums, k) => {
    let operations = 0;

    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        if (nums[left] + nums[right] > k) {
            right -= 1;
        } else if (nums[left] + nums[right] < k) {
            left += 1;
        } else {
            operations += 1;
            left += 1;
            right -= 1;
        }
    }

    return operations;

};

console.log(maxOperations([1, 2, 3, 4], 5));
console.log(maxOperations([3, 1, 3, 4, 3], 6));