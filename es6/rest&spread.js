/******************************* rest operator ******************************/
function sum(name, ...args){
    console.log(arguments);
    document.write(`Hello ${name} <br>
                     Your Marks : `);
    
    let sum = 0;
    for(let i in args){
        sum += args[i];
    }

    document.write(sum);
}

sum("zain",10,20,30,40,50);

const spread = (a,b,c,...d) => {
    console.log(a,b,c,d);
}

spread("samigandu","fawad","ali","tatta","bilal","wahid","basit");

/******************************* spread operator ******************************/

function sum(name,...args){
console.log(arguments);

document.write(`Hello ${name} : `);

let sum = 0;
for(let i in args){
    sum += args[i];
}

document.write(sum);
}

var arr = [20,30,40];
sum("Yahoo Baba",...arr);

// diff between rest and spread op is when we make a function and pass the argument in the function like this ...args is called rest operator cuz its saving the argument values
// and when we call the function and call a variable ..arr like this is called spread operator cuz its spread the values from function

// Purpose:

// Rest Operator (...): Used to collect multiple elements into an array. It is used in function parameter lists to gather remaining arguments.
// Spread Operator (...): Used to expand or spread elements from an iterable (array, object) into individual elements.

// Rest Operator (...) ko function ke parameters mein use karne ka matlab yeh hota hai ke jitne bhi arguments aap function ko pass karte hain, un sab ko ek array ke roop mein collect kiya jata hai.
// Context of Use:

// Rest Operator: Only used in function parameters.
// Spread Operator: Used in function calls, array literals, and object literals.
// Behavior:

// Rest Operator: Gathers elements into a single array.
// Spread Operator: Spreads elements into individual elements.


const fullName = "!@#$%^&*()_+";
const allCharacters = [...fullName];
console.log(allCharacters);

const fullName = "!@#$%^&*()_+";
const allCharacters = {...fullName};
const symbols = allCharacters;
console.log(symbols);

// we can spread array inside obj but not spread obj inside array

// De-structuring : extract specific information

// spread operator: extract all information

// rest operator: collect all or remaining information