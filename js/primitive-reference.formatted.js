// ═══════════════════════════════════════════
// 📘 primitive-reference
// ═══════════════════════════════════════════

// 🔹 Types in js

// 💻
primitives = number , String , Boolean , undefined ,null ,bigint
// 🔹 primitive data types in immutable hoti hein jo k change nahi hoti hein

// 🔹 undefine default value hoti hai.jab hum yai value dete hein kisi var mein to js mein memory space add hoti hai jis mein hum value store karsakte hein in future.

// 🔹 undefined ke liye: Jab koi variable declare hota hai magar initialize nahi hota, tab JS interpreter usay undefined assign karta hai. Is mein variable ka stack space allocate hota hai, magar heap mein koi specific value assign nahi ki jati.



// 🆚 not define and undefine mein farq hota hai JavaScript mein "undefined" ka matlab hota hai ke ek variable to declare kiya gaya hai lekin usko koi value assign nahi ki gayi. Doosri taraf, "not defined" tab hota hai jab aap kisi aise variable ya object property ko access karne ki koshish karte hain jo exist hi nahi karti, aur is se ek ReferenceError aata hai.




// 1. 🔹 null ka matlab:
// ⚠️ Type: null ki type "object" hoti hai (yeh ek historical bug hai JS mein).
// 🔹 Matlab: null ka matlab hota hai ke aik variable ya value ka koi specific reference ya object nahi hai, yaani uss variable mein jaan bujh ke koi value nahi di gayi hai.
// 🔹 Use: null ko explicitly set kiya jata hai jab aap kisi variable ko khud manually khali ya reset karna chahte hain.

// 🔹 null explicit value hoti jo hum dete khud se add karain.means is mein memory allocate nahi hoti or jab is null ki jaga koi dosri value assign hoti to memory space create hota hai value store karne k liyay jab null ko var mein store karte to us var ka memory address null ki taraf point hota hai. 

// 🔹 null ke liye: Jab aap koi variable null assign kartay hain, toh yeh ek object reference ko khatam kar kay aik khaali ya non-existent value ko represent karta hai. Is case mein, koi memory explicitly allocate nahi hoti balkay yeh aik pointer hota hai jo kisi bhi object ko point nahi kar raha hota.

// 💻
Reference = () {}
// 🔹 reference data types mutable hoti hein jo k change ho sakti hein
// aisi value jis ko copy karne par wo real value copy na ho but us mein value ka reference pass hojaye usko ref value kehte hein. And agar koi copy karne par real value copy hojaye wo primitive value hoti hai example:

// 💻
let a = 10; // primitive data types
let b = a;
a = 20;

// 🔹 Here's a visualization of what happens:

// 🔹 Initial State:

// 🔹 a → 10
// 🔹 b → undefined
// 🔹 After let b = a;:

// 🔹 a → 10
// 🔹 b → 10
// 🔹 After a = 20;:

// 🔹 a → 20
// 🔹 b → 10


// 💻
let a = [10,20]; // reference data type
let b = a; // give reference a to b
b.pop();
console.log(a); // 20
console.log(b); // 10

// ❓ how to copy reference values using spread operator

// 💻
let a = [10,20,30,40,50,60]; // reference data type
let b = [...a]; // give reference a to b
a.pop();
console.log(a); // 20
console.log(b); // 10


const fullName = {name:'zain ul abidin'};
// ⚠️ to dont change the ref obj value we make real constant obj like this:
// 💻
Object.freeze(fullName);
 // 🔹 now we can't change the property of fullName object.
// 💻
fullName.name = 'bilal rizwan';
console.log(fullName)