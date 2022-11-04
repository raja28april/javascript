# hoisting and Temporal dead zone (TDZ)

## for variables

dataType var can be used before initialization but it returns undefined
const and let CANNOT be used before initialization

## for functions

dataType var also CANNOT be used before initialization as it returns undefined and there wont be any function with undefined(something)

# should not use var because

if(!noOfProducts) deleteShoppingCart();//still deletes even noOfProducts is 10 because var returns falsy value 'undefined'
var noOfProducts = 10;

# why to use strict mode and this keyword notes;

1. spelling mistakes will be ignored in non strict modes
2. in normal functions this keyword points to window objects
3. in arrow functions this points to the nearest surronding object - here it is called as lexical this
