/********************** first class functions *****************************/
("aise functions jinko hum kisi bhi function k argument mein pass kar k kisi dosre function k param var mein store kar sake")
("Functions ko variables mein store kar sakte hain.")
("Functions ko as arguments kisi doosre function mein pass kar sakte hain.")
("Functions ko ek function se return bhi kar sakte hain.")

("First-Class Functions: Yeh ek programming language ka feature hai jo allow karta hai ke functions ko treat kiya ja sakay jaise dusri values ko treat kiya jata hai. Inki properties mein include hota hai function ka variable mein store hona, argument mein pass hona, return hona, etc.");

// Example 1: Functions assigned to variables JavaScript mein functions ko directly variables mein assign kiya ja sakta hai, kyunki functions first-class citizens hain.

const greet = function () {
  console.log("Hello, World!");
};

greet(); // Output: Hello, World!

// Example 2: Functions passed as arguments Ek function ko doosre function mein as an argument pass kiya ja sakta hai.

function executeCallback(callback) {
  callback();
}

function sayHello() {
  console.log("Hello!");
}

executeCallback(sayHello); // Output: Hello!

// Example 3: Functions returned from other functions  Ek function doosre function ko return kar sakta hai.

function createMultiplier(multiplier) {
  return function (value) {
    return value * multiplier;
  };
}

const double = createMultiplier(2); // Returns a function that doubles a value
console.log(double(5)); // Output: 10

("high order functions: a function which takes another function as an argument(parameters) is called a higher order function");
// 1. Storing in a variable
const greet = function () {
  console.log("Hello!");
};

// 2. Passing as an argument
function executeFunction(fn) {
  fn(); // Here the function is called
}

executeFunction(greet); // "Hello!" will be printed

// 3. Returning a function from another function
function createGreeter() {
  return function () {
    console.log("Hi there!");
  };
}

const greeter = createGreeter();
greeter(); // "Hi there!" will be printed

("First-Class Functions ka concept yeh define karta hai ke ek function ko kisi variable mein store kiya ja sakta hai, dusre function ke argument ke tor par pass kiya ja sakta hai, ya kisi function se return kiya ja sakta hai. Yeh features high-order functions ke liye zaroori hain.");

("High-Order Functions: Yeh specific functions hote hain jo dusre functions ko as argument accept karte hain ya dusre functions ko return karte hain. High-order functions ke liye pehle se functions ka first-class honi zaroori hai.");

("High-Order Functions wo hote hain jo ya to ek ya zyada functions ko as argument accept karte hain, ya ek function ko return karte hain. Yeh kaam tabhi possible hote hain jab functions ko ek normal value ke tarah treat kiya ja sake, jo sirf tabhi possible hai jab functions first-class citizens hoon.");

"High-order functions ka hona directly is baat par depend karta hai ke us language mein functions ko first-class treat kiya jata hai ya nahi. Agar functions first-class nahi hain, to high-order functions ka hona impossible hai."(
  "// Assigning Functions to Variables: You can store functions in variables.",
);
("// Passing Functions as Arguments: Functions can be passed as arguments to other functions.");
"// Returning Functions from Other Functions: Functions can return other functions."(
  "// Storing Functions in Data Structures: Functions can be stored in arrays, objects, and other data structures.",
);
