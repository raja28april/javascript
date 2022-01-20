class Person {
    age = 30

    get location(){
        return "India"
    }

    //constructors
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    fullName() {
        console.log(this.firstName+" "+this.lastName)
    }
}

let person = new Person()

console.log(person.age)
console.log(person.location);

let person2 = new Person("Kay","Kaadhu")
console.log(person2.fullName());

module.exports = new Person();