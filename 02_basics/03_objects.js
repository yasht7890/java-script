// Singleton
// Object.create  
// object literals
 
// const MySym = Symbol("key")
const mySym = Symbol("key1")

 
const JsUser = {
    name : "Yash",
    "full name" : "Yash Tyagi",
    age : 20,
    [mySym] : "key1",
    location : "Ghaziabad",
    email : "yash@gmail.com",
    isLoggedIn : false,
    lastLoginDays : [ "Monday","Saturday"]
}

// console.log(JsUser[mySym]);
// console.log(JsUser);

// JsUser.email = "Tyagiji@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "Yash@chat.com"


JsUser.greeting = function () {
    console.log("Hello JS User");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

