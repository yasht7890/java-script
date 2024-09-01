// Immediately Invoked Function Expressions (IIFE)

//kafi bar global scope ke pollutioon se problem hoti hai kafi bar toh global scope ke pollution 
//htane ke liye hum iife use krte hai :)

// jo function immediately execute ho jye ...

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('yash')