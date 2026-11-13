// ═══════════════════════════════════════════
// 📘 anonymous-fn
// ═══════════════════════════════════════════

"💭 Anonymous Function:"
"✅ Anonymous function woh hoti hai jiska koi naam nahi hota."

"🟢 Is code mein, setTimeout ke andar jo function define kiya gaya hai (cb) => { cb(); }, yeh ek anonymous function hai. Is function ka koi naam nahi hai, lekin isse directly setTimeout ke parameter mein likha gaya hai."

"🟢 Anonymous function ek aisi function hoti hai jo bina kisi naam ke hoti hai. Isse directly kisi variable mein assign kiya ja sakta hai ya kisi function ke parameter mein pass kiya ja sakta hai."

"🟢 Anonymous function ko immediately use karne ke liye zyada use kiya jaata hai, jaise ke callback functions."

"🔵 JavaScript mein arrays ke liye kaafi saare methods hain jisme anonymous functions use hote hain:"

"🟢 forEach(): Har element pe action perform karna"
"🟢 map(): Array ke har element pe transformation karna"
"🟢 filter(): Condition ke basis pe filtering"
"🟢 reduce(): Array ko ek single value mein reduce karna"

"🟩 Example (forEach):"
// 💻
let arr = [1, 2, 3];
arr.forEach(function(item) {
    console.log(item); // Prints each item
});

"🟩 Example (map):"
// 💻
let squares = [1, 2, 3].map(function(num) {
  return num * num;
});
console.log(squares); // Output: [1, 4, 9]


"🟩 Example (filter):"
// 💻
let evenNumbers = [1, 2, 3, 4, 5].filter(function(num) {
  return num % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]

"🟩 Example (addEventListener):"
// 💻
document.getElementById('myButton').addEventListener('click', function() {
  console.log("Button clicked!");
});

"🟩 IIFE (Immediately Invoked Function Expression)"
// 🔹 "Anonymous functions ko IIFE ke taur par bhi use kiya jata hai, jisme function declare hote hi turant run hota hai."
// 💻
(function() {
  console.log("This function runs immediately");
})();


"🟩 setInterval() setTimeout()"
// 💻
setTimeout(function() {
    console.log("This is an anonymous function.");
  }, 1000);

"🟩 Arrow Functions"

  let numbers = [1, 2, 3];
  let squares = numbers.map(num => num * num);
  console.log(squares); // Output: [1, 4, 9]
  

"🔵 Anonymous functions ko JavaScript mein kai tarikon se use kiya jata hai, jaise:"

"🟢 Callbacks (e.g., setTimeout, setInterval)"
"🟢 Array methods (e.g., map, forEach, filter)"
"🟢 Event listeners (addEventListener)"
"🟢 Promises (then, catch, finally)"
"🟢 IIFE (Immediately Invoked Function Expressions)"
"🟢 Arrow functions (as a concise version of anonymous functions)"
