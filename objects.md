# Object literals is the ususal way of creating objects eg: const a = {Key: "val"}

# key is called as property name

# dot and bracket notation - brackets allows some operation inside eg: obj[`first${name}`]

# returns undefined if property is not found

# order of precedence refernce:

Computed Member Access - Associativity is left to right
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

# why to use strict mode and 'this' keyword notes

1. spelling mistakes will be ignored in non strict modes
2. in normal functions this keyword points to window objects
3. this keyword in the object is used only inside functions
4. in arrow functions this points to the nearest surronding object - here it is called as lexical this
