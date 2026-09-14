/********************** diff b/w truthy falsy *****************************/
"falsy values are 0 , false , null , undefine , NaN document.all , '' (empty string)"

if (!0) {
    console.log('0 is falsy'); // This will be logged
}

if (!false) {
    console.log('false is falsy'); // This will be logged
}

if (!null) {
    console.log('null is falsy'); // This will be logged
}

if (!undefined) {
    console.log('undefined is falsy'); // This will be logged
}

if (!NaN) {
    console.log('NaN is falsy'); // This will be logged
}

if (!'') {
    console.log('Empty string is falsy'); // This will be logged
}

if (!document.all) {
    console.log('document.all is falsy'); // This will be logged
}

"NaN kabhi bhi NaN k equal nahi hota. agar hum ko compare karna hai to yai method use karna hote hein"
Object.is(NaN,NaN);
isNaN()
Number.isNaN()

const data = Number(undefined);

if(data === NaN) {
    console.log('let him not come')
}
else {
    console.log('let him come')
}

// compare nan to nan
if(Object.is(data,NaN)) {
    console.log('let him not come')
}
else {
    console.log('let him come')
}