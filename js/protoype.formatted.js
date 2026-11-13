// ═══════════════════════════════════════════
// 📘 Prototype
// ═══════════════════════════════════════════

/************************ Prototype ***************************/
// 🔹 ("every object in js is created from a function. and every function has a key called prototype whose value is an object. that object has a constructor key which points to the function from which the object was created.");

// 🔹 ("Constructor function (jaise Array(), Object()) ke andar jo prototype key hoti hai, uski value ek object hoti hai — jab wo constructor new se call hota hai ya without new, to us prototype object ko naye banaye gaye instance (array/object) ke key [[Prototype]] se link kar diya jata hai.");

// 🔹 ("Custom constructor function (jaise Person()) ke andar jo prototype key hoti hai, uski value ek object hoti hai — lekin ye sirf tab naye banaye gaye instance ke key [[Prototype]] se link hoti hai jab constructor ko new ke sath call kiya jaye. New ke baghair call karne par koi naya object banta hi nahi, is liye [[Prototype]] link nahi hoti — this global object (non-strict) ya undefined (strict mode) ban jata hai.");

// 🔹 ("Array aur Object constructor functions ke prototype object mein jo instance methods hain, or jo static methods hain prototype obj k outside, wo JS language/engine banane walon ne pehle se (built-in tareeke se) define kar rakhe hain — developer ko wo khud likhne nahi padte, wo already available hote hain.");
// 🔹 ("[[Prototype]] → iske andar constructor key hai, jiski value Array/Object hai")
// 🔹 ("constructor (jo khud Array/Object function hai) → iske andar static methods hain")
// 🔹 ("[[Prototype]] ke baaki (constructor ke ilawa) members → instance methods hain")

// 🔹 ("Array.prototype khud bhi ek object hai, aur JS mein har object ka apna [[Prototype]] hota hai. Array.prototype ka [[Prototype]] Object.prototype ki taraf link kiya gaya hai — isi liye Array.prototype.__proto__ === Object.prototype true aata hai. Ye is liye kiya gaya hai taake array instances ko sirf array-specific methods (push, map) apne Array.prototype se milein, aur baqi universal methods (toString, hasOwnProperty) chain ke zariye Object.prototype se automatically inherit ho jayein — bina dobara likhe.")

// 🔹 ("Static methods sirf constructor (function) ke through call ho sakte hain (Object.keys(obj), Array.isArray(arr)) — instance par seedha call karne ki koshish (obj.keys()) TypeError deti hai, kyunke static methods [[Prototype]] chain ka hissa nahi hote. Instance ko agar us method ki zaroorat ho, to instance ko khud argument ke tor par static method mein pass karo.")

// 💻
let details = {
  firstName: "zain",
  lastName: "ul abidin",
  designation: "front-end developor",
  age: "25",
};

details.hasOwnProperty("firstName");

// ═══════════════════════════════════════════
// 📘 Prototype inheritance
// ═══════════════════════════════════════════

/************************ Prototype inheritance ***************************/
// 💻
let backEndDev = {
  nodejs: true,
  javascript: true,
  mongodb: true,
  postgreSQL: true,
  express: true,
  mongoose: true,
  redux: true,
  nodemailer: true,
};

let frontEndDev = {
  html: true,
  css: true,
  bootstrap: true,
  sass: true,
  tailwind: true,
  javascript: true,
  jquery: true,
  reactjs: true,
};

let fullStackDev = {
  nextjs: true,
};

frontEndDev.__proto__ = backEndDev;

fullStackDev.__proto__ = frontEndDev;

// ✅ Prototype set karna
// 💻
Object.setPrototypeOf(frontEndDev, backEndDev);
Object.setPrototypeOf(fullStackDev, frontEndDev);

// ✅ Prototype check karna (read)
// 💻
console.log(Object.getPrototypeOf(fullStackDev) === frontEndDev);  // true
console.log(Object.getPrototypeOf(frontEndDev) === backEndDev);    // true

console.log(fullStackDev.nodejs);

// ❓ ("Prototypal Inheritance kya hai?");
// ✅ ("JS mein har object ke paas ek hidden property hoti hai jise __proto__ kehte hain jo us object ke parent object ko point karti hai. Jab hum kisi object pe koi property access karte hain aur wo us object mein nahi milti, to JS automatically __proto__ chain mein upar jaake dhundta hai — is process ko Prototype Chain kehte hain.");

// 🔹 ("Recommended way to create objects with prototypal inheritance is using Object.create() method, jisse hum ek naya object bana sakte hain jo kisi existing object ko prototype ke roop mein use karta hai. Isse hum easily properties aur methods share kar sakte hain bina code duplication ke.");

// 🔹 ("Object.create() se banaye object pe properties directly set karni chahiye taake this correctly kaam kare. Agar properties alag object mein hon aur methods alag mein, to this unhe access nahi kar paata.");

// 🔹 ("Object.create() se hum multiple objects ko chain kar sakte hain — jab koi property current object mein nahi milti to JS prototype chain mein upar jaata hai jab tak property mile ya chain ka end yaani null na aa jaye. Ye hi Prototype Chain hai.");

