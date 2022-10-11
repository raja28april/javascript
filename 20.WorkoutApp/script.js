'use strict';

const getData = function () {
    // let reps = Number(document.querySelector('.Repeat').value);//2
    // let repSecs = Number(document.querySelector('.repSeconds').value);//5
    // let waitSecs = Number(document.querySelector('.waitSeconds').value);//3
    let reps = 2;
    let repSecs = 5;
    let waitSecs = 3;

    const temp = repSecs;
    // let displaySecs = document.querySelector('.secondsRunning');
    // let displayReps = document.querySelector('.repsCompleted');
    const start =
        setInterval(() => {
            if (repSecs <= 1) {
                clearInterval(start);
            }
            console.log(temp - repSecs+1);
            repSecs -= 1;
        }, 1000);
}
getData();
// document.querySelector('.start').addEventListener('click', getData);

/**
 * 1. get the value of reps
 * 2. get the value of each repsTime
 * 3. get the value of each repsWaitTime
 * 
 * 
 * 4.Display from rep 1 
 * 5. For each rep show the seconds started from 0 to respTime
 * 6. Then start the waitsecs from repsWaitTime to 0
 * 7. then increase the rep value by 1 and 
 * 8. repeat steps 5 to 7 until rep count is reached
 * 
 *  */

