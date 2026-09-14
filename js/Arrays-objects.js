/********************** Arrays *****************************/

"push(9) add value at the end of an array";
"pop() remove value at the end of an array";
"unshift(1) add value at the start of an array";
"shift() remove value at the start of an array";
"slice() show that only index value that we give in that method";
"splice(5,9) remove value at the given index number of an array and how many value will remove";

let array = ["zain", "ahsan", "sohaib", "hammad", "billi", "hamza"];
array.pop();
//   ['zain', 'ahsan', 'sohaib', 'hammad', 'billi']

array.push("hamza");
// ['zain', 'ahsan', 'sohaib', 'hammad', 'billi', 'hamza']

array.shift();
// ['ahsan', 'sohaib', 'hammad', 'billi']

array.unshift("zain");
// ['zain', 'ahsan', 'sohaib', 'hammad', 'billi']

array.slice(2, 5);
// ['sohaib', 'hammad', 'billi']

// Basic Usage:
const arr = [1, 2, 3, 4, 5];
const sliced = arr.slice(1, 4);
"arr.slice(start, end):"
"start: The index at which to start the extraction (inclusive{this index will includes in the array}) removed that all element before that index number and start from the current index number."
"end: The index at which to stop the extraction (exclusive{this index will not include in that array  and all elements after it}) removed the given index number and after that all elements also."
console.log(sliced); // [2, 3, 4]

let array = [
  "zain",
  "ahsan",
  "sohaib",
  "hammad",
  "bilal",
  "hamza",
  "pasta",
  "ghata",
  "vohra",
];

array.slice(1, 4);

const arr = [1, 2, 3, 4, 5, 6];

arr.slice(1, 4);

// Omitting end:
const arr = [1, 2, 3, 4, 5];
const sliced = arr.slice(2); // Extracts elements from index 2 to the end
console.log(sliced); // [3, 4, 5]

// Negative Indices:
const arr = [1, 2, 3, 4, 5];
const sliced = arr.slice(-4, -1); // Extracts all elements the end of the array if we give start value in -4 it will exclusive (this index will not include in array) and we give end value of index in -1 it will inclusive (this index will includes in the array)
console.log(sliced); // [2, 3, 4]

// Empty Slice:
const arr = [1, 2, 3, 4, 5];
const sliced = arr.slice(5, 10); // `start` is beyond the array length
console.log(sliced); // []

// No Parameters:
const arr = [1, 2, 3, 4, 5];
const sliced = arr.slice(); // Copies the entire array
console.log(sliced); // [1, 2, 3, 4, 5]

("start (index -10): Treat kiya gaya as 0, jo ke array ka start hai.");
("end (index -10): Treat kiya gaya as 0, jo ke start index ke barabar hai.");

("Immutability: The slice method does not change the original array; it creates a new array with the specified portion.");
("Return Value: It always returns a new array, even if it's an empty array.");
("Index Handling: start and end can be negative to specify positions relative to the end of the array.");

array.splice(1, 3);
// ['ahsan', 'sohaib', 'hammad']

console.log(array[3]);

/********************** Arrays constuctor method *****************************/

let array = new Array(
  "zain",
  "ahsan",
  "sohaib",
  "hammad",
  "billi",
  "hamza actor",
);

console.log(array[3]);

/***************************************************/
let value = new Array(2);

value[0] = "zain";
value[1] = "ul";
value[2] = "Abidin";

console.log(value);

/************************ Array with for loop ***************************/

let value = new Array(3);

for (let g = 0; g < 3; g++) {
  value[g] = prompt("enter value");
}

document.write(value);

/************************ Multi dimensional Array ***************************/

let data = [
  ["ali", 18, "front end developer", "0342118926"],
  ["shahid", 21, "front end developer", "0322118926"],
  ["sohaib", 28, "front end developer", "0352118926"],
  ["shahida", 25, "front end developer", "0312118926"],
];

document.write(data[2][3]);

/************************ Object ***************************/
//   object mein hamesha string keys rakhi jati hain

let a = {
  firstName: "zain",
  midName: "ul",
  lastName: "abidin",
  designation: "front-end developer",
  address: "5-a-7/15 nazimabad no. 5 karachi pakistan",
  hobbies: ["gaming", "swimming", "traveling"],
  fullName: function () {
    return `${this.firstName}${this.lastName}`;
  },
};
console.log(a.fullName());

