/********************** loop types *****************************/
  
  // while loop
  // do /while loop
  // for loop
  // for/in loop (Objects)
  // for each loop only use in  (Arrays)
  
  /********************** while loop *****************************/
  
  let a = 1;
  console.log(`<ul>`);
//   match condition
  while (a <= 10) {
      console.log(`${a}<li>loop start</li>`);
      a++;
      console.log(`</ul>`);
  }
  
  /********************** do while loop *****************************/
  
  let a = 1;
  
  do {
      a++;
      console.log(`${a}start`);
  }
  while (a <= 10);
  
  
  
  let a = 11;
  
  do {
      a++;
  
      if (a >= 10) {
          console.log(`${a} is greater then 10`);
      }
      else {
          console.log(`${a} is not greater then 10`);
      }
  
  }
  while (a <= 10);
  
  
  
  /********************** for loop *****************************/
//   start end change
  for (let i = 2; i === 2; i++) {
      console.log(i);
  }
  
  for (let i = 2; i <= 10; i++) {
      console.log(i);
  }
  
  /********************** continue & break *****************************/
  
  for (let i = 2; i <= 10; i++) {
      if (i == 5) {
          console.log(i);
      }
      console.log(i);
  }
  
  /** continue **/
  
  for (let i = 2; i <= 10; i++) {
      if (i == 5) {
          console.log(i);
          continue;
      }
      console.log(i);
  }
  
  /** break **/
  
  for (let i = 2; i <= 10; i++) {
      if (i == 5) {
          console.log(i);
          break;
      }
      console.log(i);
  }
  
  /********************** for loop with if else  continue & break *****************************/
  for (let i = 2; i <= 15; i++) {
      if (i == 5) {
          console.log(`${i} is equal to 5`);
          continue;
      }
  
      else if (i < 10) {
          console.log(`${i} is less than from 10`);
          continue;
      }
  
      else if (i == 10) {
          console.log(`${i} is equal to 10`);
          break;
      }
  
      else {
          console.log(`${i} is greater than from 10`);
      }
      continue;
      console.log(i);
  }
  
  /********************** for nested loop *****************************/
  
  for (let i = 1; i < 100; i += 10) {
      for (let b = i; b < i + 10; b++) {
          document.write(`${b} `);
      }
      document.write("<br>");
  }
  
  for (let a = 1; a <= 5; a++) {
      for (let b = 1; b <= a; b++) {
          console.log(b);
      }
  }
  
  /********************** for each loop *****************************/

//   for each is higher order function



//   Basic Usage
// The forEach method takes a callback function as an argument. This callback function can take up to three arguments:

// Current Value: The current element being processed in the array.
// Index (optional): The index of the current element being processed.
// Array (optional): The array that forEach is being called upon.

const numbers = [1, 2, 3, 4, 5];

const result = numbers.forEach((number) => {
    console.log(number + 1);
});

console.log(result); // undefined

// forEach method ke case mein, result mein undefined aayega, jabke map method ke case mein, result ek naya array return karega jisme har element incremented hoga.

const numbers = [1, 2, 3, 4, 5];

const result = numbers.map((number) => {
    return number + 1;
});

console.log(result); // [2, 3, 4, 5, 6]

// Nahi, forEach loop sirf arrays tak hi mehdood nahi hai. Yeh method un objects par bhi apply kiya ja sakta hai jo "iterable" hote hain, jaise ke:

// Sets: Set object bhi iterable hota hai, isliye aap forEach use kar sakte hain
const numSet = new Set([1, 2, 3]);
numSet.forEach((num) => console.log(num));

// Note: forEach method iterables par chalti hai jo sequential hote hain, jaise arrays, sets, aur maps. Lekin, yeh objects jo iterable nahi hote, jaise plain objects (e.g., {}), par directly use nahi ki ja sakti.

// Agar aapko plain object ke key-value pairs par iterate karna hai, toh aap Object.keys, Object.values, ya Object.entries ke saath forEach ka use kar sakte hain:

const obj = { a: 1, b: 2, c: 3 };

Object.keys(obj).forEach((key) => {
    console.log(`${key}: ${obj[key]}`);
});
  
  let a = ["zain", "ali", "hassan", "sharif"];
  
  a.forEach(function (item, index) {
      console.log(`${item} : ${index}`);
  });
  
  /********************** for in loop *****************************/
  
  let obj = {
      firstName: "zain",
      midName: "ul",
      lastName: "abidin",
      designation: "front-end developer",
      address: "5-a-7/15 nazimabad no. 5 karachi pakistan",
  }
  
  for (let key in obj) {
      console.log(`${key} : ${obj[key]}`);
  }


//   5. filter() method:
// Purpose: filter() array ke har element pe ek condition apply karta hai aur sirf un elements ki nayi array return karta hai jo condition pass karte hain.
// Use: Jab aapko filtered results chahiye ho.

let arr = [10, 20, 30, 40];
let filteredArr = arr.filter(function(value) {
    return value > 20;
});
console.log(filteredArr); 
// Output: [30, 40]




//   Summary:
// Objects:
// for...in: Object ki properties pe iterate karne ke liye.
// Object.keys(): Keys ko array ki form mein le ke iterate karne ke liye.
// Object.values(): Values ko array ki form mein le ke iterate karne ke liye.
// Object.entries(): Key-value pairs ko array ki form mein le ke iterate karne ke liye.
// Arrays:
// for loop: Full control ke liye jab aapko index bhi chahiye ho.
// for...of: Array ke elements pe iterate karne ke liye without worrying about index.
// forEach(): Har element pe function apply karne ke liye (without returning anything).
// map(): Har element ko transform kar ke nayi array banane ke liye.
// filter(): Condition ke basis pe filtered array banane ke liye.
// reduce(): Array ko ek single value mein reduce karne ke liye.