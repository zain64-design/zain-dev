/******************************* arrow functions ******************************/

// basic fat arrow fn
// arrow fat fn with one parameter
const fn = total => {return total;}
fn(5);
// arrow fat fn with implicit return
const fnNew = () => 2;
fnNew();

// default parameters wo hote hein jin ko defualt value asign kardi jaye function call karte waqt agar argument na dein to wo apni default value asign karde.

let total = (eng, math, sci) => {
    let final = eng + math + sci;
    return final;
}

let percentage = (per) => {
    let perc = per / 300 * 100;
    return perc;
}

let totalFinal = total(55, 78, 65);

percentage(totalFinal);

console.log = `your % is ${percentage(totalFinal)}`;

// diff b/w arrow function and normal function:

// normal function variations:

// 1) function declaration
function test()  {}
test();

// 2) function expression
// rule: if fn us used as value then it's a fn exp.
[1].map(function mapCallBack(value) {
    console.log(value);
    return value + 2;
})
mapCallBack();

// more examples:
const fun = function () {}; // assigned to variable => fn exp
[].map(function() {}); // passed as argument => fn exp
return function () {}; // returned => fn exp
const obj = { m: function() {}}; // part of obj => fn exp

// 3) named function expression
const x = function test() {
    console.log('test',test);
}
x();
// function exp mein jab bhi named fn exp create karte hein jo bhi name fn ko assign karte hein us name ko sirf named fn exp k andar hi use kar sakte hein for just recursive purpose


// characteristics of fun:

// 1) can be used before declaration:
showMessage();
function showMessage() {
    console.log('hey there');
}

// 2) har fn mein special keyword hota hai (this) or iski value default window obj hoti hai or iski value is par karti hai depend hum aik function ko aise call kar rahay hein
function showMessage() {
    console.log(this);
}
showMessage();
showMessage.call({name:'zain'});

// 3) duplicate param allow hote hein jab tak js mein use strict mode use na horaha ho:

function showMessage(num1,num2,num1) {
    console.log(num1,num2,num3);
}
showMessage(1,2,3);
// output : 3 2 3

// 4) hum reg fn ko as constructor Fn bhi use kar rahay hein but Fn ka first character capital hona chahiyay

// Constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// New object create karte hain
const myCar = new Car('Toyota', 'Corolla', 2021);

// Object ki properties ko access karna
console.log(myCar);

// Car() ek constructor function hai.

// this keyword ka use kiya jata hai taaki properties ko object ke saath bind kiya ja sake.

// new keyword use karte waqt constructor function call hota hai, aur ek naya object ban jata hai.

// 5) har function k andar aik special keyword exist karta hai arguments yai array nahi hote but structure array jaisa hota hai

function CarTwo() {
    console.log(arguments);
    console.log([...arguments]); //converting this into array
  this.make = make;
  this.model = model;
  this.year = year;
}

const myCarTwo = new CarTwo('Toyota', 'Corolla', 2021);
console.log(myCarTwo);
