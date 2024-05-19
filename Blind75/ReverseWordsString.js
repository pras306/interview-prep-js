// LEETCODE NO. 151

/*

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

*/

const reverseWords = (s) => {
    let sArr = s.split(" ").filter(val => val.length > 0);
    let retArr = "";

    for (let i = sArr.length - 1; i > 0; i--) {
        retArr += sArr[i] + " ";
    }

    retArr += sArr[0];

    return retArr;

};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));