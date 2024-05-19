// LEETCODE NO. 933

/*

You have a RecentCounter class which counts the number of recent requests within a certain time frame.

Implement the RecentCounter class:

RecentCounter() Initializes the counter with zero recent requests.
int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, and returns the number of requests that has happened in the past 3000 milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range [t - 3000, t].
It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.

*/

var RecentCounter = function () {
    this.requests = [];
};

RecentCounter.prototype.ping = function (t) {
    this.requests.push(t);
    let ringCounter = 0;

    let lowerTimeLimit = t - 3000;
    let upperTimeLimit = t;

    for (let i = 0; i < this.requests.length; i++) {
        if (lowerTimeLimit <= this.requests[i] && this.requests[i] <= upperTimeLimit) {
            ringCounter += 1;
        }
    }

    return ringCounter;
};

var recentCounter = new RecentCounter();
console.log(recentCounter.ping(1));     // requests = [1], range is [-2999,1], return 1
console.log(recentCounter.ping(100));   // requests = [1, 100], range is [-2900,100], return 2
console.log(recentCounter.ping(3001));  // requests = [1, 100, 3001], range is [1,3001], return 3
console.log(recentCounter.ping(3002));  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3