// ═══════════════════════════════════════════
// 📘 this
// ═══════════════════════════════════════════

// 🔹 "normal function mein 4 rules apply hote hain this ke liye hum kaise function ko call kar rahay hein."
// 🔹 (1) "agar function new se call hua hai to uske this ki value newly created object hoti hai. "

// 🔹 (2) "agar function ko call apply bind se call kiya hai to us function ke andar this ki value hogi wo object jo call apply bind mein pass kiya gaya hai. "

// 🔹 (3) "or agar function ko kisi object ke method ke roop mein call kiya hai to this ki value us object hogi. "

// 🔹 (4) "agar function ko window ke global context mein call kiya hai to this ki value window hogi. Agar strict mode mein call kiya hai to this undefined hoga. "

// 🔹 (5) "agar arrow function use kiya hai to this ki value parent scope se aayegi, kyunki arrow function ka apna this nahi hota. "

// 🔹 (6) "agar function ko detach karke call kiya hai to this window hoga, kyunki ab wo regular function ban gaya hai."

// 💡 "Bonus Tip: Agar yai rules nahi yaad to yai dekh lo k function call karte time left par kuch hai agar hai to this usi ko refer karega, agar nahi hai to global context mein this window hoga. Agar strict mode hai to undefined hoga. Agar arrow function hai to parent scope ka this hoga."

// 🔹 "1. Global Context"
// 💻
console.log(this); "window object — browser mein global context mein this = window"

// 🔹 "2. Regular Function"
// 💻
function show() {
  console.log(this); "window — regular function mein this = window (non-strict mode)"
}
show();

// 🔹 "strict mode mein"
// 💻
function showStrict() {
  "use strict";
  console.log(this); "undefined — strict mode mein global object nahi milta"
}
showStrict();

// 🔹 "3. Object Method"

// 💻
const user = {
  name: "Ali",
  greet() {
    console.log(this.name); ""Ali" — this us object ko refer karta hai jisne method call kiya"
  }
};

user.greet(); ✅ "Ali"

⚠️ "Lekin agar method ko detach karo"
const fn = user.greet;
fn(); "undefined — ab this window hai, user nahi"


// 🔹 "4. Arrow Function"

// 💻
const user = {
  name: "Ali",
  greet: () => {
    console.log(this.name); "undefined — arrow fn ka apna this nahi hota"
  },                        // "wo parent scope ka this leta hai jo yahan window hai"

  greetRegular() {
    const inner = () => {
      console.log(this.name); // ✅ ""Ali" — parent scope (greetRegular) ka this liya"
    };
    inner();
  }
};

user.greet();        // undefined
user.greetRegular(); // "Ali"

// 🔹 "Arrow function mein bind, call, apply kaam nahi karte — kyunki arrow function ka this lexically fixed hota hai. Matlab jab arrow function define hua us waqt jo this tha, wo permanently bind ho gaya. Baad mein tum chahe bind karo, call karo ya apply — JS us this ko override nahi karne deta."

// 🔹 "Arrow function ka this lexically (fixed) hota hai like this ki value parent scope se decide hoti hai — jo this define hone ke waqt tha wo permanently set ho jaata hai. Isliye bind, call, apply arrow function pe kaam nahi karte. Agar this dynamically set karna ho to regular function use karna chahiye."

// 💻
const obj = {
  fruit:'mango',
  Fn: ()=> {
  console.log(this.fruit);
}
}
setTimeout(obj.Fn.bind(obj), 1000);


// 🔹 "5. Constructor Function / Class"

// 💻
function Person(name) {
  this.name = name; "this naye banay object ko refer karta hai"
}

const p = new Person("Ali");
console.log(p.name); // "Ali"


// 🔹 "6. call, apply, bind — Manually this set karna"

// 💻
function greet() {
  console.log(this.name);
}

const user = { name: "Ali" };

greet.call(user);         "Ali", "call se this manually set kiya, turant execute hua"
greet.apply(user);        "Ali", "apply bhi same hai, args array mein dete hain"
const bound = greet.bind(user);
bound();                  "Ali", "bind new function return karta hai this set karke"



// 🔹 "this ka value depend karta hai ke function kaise call hua. Global mein window hota hai, object method mein wo object hota hai, arrow function mein parent scope ka this hota hai kyunki arrow function ka apna this nahi hota. call, apply, bind se hum manually this set kar sakte hain."


// 💻
const user1 = {
  name: "Ali",

  // ============================================================
  // 📘 Arrow directly object mein — this = window
  // ============================================================
  arrowDirect: () => {
    console.log(this.name); // undefined — window
  },

  // ============================================================
  // 📘 Nested arrow directly object mein — this = window
  // ============================================================
  arrowNested: () => {
    const inner = () => {
      console.log(this.name); // undefined — window
      // 🔹 inner ne arrowNested ka this liya
      // 🔹 arrowNested ka this already window tha
      // 🔹 to inner ka bhi window hi raha
    }
    inner();
  },

  // ============================================================
  // 📘 Regular function — this = user object
  // ============================================================
  regularFn: function() {
    console.log(this.name); // "Ali" — this = user

    // 🔹 Arrow regular function KE ANDAR — this = user
    const arrowInsideRegular = () => {
      console.log(this.name); // "Ali" — parent regular fn ka this liya
    }
    arrowInsideRegular();
  }
}

user1.arrowDirect();  // undefined — window
user1.arrowNested();  // undefined — window (dono arrows)
user1.regularFn();    // "Ali", "Ali" — regular fn + arrow inside it
```

---

**Simple rule yaad rakho:**
```
// 🔹 "Object mein arrow → this = window ❌"
// 🔹 "Object mein arrow → arrow → this = window ❌ (chain koi fark nahi karti)"
// 🔹 "Object mein regular fn → this = object ✅"
// 🔹 "Object mein regular fn → arrow → this = object ✅"
// 🔹 "Object mein regular fn → arrow → arrow → this = object ✅"