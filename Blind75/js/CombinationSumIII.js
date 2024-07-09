// LEETCODE NO. 216

/*

Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

Only numbers 1 through 9 are used.
Each number is used at most once.
Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

*/

const combinationSum3 = (k, n) => {
    let res = [];

    let backtracking = (currentDigit, sum, elements) => {
        if (currentDigit > 9) return;
        if (sum > n) return;
        if (elements.length > k) return;

        if (sum === n && elements.length === k) {
            res.push(elements);
            return;
        }

        for (let i = currentDigit + 1; i <= 9; i++) {
            backtracking(i, sum + i, [...elements, i]);
        }
    }

    backtracking(0, 0, [])

    return res;
    // let res = [];

    // let helper = (currDigit, sum, elements) => {

    //     console.log(currDigit, sum, elements);
    //     if (currDigit > 9) return;
    //     if (sum > n) return;
    //     if (elements.length > k) return;

    //     if (sum === n && elements.length === k) {
    //         res.push(elements);
    //         return;
    //     }

    //     for (let i = currDigit + 1; i <= 9; i++) {
    //         helper(i, sum + 1, [...elements, i]);
    //         // console.log(i, currDigit, sum, elements);
    //     }

    // }

    // helper(0, 0, []);

    // return res;
};

console.log(combinationSum3(3, 7));
console.log(combinationSum3(3, 9));
console.log(combinationSum3(4, 1));