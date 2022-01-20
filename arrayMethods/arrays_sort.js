let fruits = ['apple','orange','banana']
console.log(fruits.sort());

let marks = [12,23,5,3,31,9,15]
console.log('default sort: '+marks.sort());
console.log('custom sort asc: '+marks.sort(function(a,b){
    return a-b;
}));
console.log('custom sort desc: '+marks.sort(function(a,b){
    return b-a;
}));


//custom sort in single line
console.log("custom sort in single line - asc: "+marks.sort((a,b)=>a-b));
console.log("custom sort in single line - asc: "+marks.sort((a,b)=>b-a));

//reverse the arrays
console.log("array in reverse order: "+marks.reverse());