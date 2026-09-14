


  // Escaping Literal Quotes in Strings

// I am a "double quoted" string inside "double quotes".

// Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:

// const myStr = "I am a \"double quoted\" string inside \"double quotes\"";


// Quoting Strings with Single Quotes

// However, this becomes a problem if you need to use the outermost quotes within it. Remember, a string has the same kind of quote at the beginning and end. But if you have that same quote somewhere in the middle, the string will stop early and throw an error.

// const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
// const badStr = 'Finn responds, "Let's go!"';

//  anoth exp

const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
after

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// Escape Sequences in Strings

// To allow you to use characters you may not otherwise be able to type out, such as a carriage return.
// To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.


// Code	Output
// \'	single quote
// \"	double quote
// \\	backslash
// \n	newline
// \r	carriage return
// \t	tab
// \b	word boundary
// \f	form feed

// Exmp

const myStr = 'FirstLine\n\t\\SecondLine\nThirdLine';



/******************************* Promises ******************************/

// JavaScript has several asynchronous functions, including:

// setTimeout() - This function is used to schedule a function or a code snippet to be executed after a specified amount of time.

// setInterval() - This function is used to repeatedly execute a function or a code snippet at a specified interval.

// Promises - Promises are used to handle asynchronous operations in JavaScript. They represent a value that may not be available yet, but will be resolved at some point in the future.

// async/await - Async/await is a syntactic sugar over Promises, making asynchronous code easier to read and write.

// fetch() - This function is used to make HTTP requests in JavaScript. It returns a Promise that resolves to the response of the request.

// XMLHttpRequest - This is an older way of making HTTP requests in JavaScript. It is still used in some cases, but fetch() is generally preferred.

// setImmediate() - This function is similar to setTimeout(), but with a time value of 0. It is used to schedule a function to be executed as soon as possible.

// These are some of the most commonly used asynchronous functions in JavaScript. However, there are many other functions and libraries that can be used for asynchronous programming in JavaScript.

// task API Students


// 1: 2s roll no;
// 2: 2s name and age;

// we created an object with the help of a new keyword and we stored this in var.
// when we create a new promise we need to call the executor function in the promise by using the fat arrow function
// constructor (Promise produce)
const my_Prosmise = new Promise( (resolve,reject) => {
    setTimeout(() => {
        let roll_No = [1,2,3,4,5];
        // resolve(roll_No);
        reject('error while communicating');
    }, 2000)
});

// when we created a promise object. They have 2 methods no 1 then no 2 catch

// we use then method when the promise is resolved

// we use the cath method when the promise is rejected 

// promise consumed
my_Prosmise.then((rollno) => {
    console.log(rollno);      
}).catch((error) => {
 console.log(error);   
});