let marks = [10,20,30,40,50]
let sum = 0;
for(let i=0;i<marks.length;i++){
    sum=sum+marks[i]
}
console.log(`sum of all elements in array using for loop: ${sum}`);

//reduce
let sumUsingReduce = marks.reduce((sum,mark)=>sum+mark,0);
console.log(`sum of all elements in array using reduce method: ${sum}`);

//logic to push only even numbers into new array from an array
let numbers = [13,14,15,17,18,20,21];
let newArray=[];
for(let i =0; i<numbers.length; i++){
    if(numbers[i]%2==0){
        newArray.push(numbers[i])
    }
}
console.log(`Using for loop - newArray with only even numbers: ${newArray}`)

//above logic using filter
let newArrayUsingFilters = numbers.filter(number=>number%2==0);
console.log(`Using filter method - newArray with only even numbers: ${newArrayUsingFilters}`)

//map method
let mappedArray = newArrayUsingFilters.map(number=>number*3)
console.log(`Using map method - to perform action on each element and store in a new array: ${mappedArray}`)


//reduce, filter and map together
let totVal = numbers.filter(number=>number%2==0).map(number=>number*3).reduce((sum,num)=>sum+num,0);
console.log(totVal);