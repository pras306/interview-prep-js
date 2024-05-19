// LEETCODE NO. 435

/*

Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

*/

const eraseOverlapIntervals = function (intervals) {
    if (intervals.length < 2) return 0;

    let count = 0;

    intervals.sort((a, b) => a[1] - b[1]);
    let prev = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < prev[1]) count += 1;
        else prev = intervals[i];
    }

    return count;


};

console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]));
console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]]));
console.log(eraseOverlapIntervals([[1, 2], [2, 3]]));
console.log(eraseOverlapIntervals([[1, 100], [11, 22], [1, 11], [2, 12]]));

