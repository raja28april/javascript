function add(a,b){
    return a+b;
}

let sum = add(10,20);
console.log(sum);

//function with name
let additionOfTwoNos = function(a,b){
    return a+b;
}
console.log(additionOfTwoNos(2,3));

//arrow function

let sumOfTwoNos = (a,b)=>a+b;
console.log("arrowFunction - sumOfTwoNos: "+sumOfTwoNos(3,4));
