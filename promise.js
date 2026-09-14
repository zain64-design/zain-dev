// task API Studnets


// 1: 2s roll no;
// 2: 2s name and age;

// we created an object with the help of new keyword and we stored this in var.
// when we create a new promise we need to call excutor function in promise by using fat arrow function
// constructor base promise method (Promise produce)
// const my_Prosmise = new Promise( (resolve,reject) => {
//     setTimeout(() => {
//         let roll_No = [1,2,3,4,5];
//         // resolve(roll_No);
//         reject('error while communicating');
//     }, 2000)
// });

const my_Prosmise = ((complete) => {
    return new Promise( (resolve,reject) => {
        console.log('Fetching data please wait');
        setTimeout(() => {
            let roll_No = [1,2,3,4,5];
            if (complete) {
                resolve(roll_No);
            } else {
                reject('error while communicating');
            }
        }, 2000)
    });
});

// when we created promise object.They have 2 methods no 1 then no 2 catch

// we use then method when the promise is resolved

// we use cath method when the promise is reject 

// promise consumed method chaining
my_Prosmise.then((rollno) => {
    console.log(rollno);
}).catch((error) => {
 console.log(error);   
});



