/********* variables ************/

"named storage location whose value can be manipulated during the execution"

"var function scoped hota hai var apne parent function mein kahi bhi use hosakta hai lekin agar parent function mein nested functions hon to un k var us parent function mein access nahi hosakte.var khud ko browser context api window obj mein add karta hai."

"let has create block of scope we can't use it anywhere. let braces scoped hota hai.let khud ko browser context api window obj mein add nahi karta."


"const has a block of scope we can't use it anywhere."


// ============================================================
// VAR
// ============================================================

var a;           ✅ "Declaration — variable bana, value nahi"
var a = 10;      ✅ "Re-declaration — var mein allowed hai"
a = 20;          ✅ "Re-assignment — value badal di"
console.log(a);  // 20

// ============================================================
// LET
// ============================================================

let d;           ✅ "Declaration — variable bana, value nahi"
b = 10;          ✅ "Initialization — pehli baar value di"
b = 20;          ✅ "Re-assignment — value badal sakte ho"
let b = 30;   ❌ "Re-declaration — allowed nahi, SyntaxError"
console.log(b);  // 20

// ============================================================
// CONST
// ============================================================

const c;      ❌ "Sirf declaration allowed nahi, initialize bhi karna hoga"
const c = 10;    ✅ "Declaration + Initialization — saath mein karna zaroori"
c = 20;       ❌ "Re-assignment — allowed nahi, TypeError"
const c = 30; ❌ "Re-declaration — allowed nahi, SyntaxError"
console.log(c);  // 10


| Feature       | `var`      | `let`           | `const`         |
| ------------- | ---------- | --------------- | --------------- |
| Redeclare     | ✅ Yes      | ❌ No            | ❌ No            |
| Re-assign     | ✅ Yes      | ✅ Yes           | ❌ No            |
| Scope         | Function   | Block           | Block           |
| Window Object | ✅ Add hota | ❌ Nahi add hota | ❌ Nahi add hota |


| Scope Type | `var` | `let` | `const` |
| ---------- | ----- | ----- | ------- |
| Global     | ✅     | ✅     | ✅       |
| Function   | ✅     | ✅     | ✅       |
| Block      | ❌     | ✅     | ✅       |

var x = 10;  "Global scope"
let y = 20;  "Global scope" "(but not on window object)"
const z = 30; "Global scope"

"Kahi bhi access ho sakta hai"
function test() {
    console.log(x); // 10
}

function myFunction() {
    var a = 5;      "Function scoped"
    let b = 10;     "Actually block scoped (but function ke andar hai)"
    const c = 15;   "Block scoped"
    
    console.log(a); // Works
}
console.log(a); ❌ "ERROR - bahar access nahi ho sakta"

if (true) {
    var x = 10;     "Function scoped (ignore karega block ko)"
    let y = 20;     "Block scoped"
    const z = 30;   "Block scoped"
}

console.log(x);  ✅ "10 - var block ko nahi manta"
console.log(y);  ❌ "ERROR - let block scoped hai"
console.log(z);  ❌ "ERROR - const block scoped hai"
