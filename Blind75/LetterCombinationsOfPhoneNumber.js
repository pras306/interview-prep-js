// LEETCODE NO. 17

/*

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

*/

const letterCombinations = (digits) => {

    let phoneHash = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };

    let start = [];
    let stack = [];

    for (let digit of digits) {
        if (start.length === 0) start = phoneHash[parseInt(digit)];
        else stack.push(phoneHash[parseInt(digit)]);
    }

    while (stack.length > 0) {
        let end = stack.shift(0);
        let resArr = [];

        for (let i = 0; i < start.length; i++) {
            for (let j = 0; j < end.length; j++) {
                resArr.push(start[i] + end[j]);
            }
        }

        start = resArr.map(val => val);
    }

    return start;

};

console.log(letterCombinations("23"));
console.log(letterCombinations(""));
console.log(letterCombinations("2"));
console.log(letterCombinations("234"));