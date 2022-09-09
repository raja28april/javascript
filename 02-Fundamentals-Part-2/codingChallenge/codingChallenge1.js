/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores �
GOOD LUCK 😊
*/
//Test1
const dolphinsScore1 = 44, dolphinsScore2 = 23, dolphinsScore3 = 71;
const koalasScore1 = 65, koalasScore2 = 54, koalasScore3 = 49;


//1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (score1,score2,score3)=>{
    return (score1+score2+score3)/3;
}

// 2. Use the function to calculate the average for both teams
    const dolphinsAverage = calcAverage(dolphinsScore1,dolphinsScore2,dolphinsScore3);
    const koalasAverage = calcAverage(koalasScore1,koalasScore2,koalasScore3);

/**
 * 
 * rules: A team only wins if it has at least double the average score of the other team Otherwise, no team wins!
 * 3. Create a function 'checkWinner' that takes the average score of each team
 * as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
 * to the console, together with the victory points, according to the rule above.
 * Example: "Koalas win (30 vs. 13)"
*/
const checkWinner = (avgDolphins,avgKoalas)=>{
    if(avgDolphins>=2*avgKoalas){
        console.log(`Dolphins win🏆 ${avgDolphins} vs ${avgKoalas}`);
    }else if(avgKoalas>=2*avgDolphins){
        console.log(`Koalas win🏆 ${avgKoalas} vs ${avgDolphins}`)
    }else{
        console.log('No team wins!')
    }
}

//Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
checkWinner(dolphinsAverage,koalasAverage);
// 5. Ignore draws this time


//Test2
const data2_dolphinsScore1 = 85, data2_dolphinsScore2 = 54, data2_dolphinsScore3 = 41;
const data2_koalasScore1 = 23, data2_koalasScore2 = 34, data2_koalasScore3 = 27;

const data2_dolphinsAverage = calcAverage(data2_dolphinsScore1,data2_dolphinsScore2,data2_dolphinsScore3);
const data2_koalasAverage = calcAverage(data2_koalasScore1,data2_koalasScore2,data2_koalasScore3);
checkWinner(data2_dolphinsAverage,data2_koalasAverage);
