// LEETCODE NO. 136

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

const singleNumber = (nums) => {
    let numbersMap = {};

    for (let num of nums) {
        if (num in numbersMap) {
            numbersMap[num] += 1;
        } else {
            numbersMap[num] = 1;
        }
    }

    for (let number in numbersMap) {
        if (numbersMap[number] === 1) return number;
    }
};


console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));