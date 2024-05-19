// LEETCODE NO. 649

/*

In the world of Dota2, there are two parties: the Radiant and the Dire.

The Dota2 senate consists of senators coming from two parties. Now the Senate wants to decide on a change in the Dota2 game. The voting for this change is a round-based procedure. In each round, each senator can exercise one of the two rights:

Ban one senator's right: A senator can make another senator lose all his rights in this and all the following rounds.
Announce the victory: If this senator found the senators who still have rights to vote are all from the same party, he can announce the victory and decide on the change in the game.
Given a string senate representing each senator's party belonging. The character 'R' and 'D' represent the Radiant party and the Dire party. Then if there are n senators, the size of the given string will be n.

The round-based procedure starts from the first senator to the last senator in the given order. This procedure will last until the end of voting. All the senators who have lost their rights will be skipped during the procedure.

Suppose every senator is smart enough and will play the best strategy for his own party. Predict which party will finally announce the victory and change the Dota2 game. The output should be "Radiant" or "Dire".

*/

const predictPartyVictory = (senate) => {
    let dBanCounter = 0;
    let rBanCounter = 0;
    let counter = 0;

    let victory = false;
    let winner = "";

    while (!victory) {
        let i = counter % senate.length;

        if (senate[i] === "D") {
            if (dBanCounter === 0) {
                rBanCounter += 1;
            } else {
                senate = senate.substring(0, i) + 'X' + senate.substring(i + 1);
                dBanCounter -= 1;
            }
        }

        if (senate[i] === "R") {
            if (rBanCounter === 0) {
                dBanCounter += 1;
            } else {
                senate = senate.substring(0, i) + 'X' + senate.substring(i + 1);
                rBanCounter -= 1;
            }
        }

        if (i === senate.length - 1) {
            let dCounter = 0;
            let rCounter = 0;

            for (let round of senate) {
                if (round === 'D') dCounter += 1;
                if (round === 'R') rCounter += 1;
            }

            if (dCounter === 0) {
                victory = true;
                winner = "Radiant";
            }

            if (rCounter === 0) {
                victory = true;
                winner = "Dire";
            }
        }

        counter += 1;
    }

    return winner;

};

console.log(predictPartyVictory("RD"));
console.log(predictPartyVictory("RDD"));
console.log(predictPartyVictory("DDRRR"));
console.log(predictPartyVictory("DRRRD"));