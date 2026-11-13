// ═══════════════════════════════════════════
// 📘 js-questions
// ═══════════════════════════════════════════

// 🔹 js check this like from left to right
// 💻
console.log(2 == 2);

console.log(2 == 2 == 2);
// 🆚 in js when compare diff data types using == js will make effort to make same data type to compare them
// 🔹 2==2 means true and js convert this into 1 then 1 == 2 is not equal so the ans is false.
// 🔹 after that true value is 1 and false value is 0 so now the ans is false 

// 💻
console.log(2 == 2 == 2 == 0);


// 🔹 this will give the same output as above
// 💻
const numberPrint = ()=> {
    for (var i=0; i<20; i++) {
    console.log(i);
}
    console.log(i);
}

numberPrint();