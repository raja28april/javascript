'use strict';//if not used then there wont be any findings of indefined variables as given in line 6 "hasDrivingsLicense"

let hasDrivingLicense = false;
const passTest=true;

if(passTest) hasDrivingLicense=true;//hasDrivingLicense is misspelled 
if(hasDrivingLicense) console.log('I can drive😎');

// const interface = 10;//SyntaxError: Unexpected strict mode reserved word when using strict mode

const private = 20;//SyntaxError: Unexpected strict mode reserved word when using strict mode