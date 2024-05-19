// LEETCODE NO. 1004

/*

Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.


*/

const longestOnes = function (nums, k) {
    let left = 0;
    let right = 0;

    let maxConsecutiveOnes = 0;

    let previousOnesCount = 0;
    let zeroLimit = k;

    while ((zeroLimit > 0 || nums[right] === 1) && right < nums.length) {
        if (nums[right] === 0) zeroLimit -= 1;
        right += 1;
    }

    previousOnesCount = right - left;
    maxConsecutiveOnes = previousOnesCount;

    while (left < nums.length) {
        let onesCount = previousOnesCount;

        if (nums[left] === 0) {
            zeroLimit += 1;
            left += 1;

            while ((zeroLimit > 0 || nums[right] === 1) && right < nums.length) {
                if (nums[right] === 0) zeroLimit -= 1;
                right += 1;
            }

            onesCount = right - left;
            if (onesCount > maxConsecutiveOnes) maxConsecutiveOnes = onesCount;
            previousOnesCount = onesCount;

        }
        if (nums[left] === 1) {
            onesCount -= 1;
            left += 1;
        }
    }

    // while (left < nums.length) {
    //     let onesCount = 0;
    //     let zeroLimit = k;

    //     while ((zeroLimit > 0 || nums[right] === 1) && right < nums.length) {
    //         if (nums[right] === 0) zeroLimit -= 1;
    //         right += 1;
    //     }

    //     onesCount = right - left;

    //     if (onesCount > maxConsecutiveOnes) maxConsecutiveOnes = onesCount;

    //     left += 1;
    //     right = left;
    // }

    return maxConsecutiveOnes;

};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3));