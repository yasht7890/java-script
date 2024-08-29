//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Yash",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


// *******************************************************************************************

// Stack(printive)  heap(non-printive)

let naame = "Yash"
let anotherName = naame


anotherName = "Tyagi"
console.log(naame);
console.log(anotherName);

let userOne = {
    email : "yash@gmail.com",
    upi : "yash@naviaxis"

}
let userTwo = userOne

userTwo.email = "tyagi@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);