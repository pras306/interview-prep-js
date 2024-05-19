// LEETCODE NO. 1768

/*

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

*/

const mergeAlternately = (word1, word2) => {
    let ptr1 = 0;
    let ptr2 = 0;
    let res = '';

    while (ptr1 < word1.length && ptr2 < word2.length) {
        // res = res.concat(word1[ptr1]);
        // res = res.concat(word2[ptr2]);
        res += word1[ptr1];
        res += word2[ptr2];
        ptr1 += 1;
        ptr2 += 1;
    }

    if (ptr1 < word1.length) {
        res = res.concat(word1.substring(ptr1));
    }

    if (ptr2 < word2.length) {
        res = res.concat(word2.substring(ptr2));
    }

    return res;
};

console.log(mergeAlternately('abc', 'pqr'));
console.log(mergeAlternately('ab', 'pqrs'));
console.log(mergeAlternately('abcd', 'pq'));