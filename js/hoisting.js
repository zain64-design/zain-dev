/******************************* Hoisting ******************************/
// Hoisting kya hai?
// Hoisting JS ka wo behavior hai jisme variable aur function declarations ko code execute hone se pehle uske scope ke top pe move kar diya jaata hai — ye kaam parsing phase mein hota hai. Actually code physically move nahi hota, balke JS pehle ek memory allocation phase run karta hai jisme wo saare var variables aur function declarations ko memory mein register kar leta hai unhe undefined se initialize karke. Phir execution phase mein actual code run hota hai. "Hoisting" koi official JS term nahi, ye developers ne apni understanding ke liye banaya hai.

// var key word variable and normal functions hoisted hosakte hein jis ka matlab in k jab bhi hum koi bhi variable decleare karte hein or usko declare karne se pehle use karte hein to aise hota hai like this:


console.log(name); // undefined — error nahi aaya kyunki var hoist hua
var name = "zain";

// JS ne internally aise kiya:
var name;           // parsing phase mein top pe aa gaya
console.log(name);  // undefined
name = "zain";      // execution phase mein value assign hui

// js mein code synchronously chalta hai top to bottom agar hum normal function use karte hein or usko pehle call karte hein to to js interpreter us normal function ko file k top par move kardeta hai. Lekin agar arrow fn use karte hein to is case mein yai function hoisted nahi hota.
// ✅ Normal function — hoist hoti hai, pehle call kar sakte ho
hoist(20, 50); // 70 — kaam karega

function hoist(a, b) {
  return a + b;
}

// ❌ Arrow function — hoist nahi hoti
notHoist(60, 50); // ReferenceError — TDZ mein hai

let notHoist = (a, b) => {
  return a + b;
}
// matlab k var ko banane se pehle usko use kar sakte hein

// js mein hoisting koi word nahi hota yai js developer ne khud ki understanding k liyay add kara hai.js ka code 2 phases mein execute hota hai 1st phase parsing/memory allocation phase hoti hai jis mein scope setting and initialization hojata hai and is hi phase mein js saray var ka scope and default value set kardeta hai or jab code execute hota hai to already js ko pata hota hai k mujhay variable kahan mile ge.

/******************************* Function Hoisting ******************************/

// js pehle is code ko dekhe ga ya syntactically sahi hai to isko discart kardega then agay jayyega
show();
// yahan isko fn declaration milega hoist name se global scope mein to js isko global scope mein add kardega uske bad function k andar jayege or or check karega inside fn statement sahi ya expression syntactically sahi hai k nahi phr agay jayega or isko var milega to phr js is function k liyay lexical scope create karega or is mein yai var add kardega or check karega var let se create hua hai k var se agar var se create hua hai to us variable ko initialize kardega and us mein wo undefine value assign hojayegi ab hamara parsing phase khatam. ab execution phase hoga ab show(); function ko call kara jayega during function execution js check karega k kya mere global scope mein show function hai usko fun milega or wo simply us function ko call karega uske bad log wali line par eyega or check karega function k lexical scope mein yai var hai kya usko var milega jo k undefine milega
show(); // ✅ kaam karega — parsing phase mein already register ho chuka

function show() {
  console.log('age:', age); // undefined — var age hoist hua but value nahi
  var age = 90;
}

console.log(name2); // undefined — var hoist hua
var name2 = 'zain';

// Parsing phase mein kya hua:

// show function global scope mein register hua
// name2 variable global scope mein undefined se initialize hua
// age variable show() ke lexical scope mein undefined se initialize hua

// Execution phase mein kya hua:

// show() call hua — age abhi undefined tha isliye wahi print hua
// name2 ki value undefined print hui
// Phir name2 = 'zain' assign hua


// "Hoisting JS ka wo mechanism hai jisme parsing phase ke dauran var variables aur function declarations memory mein register ho jaate hain — var undefined se initialize hota hai aur normal functions poori tarah available hoti hain. let aur const hoist toh hote hain but TDZ ki wajah se access nahi kar sakte. Arrow functions let/const se banti hain isliye wo bhi hoist nahi hoti."
