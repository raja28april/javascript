//declaring an array way1:
let marks = Array(6);
console.log(marks);

//declaring an array way2:
let marks2 = new Array(20,30);
console.log(marks2);

//declaring an array way1:
let marks3 = [25,35,05,22,11];
console.log(marks3);

//array methods
console.log(marks3.length);
marks3.push(45);//to add elements at the end
console.log(`new marks3 array: ${marks3}`);
marks3.unshift(55)//to add elements at the beginning
console.log(`new marks3 array: ${marks3}`);
//index of
console.log(`indexOf method: ${marks3.indexOf(45)}`);
//includes method
console.log(`includes method: ${marks3.includes(45)}`);
//slice method
let newArrayFromSlice = marks3.slice(1,3);
console.log(`new array after slicing: ${newArrayFromSlice}`);
