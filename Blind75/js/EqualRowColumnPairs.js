// LEETCODE NO. 2352

/*

Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

*/

const equalPairs = (grid) => {
    let equalCounter = 0;
    let n = grid.length;
    let hashMap = {};

    for (let i = 0; i < n; i++) {
        let rowValue = '';
        for (let j = 0; j < n; j++) {
            rowValue += grid[i][j].toString() + '+';
        }

        if (rowValue in hashMap) {
            hashMap[rowValue] += 1;
        } else {
            hashMap[rowValue] = 1;
        }
    }

    for (let j = 0; j < n; j++) {
        let colVal = '';
        for (let i = 0; i < n; i++) {
            colVal += grid[i][j].toString() + '+';
        }

        if (colVal in hashMap) {
            // hashMap[colVal] += 1;
            equalCounter += hashMap[colVal];
        } else {
            hashMap[colVal] = 1;
        }
    }

    console.log(hashMap);

    return equalCounter;
};

console.log(equalPairs([[3, 2, 1], [1, 7, 6], [2, 7, 7]]));
console.log(equalPairs([[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]]));
console.log(equalPairs([[11, 1], [1, 11]]));
