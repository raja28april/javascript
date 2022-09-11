// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*console.log('live-server node package')

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function(temps1,temps2){
    let temps = temps1.concat(temps2)
    let max,min;
    for(let i=0; i<temps.length;i++){
        if(typeof temps[i]!=='number') continue;
        max = min = temps[i];
        break;
    }
    for(let i=0;i<temps.length;i++){
        if(typeof temps[i]!=='number') continue;
        if(temps[i]>max) max=temps[i];
        if(temps[i]<min) min=temps[i];
    }
 console.log(max,min);

}

calcTempAmplitude(['error',25,'8',4]);
calcTempAmplitude(temperatures);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays
calcTempAmplitude(['error',25,'8',4],temperatures);

*/
/*
///////////////////////////////////////
// Debugging with the Console and Breakpoints
const measureKelvin = function () {
    const measurement = {
      type: 'temp',
      unit: 'celsius',
  
      // C) FIX
      // value: Number(prompt('Degrees celsius:')),
      value: 10,
    };
  
    // B) FIND
    console.table(measurement);
  
    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);
  
    const kelvin = measurement.value + 273;
    return kelvin;
  };
  // A) IDENTIFY
  console.log(measureKelvin());
*/

  ///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
/**
 * Questions:
 * 1. What is the total number of days?
 * 
 * Divide and conquer:
 * 1. Transform each array element into string
 * 2. Transform each array element into string with ºC
 * 3. String needs to contain days(index+1)
 * 4. Add ... between elements and start and end of the string
 */

const data1 =[17, 21, 23];
const data2 =[12, 5, -5, 0, 4];

const printForecast = function(data){
    let str = '...';
    for(let i =0;i<data.length;i++){
        str = `${str} ${data[i]}ºC in ${i+1} days ...`;
    }
    console.log(str);
}
printForecast(data1);
printForecast(data2);


