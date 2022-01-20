let day = 'Tuesday '
console.log("length before trim: "+day.length)

let subDay = day.slice(0,4);
console.log("sliced value: "+subDay)
console.log("letter in index 1: "+day[1]);

let splitDay = day.split('s');
console.log("split part1: "+splitDay[0])
console.log("split part2: "+splitDay[1])

console.log("length after trim: "+day.trim().length)


let date = '23';
let nextDate = '27';

let diff = parseInt(nextDate) - parseInt(date);
console.log("difference after parsing to integer: "+diff)
diff.toString()

let newQuote = day +" is funday";
console.log(newQuote)

let val = newQuote.indexOf("day")
console.log("index of first occurrence of letters: "+val)

val = newQuote.indexOf("day",5)
console.log("index after few letters: "+val)