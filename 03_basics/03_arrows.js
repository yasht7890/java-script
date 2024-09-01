const user = {
    username : "yash",
    money : 19999999,
    welcomeMessage : function (){
        // console.log(`${this.username} , welcome to our website`); // this keyword use kia current context ke elements use krne kke liye 

        // console.log(this)    // sare current context btane ke liye
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// console.log(this) //(empty object) global context btane ke liye // browser pr window object aata hai
 
// function chai(){                         // jb obect ke bhar function bnya toh this kam ni kia undefined aaya
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


// ++++++++++++++++++++++++++++++++++++Arrow Function+++++++++++++++++++++++++++++=
// const chai =  () => {                       // function hta kr arrow lga di toh aroow function ban gya ..
//     let username = "hitesh"
//     console.log(this.username);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))

