// LEETCODE NO. 901

/*

Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.

The span of the stock's price in one day is the maximum number of consecutive days (starting from that day and going backward) for which the stock price was less than or equal to the price of that day.

For example, if the prices of the stock in the last four days is [7,2,1,2] and the price of the stock today is 2, then the span of today is 4 because starting from today, the price of the stock was less than or equal 2 for 4 consecutive days.
Also, if the prices of the stock in the last four days is [7,34,1,2] and the price of the stock today is 8, then the span of today is 3 because starting from today, the price of the stock was less than or equal 8 for 3 consecutive days.
Implement the StockSpanner class:

StockSpanner() Initializes the object of the class.
int next(int price) Returns the span of the stock's price given that today's price is price.

*/

var StockSpanner = function () {
    this.prices = [];
};

// class StockSpanner {
//     constructor() {
//         this.prices = [];
//     }

//     next(price) {
//         this.prices.push(price);
//         let spanCounter = 0;

//         for (let i = this.prices.length; i > 0; i--) {
//             if (this.prices[i - 1] <= price) spanCounter += 1;
//             else break;
//         }

//         return spanCounter;
//     }
// };

StockSpanner.prototype.next = function (price) {
    this.prices.push(price);
    let spanCounter = 0;

    for (let i = this.prices.length; i > 0; i--) {
        if (this.prices[i - 1] <= price) spanCounter += 1;
        else break;
    }

    return spanCounter;
};


var stockSpanner = new StockSpanner();

console.log(stockSpanner.next(100)); // return 1
console.log(stockSpanner.next(80));  // return 1
console.log(stockSpanner.next(60));  // return 1
console.log(stockSpanner.next(70));  // return 2
console.log(stockSpanner.next(60));  // return 1
console.log(stockSpanner.next(75));  // return 4, because the last 4 prices (including today's price of 75) were less tha) n or equal to today's price.
console.log(stockSpanner.next(85));  // return 6
