const isEven = (number) => number % 2 == 0;
const numbers = [1,2,3,4,5,6,7,8,9,10];


//Traditional search (first to last)
console.log(numbers.find(isEven));
console.log(numbers.findIndex(isEven));

//new reverse search (last to first)
console.log(numbers.findLast(isEven));
console.log(numbers.findLastIndex(isEven));


//2. second update - Array immutable methods
const original = [1,2,3,4];

//a.to sorted
let arr = [5,4,2,3,1];
console.log(arr === arr.sort());//true (hence sort is modifying the actual arr)
console.log(arr === arr.toSorted());//false ( toSorted is NOT modifying the actual arr)

//b.toReversed - this is also same as reversed

// const reversed = original.reverse();//existing method - this will modify the original arr
// console.log(original===reversed);

const reversed = original.toReversed();
console.log(original);//[ 1, 2, 3, 4 ]
console.log(reversed);//[ 4, 3, 2, 1 ]


//c. toSpliced

//tospliced also will not modify the original array
const arr2 = ["red", "orange", "yellow", "green", "blue", "purple"];
const newArr = arr2.toSpliced(2,1,"pink","cyan");
console.log(newArr);//['red','orange','pink','cyan','green','blue','purple']
console.log(newArr[3]);//cyan
console.log(arr2[3]);//green

//d. .with for replaced
const replaced = original.with(2,99);
console.log(original);//[ 1, 2, 3, 4 ]
console.log(replaced);//[ 1, 2, 99, 4 ]

//3. hasbang - to execute bash commands - learn later

//4.weakMap

const weak = new WeakMap();
const key = Symbol("ref");
weak.set(key,"Hello, ES2023!");
console.log(weak.get(key));//Hello, ES2023!


