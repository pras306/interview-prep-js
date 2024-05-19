// LEETCODE NO. 714

/*

You are given an array prices where prices[i] is the price of a given stock on the ith day, and an integer fee representing a transaction fee.

Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.

Note:

You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
The transaction fee is only charged once for each stock purchase and sale.

*/

const maxProfit = (prices, fee) => {
    let n = prices.length;

    let buying = 0;
    let selling = -prices[0];

    for (let i = 0; i < n; i++) {
        buying = Math.max(buying, selling + prices[i] - fee);
        selling = Math.max(selling, buying - prices[i]);
    }

    return buying;
};


console.log(maxProfit([1, 3, 2, 8, 4, 9], 2));
console.log(maxProfit([1, 3, 7, 5, 10, 3], 3));