/************************ Object Second Method ***************************/
// We created an object with the help of a new keyword
//executor
let person = new Object();

person.firstName = "zain";
person.lastName = "ul abidin";
person.age = 25;

console.log(person.age);

/************************ Object Map Method ***************************/

let a = [
  {
    firstName: "zain",
    lastName: "ul abidin",
    designation: "front-end developor",
    age: "25",
  },
  {
    firstName: "ali",
    lastName: "hassan",
    designation: "front-end developor",
    age: "28",
  },
  {
    firstName: "saqib",
    lastName: "ali",
    designation: "front-end developor",
    age: "26",
  },
];

let b = a.map(fullname);
document.write(b);

function fullname(x) {
  return `${x.firstName} ${x.lastName}`;
}
/************************ how to copy reference values using spread operator in obj ***************************/

let a = {
  firstName: "zain",
  lastName: "ul abidin",
  designation: "front-end developor",
  age: "25",
}; // reference data type
let b = { ...a }; // give reference a to b
delete a.age;
console.log(a);
console.log(b);

/************************ function inside object called method ***************************/

("koi bhi function agar kisi object k andar ho to us func ko method kehte hein.or us func mein this keyword ki value parent obj k equal hoti hai");

let methodFunctionOne = {
  insideFunc: function () {
    console.log(this);
  },
};

methodFunctionOne.insideFunc();

("agar this keyword global function mein ho to uski value window obj hoti hai:");
("agar this keyword nested function mein ho to uski value window obj hoti hai:");
("agar this keyword obj k nested function mein ho to usko method kehte or us ki value Obj hoti hai ");
const zain = () => {
  console.log("outer fn", this);
  const ali = () => {
    console.log("inner fn", this);
  };
  ali();
};
zain();

let methodFunctionTwo = {
  firstName: "zain",
  midName: "ul",
  lastName: "abidin",
  designation: "front-end developer",
  address: "5-a-7/15 nazimabad no. 5 karachi pakistan",
  hobbies: ["gaming", "swimming", "traveling"],
  fullName: function () {
    return `${this.firstName}${this.lastName}`;
  },
};
methodFunctionTwo.fullName();
/************************ call, apply, bind ***************************/
function callfunction1(val1, val2, val3) {
  console.log(this.age, val1, val2, val3);
}

let object = {
  age: 28,
};
callfunction1.call(object, 1, 2, 3);

("callfunction1 function ko object ke context mein invoke kiya jata hai, aur arguments 1, 2, 3 directly pass kiye jate hain.");

function callfunction2(val1, val2, val3) {
  console.log(this.age, val1, val2, val3);
}

let object1 = {
  age: 28,
};
callfunction2.apply(object1, [1, 2, 3]);

function callfunction3(val1, val2, val3) {
  console.log(this.age, val1, val2, val3);
}

let object2 = {
  age: 28,
};

var funcBind = callfunction3.bind(object2);

funcBind(1, 2, 3);

// Invocation:

("call aur apply methods function ko immediately invoke karte hain.");
("bind method function ko bind karta hai aur ek nayi function return karta hai, jo baad mein invoke kiya ja sakta hai.");
("Arguments:");

("call method arguments ko comma-separated list ke roop mein accept karta hai.");
("apply method arguments ko array ke roop mein accept karta hai.");
("bind method initial arguments ko accept karta hai aur unko bound function mein use karta hai.");
("Usage:");

("call aur apply methods function ko turant execute karte hain with provided this context.");
("bind method ek nayi function create karta hai jo specified this context ke sath future mein call kiya ja sakta hai.");

function checkObject() {
  const person = new Object();
  const name = {};

  if (person === name) {
    consol.log("both same");
  } else {
    console.log("not same");
  }
}

checkObject();

("Objects mein === value compare nahi karta — reference compare karta hai. Do alag objects chahe bilkul same content rakhte hon, alag memory locations pe hote hain isliye === hamesha false deta hai. Agar value compare karni ho to JSON.stringify() use karte hain. Primitives mein ulta hota hai — === value compare karta hai.");

("Dono empty object banate hain aur dono ka prototype Object.prototype hota hai — functionally same hain. Lekin {} recommended hai kyunki concise hai aur thoda faster hai — directly memory mein object banta hai. new Object() mein value pass kar sakte hain jo us type ka object bana deta hai, lekin real projects mein ye use nahi hota.");
