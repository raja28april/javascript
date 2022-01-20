let cred = {
    username: 'raja',
    password: 'pass'
}
console.log(cred.username)
console.log(cred['password'])

cred.username = 'raja28'
cred.userType='retail'

console.log("after adding a property: ")
console.log(cred)

delete cred.userType
console.log("after deleting a property: ")
console.log(cred)

console.log('userType' in cred)
console.log('username' in cred)
console.log('******for each*****')
for(key in cred){
    console.log(cred[key])
}
console.log("*********funciton inside a property*********")
//function in a property
let person = {
    firstname: 'abc',
    lastname: 'cde',
    age: 24,
    fullName: function(){
        return this.firstname+" "+ this.lastname
    }
}

console.log(person.fullName())