// 🔹 example 1
// 💻
function createStudent(studentName, studentAge) {
  // 🔹 Object.create se student banaya jo studentAgeChecker ko inherit karta hai
  const student = Object.create(studentAgeChecker);
  // 🔹 properties directly student pe set ki
  student.studentName = studentName;
  student.studentAge = studentAge;
  return student; // pura student object return kiya
}

const studentAgeChecker = {
  checkAge: function () {
    if (this.studentAge >= 18) {
      console.log(`${this.studentName} is an adult.`, this);
    } else {
      console.log(`${this.studentName} is a minor.`, this);
    }
  },
};

const student1 = createStudent("Zain", 25);
const student2 = createStudent("Ali", 17);
const student3 = createStudent("Ahmed", 30);
student1.checkAge();
student2.checkAge();
student3.checkAge();

// 🔹 example 2

// 💻
function createStudentOne(studentName, studentAge) {
  this.studentName = studentName;
  this.studentAge = studentAge;
}

createStudentOne.prototype.checkAge = function () {
  if (this.studentAge >= 18) {
    console.log(`${this.studentName} is an adult.`, this);
  } else {
    console.log(`${this.studentName} is a minor.`, this);
  }
};

const student1 = new createStudentOne("Zain", 25);
const student2 = new createStudentOne("Ali", 17);
const student3 = new createStudentOne("Ahmed", 30);
student1.checkAge();
student2.checkAge();
student3.checkAge();

// 🔹 ("Base obj means Object us mein special key hai prototype jo k aik object hai jismein methods aur properties hoti hain or us mein aik key hai constructor jo original object ko point karta hai.");

// 💻
const obj = {};
const key = "constructor";

if (obj[key]) {
  console.log("grant admin"); // ✅ ye print hoga — PROBLEM!
} else {
  console.log("denied");
}

// 🔹 obj khali hai — but obj["constructor"] ne
// 🔹 prototype chain se Function constructor utha liya
// 🔹 isliye truthy value aayi aur "grant admin" print hua

// 💻
const obj = {};

// 🔹 obj khud mein kuch nahi hai
// 💻
console.log(obj.hasOwnProperty("constructor")); // false — apna nahi hai

// 🔹 but prototype chain mein hai
// 💻
console.log(obj["constructor"]); // ƒ Object() — prototype se aaya
console.log(obj["constructor"] === Object); // true

// 🔹 ye saare bhi prototype se aate hain
// 💻
console.log(obj["toString"]); // ƒ toString()
console.log(obj["hasOwnProperty"]); // ƒ hasOwnProperty()

// 🔹 ("Fix — hasOwnProperty use karo if(obj.hasOwnProperty(key)) if(Object.hasOwn(obj, key))");

// 🔹 ("Jab hum kisi object pe dynamic key access karte hain to JS sirf us object mein nahi balke poori prototype chain mein dhundta hai — isliye constructor, toString jaise keys bhi truthy return karte hain khaali object pe bhi. Ye ek security vulnerability hai. Isko fix karne ke liye Object.hasOwn() ya hasOwnProperty() use karte hain jo sirf object ki apni properties check karta hai, prototype chain mein nahi jaata.");

// 🔹 every object in js comes from a function. Base function of every function is Object Function. whene ever you create an object, internak js will invoke new Object
// (1)Object Funtion, (2) A key prototype in Object Function (3) prototype key contains default behaviours (2) value of proto type key is object

// const obj = {}; js do this obj[[prototype]] = Object.prototype cuz they are same obj.__proto__ = Object.prototype

// 🔹 jab bhi hum koi object create karte hein to wo Object function se linked hojata hai us function k prototype key se jis se wo object bana hai
// har function k pass prototype key hoti hai jo help karta hai common functionallity achieve karne mein or jab aik object banta hai to wo jur jata hai object k prototype se k kis function ne usko banaya function mein jo default behaviour hai wo lene k liyay

// 💻
"js mein Capital Object mein aik prototype key hoti hai and uski value aik object hoti hai waha par default methods define hote hein. jab bhi hum aik object create karte hain js add this info to the newly created obj"(
  "har object apne pass aik special key rakhta hai Object Function ProtoType Key jis mein default functions hote hein jab bhi object banta hai yai sari info us object mein feed kardi jati hai",
);

// 🔹 ("Javasript is prototype(link) based language");
// 🔹 ("whenever we create a object in js, it is always created from a function");
// 🔹 ("and a function always have key called prototype whose value is an object");
// 🔹 ("when a function creates an object, it injects the value of prototype key into object's hidden property [[Prototype]] which is only visible consoles. can't be accessed");
// 🔹 ("if we have to access it via JS use __proto__. it is not property it is getter setter function. but it is deprecated. instead of using this we use Object.getPrototypeOf() Object.setPrototypeOf()");

// 🔹 ("[[Prototype]] & __proto__ always exist on objects and constructor and prototype is a part of function. because function are creators every object in javascript gets created from a function there is no other way to create a object");
