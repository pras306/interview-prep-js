// LEETCODE NO. 2300

/*

You are given two positive integer arrays spells and potions, of length n and m respectively, where spells[i] represents the strength of the ith spell and potions[j] represents the strength of the jth potion.

You are also given an integer success. A spell and potion pair is considered successful if the product of their strengths is at least success.

Return an integer array pairs of length n where pairs[i] is the number of potions that will form a successful pair with the ith spell.


*/

const successfulPairs = function (spells, potions, success) {
    // let pairsArray = [];

    // for (let i = 0; i < spells.length; i++) {
    //     let successCounter = 0;
    //     for (let j = 0; j < potions.length; j++) {
    //         if (spells[i] * potions[j] >= success) successCounter += 1;
    //     }
    //     pairsArray.push(successCounter);
    // }

    // return pairsArray;

    let pairsArray = [];
    potions.sort((a, b) => a - b);

    for (let i = 0; i < spells.length; i++) {
        let minimumSuccess = Math.ceil(success / spells[i]);
        let successIndex = 0;

        let start = 0;
        let end = potions.length - 1;

        while (start <= end) {
            let middle = parseInt((start + end) / 2);

            if (potions[middle] < minimumSuccess) {
                start = middle + 1;
                successIndex = start;
            } else {
                end = middle - 1;
            }
        }

        pairsArray.push(potions.length - successIndex);
    }

    return pairsArray;
};

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7));
console.log(successfulPairs([3, 1, 2], [8, 5, 8], 16));
console.log(successfulPairs([15, 8, 19], [38, 36, 23], 328));