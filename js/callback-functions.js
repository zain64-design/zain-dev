/********************** callback functions *****************************/

"//   Callback Function: a function that is passed as an argument to another function as value.";

"// Callback ek aisi function hoti hai jo kisi aur function ke parameter mein pass ki jaati hai aur ussi function ke andar kisi specific time par call ki jaati hai.";
"// Callback function named bhi ho sakti hai aur anonymous bhi.";

const hello = () => {
  console.log("Hello zain");
};
setTimeout(hello, 100);
//   or

const namedFn = () => {
  console.log("Hello, World!");
};
setTimeout(
  (cb) => {
    cb();
  },
  1000,
  namedFn,
);

// Callback Function:

("Callback function woh hoti hai jo ek function ke parameter mein pass ki jati hai taake woh function specific waqt par ya kisi specific event par call ho.");
("Is code mein namedFn ko setTimeout ke anonymous function ke cb parameter ke tor par pass kiya gaya hai. Jab cb() call kiya jata hai, to yeh namedFn function ko execute kar dega.");
("Isliye, namedFn yahan ek callback function ke tor par kaam kar raha hai.");

function greet(name, callback) {
  console.log("Hello, " + name);
  if (callback === "function") {
    callback();
  }
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Ali", sayGoodbye());
("yahan sayGoodbye ek callback function hai.");
