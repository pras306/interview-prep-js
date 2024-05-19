// LEETCODE NO. 1456

/*

Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.


*/

const maxVowels = function (s, k) {
    let left = 0;
    let right = k;
    let vowels = {
        'a': 'a',
        'e': 'e',
        'i': 'i',
        'o': 'o',
        'u': 'u'
    };
    let maxVowelsCount = 0;
    let lastVowelCount = 0
    let testStr = s.substring(left, right);

    for (let char of testStr) {
        if (char in vowels) lastVowelCount += 1;
    }

    maxVowelsCount = lastVowelCount;

    while (right <= s.length) {
        let vowelCount = lastVowelCount;
        if (s[left] in vowels) vowelCount -= 1;

        if (s[right] in vowels) vowelCount += 1;


        left += 1;
        right += 1;

        if (vowelCount > maxVowelsCount) maxVowelsCount = vowelCount;
        lastVowelCount = vowelCount;
    }
    // while (right <= s.length) {
    //     let test = s.substring(left, right);
    //     let vowelCount = 0;

    //     for (let char of test) {
    //         if (char in vowels) vowelCount += 1;
    //     }

    //     if (vowelCount > maxVowelsCount) maxVowelsCount = vowelCount;

    //     left += 1;
    //     right += 1;
    // }

    return maxVowelsCount;
};

console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("aeiou", 2));
console.log(maxVowels("leetcode", 3));
console.log(maxVowels("ibpbhixfiouhdljnjfflpapptrxgcomvnb", 33));