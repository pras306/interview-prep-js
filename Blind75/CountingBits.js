// LEETCODE NO. 338

/*

Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.


*/

const countBits = function (n) {
    let ans = Array(n + 1).fill(0);
    let binary = Array(n + 1).fill(0);

    for (let i = 0; i < n + 1; i++) {
        binary[i] = i.toString('2');
    }

    for (let i = 0; i < binary.length; i++) {
        let oneCounter = 0;
        for (let char of binary[i]) {
            if (char === '1') oneCounter += 1;
        }
        ans[i] = oneCounter;
    }

    return ans;
};

console.log(countBits(2));
console.log(countBits(5));