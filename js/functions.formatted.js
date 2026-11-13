// ═══════════════════════════════════════════
// 📘 simple function reusableFunction
// ═══════════════════════════════════════════

 /********************** simple function reusableFunction *****************************/
//   🔹 jab code future mein chala na ho to functions use hote
// jab code reuse karna ho to use karte
//   🔹 Parameters are variables that act as placeholders for the values that are to be input to a function when it is called.
// 🔹 koi bhi function agar kisi object k andar ho to us func ko method kehte hein.
  
// 💻
const fname = "zain";
  
const lname = "abidin";

function fullname(fName, lName) {
    console.log(`your name is ${fName} ${lName}`);
}

fullname(fname, lname);


function functionWithArgs (param1, param2) {
  console.log(param1 + param2);
}

functionWithArgs(1,2);
functionWithArgs(7,9);

console.log(functionWithArgs);



function reusableFunction(text) {
  console.log("Hi World");
}

reusableFunction();



// ═══════════════════════════════════════════
// 📘 function with return
// ═══════════════════════════════════════════

/********************** function with return *****************************/

// 💻
function fullName(fName, lName) {
    var z = `${fName} ${lName}`;
    return z;
}

var fn = fullName("zain", "uddin");

console.log(fn);

or

let fullName = function(fName, lName) {
    var z = `${fName} ${lName}`;
    return z;
}

var fn = fullName("zain", "uddin");

console.log(fn);



// ═══════════════════════════════════════════
// 📘 function total number
// ═══════════════════════════════════════════

/********************** function total number *****************************/

// 💻
function total(eng, math, sci) {
    let final = `your total number is ${eng + math + sci}`;
    return final;
}
let totalFinal = total(55, 78, 65);
console.log(totalFinal);

// ═══════════════════════════════════════════
// 📘 function total number perc
// ═══════════════════════════════════════════

/********************** function total number perc *****************************/

// 💻
function total(eng, math, sci) {
    let final = eng + math + sci;
    return final;
}

function percentage(per) {
    let perc = per / 300 * 100;
    return perc;
}

let totalFinal = total(55, 78, 65);

percentage(totalFinal);

console.log = `your % is ${percentage(totalFinal)}`;




// 🔹 In JavaScript, there are several ways to create functions. Here are the most common methods:

// 🔹 Function Declarations:
// 💻
function myFunction() {
  console.log("Hello, world!");
}
myFunction();

// 🔹 Function Expressions:
// 💻
const myFunction = function() {
  console.log("Hello, world!");
};
myFunction();

// 🔹 Arrow Functions:
// 💻
const myFunction = () => {
  console.log("Hello, world!");
};
myFunction();

// 🔹 Method Definitions (within objects):
// 💻
const obj = {
  myMethod() {
      console.log("Hello, world!");
  }
};
obj.myMethod();

// 🔹 Class Methods:
// 💻
class MyClass {
  myMethod() {
      console.log("Hello, world!");
  }
}
instance.myMethod();

// 🔹 Immediately Invoked Function Expressions (IIFE):
// 💻
(function() {
  console.log("Hello, world!");
})();

// 🔹 Constructor Functions:
// 💻
function MyConstructor() {
  console.log("Hello, world!");
}
const instance = new MyConstructor();

// 🔹 Generator Functions:
// 💻
function* myGenerator() {
  yield "Hello, world!";
}
const gen = myGenerator();

// 🔹 Call the generator function and retrieve the yielded value
// 💻
console.log(gen.next().value);  // Output: "Hello, world!"
// 🔹 Async Functions:
// 💻
async function myAsyncFunction() {
  await someAsyncOperation();
  console.log("Hello, world!");
}
// 🔹 Call the async function and handle the promise
// 💻
myAsyncFunction().then(() => {
  console.log("Async function has finished.");
});

const nameFunction = (name) => {  // 👈 yeh "name" PARAMETER hai
  console.log(`Hello! ${name}`);
};

nameFunction('zain');  // 👈 yeh 'zain' ARGUMENT hai
```

**Simple farq:**

| | Kya hai | Example |
|---|---|---|
| **Parameter** | Function define karte waqt jo variable likhte hain | `name` |
| **Argument** | Function call karte waqt jo actual value dete hain | `'zain'` |

**Ek aur simple tarike se socho:**

- **Parameter** = placeholder (khali jagah)
"- **Argument** = actual cheez jo us jagah jaati hai"

Toh jab `nameFunction('zain')` call hoga, `'zain'` ja ke `name` ki jagah baithega aur output hoga:
```
Hello! zain


// ============================================================
// 📘 With Factory Function
// ============================================================

// 💻
function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      console.log("Hello", this.name);
    }
  };
}

const user1 = createUser("Ali", 25);
const user2 = createUser("Ahmed", 30);
const user3 = createUser("Zain", 22);

user1.greet(); // "Hello Ali"
user2.greet(); // "Hello Ahmed"
user3.greet(); // "Hello Zain"

// ============================================================
// 📘 Proof ke ye alag alag objects hain
// ============================================================

// 💻
console.log(user1 === user2); // false — dono alag objects hain

// 🔹 "Factory function ek normal function hota hai jo object banake return karta hai. Jab ek hi structure ke multiple objects chahiye hon to factory function use karte hain taake code repeat na ho. Ye new keyword use nahi karta, bas ek plain function hai jo har call pe ek naya object return karta hai."

