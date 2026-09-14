// Immutability can not be changed

// mutability can be changed

// 1 primitive types = String, number , Boolean , undefined ,null , Symbol, bigint

// 2 non primitive reference types = object{} 

// immutability exp 1
let myName1 = 'js';
myName1 = 'react';
console.log(myName1);



// immutability exp 2
let myName = 'js';

function changeMyName(newName) {
    newName = 'react'
    console.log("hello",newName);
}

changeMyName(myName);

console.log(myName);

// for primitive we can not change the created values
// for primitive, assigned value will only change, when we re-assigned.

// non primitive these are mutable.

const obj = {name: 'js'};

function changeLang (param) {
    param.name = 'react';
    console.log(param);
}

changeLang(obj);

console.log(obj);

// obj work on ref jab bhi kisi fn mein obj pass karte hein to us mein hum ref pass karte hein obj ka jo k fn change karsakta hai

// agar hum ko ref data types ko obj ko change hone se raukna hai to hum Object.freeze() use karsakte hein
const obj1 = {name: 'js'};
Object.freeze(obj1)
function changeLang (param) {
    param.name = 'react';
    console.log(param);
}

changeLang(obj1);

console.log(obj1);

// lekin agar nested obj ho ya arrays ho to yai work nahi karta or again obj ko change kardeta hai

const obj2 = {name: 'js',ver: {major: 2}};
Object.freeze(obj2)
function changeLang (param) {
    param.name = 'react';
    param.ver.major = '19';
    console.log(param);
}

changeLang(obj2);

console.log(obj2);

// agar isko resolve karna hai to hum js ka structuredClone() method use karsakte hein jo k hamary obj ki copy create karta hai or hamara original obj change nahi hota

const obj3 = {name: 'js',ver: {major: 2}};
Object.freeze(obj3)
function changeLang (param) {
    param.name = 'react';
    param.ver.major = '19';
    console.log(param);
}

changeLang(structuredClone(obj3));

console.log(obj3);


const store = {} // app data

const userAction = {
    name : 'zain',
    value: {msg: "JS is awesome"},
}


// it will recieve state and action 
function reducerUpdater(oldstore,action) {
    if(action.name ===  'zain') {
        console.log('action',action);
        // based on action return a new state
        // this reducer fn must return a state
        return {...oldstore,...action.value};
    }
}

function dispatch (old,action) {
    return reducerUpdater(old,action);
}

const newState = dispatch(store,userAction);

store= newState;


console.log(store);







