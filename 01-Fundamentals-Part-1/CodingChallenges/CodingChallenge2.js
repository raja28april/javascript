/*Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀*/

const marksMass = 50, johnsMass = 45, marksHeight = 1.95, johnsHeight = 1.8;
const marksBMI = marksMass / marksHeight ** 2;
const johnsBMI = johnsMass/johnsHeight ** 2;
console.log(marksBMI, johnsBMI);

const markHigherBMI = marksBMI>johnsBMI;
console.log(markHigherBMI);

if(markHigherBMI){
    console.log("Mark's BMI is higher than John's!")
}else{
    console.log("John's BMI is higher than Mark's!");
}

//2
if(markHigherBMI){
    console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})!`)
}else{
    console.log(`Mark's BMI (${marksBMI}) is lower than John's (${johnsBMI})!`)
}