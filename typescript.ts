// Types:

// 1: String
// 2: Boolean
// 3: Number
// 4: Undefined
// 5: Null
// 6: Void
// 7: Object
// 8: Array
// 9: Tuples
// 10: Any
// 11: Never
// 12: Unknown

// 1
let greetings: string = "hello world";

greetings.toUpperCase();

console.log(greetings);

// 2

let isLoggedIn: boolean = true;

isLoggedIn = false;

// 3
let userID = 506879.9;

// number is for numbers like 42. JavaScript does not have a special runtime value for integers, so there’s no equivalent to int or float - everything is simply number

userID = "123456";

const addNumber1 = (num:number) => {
    return num * 5;
}

// if we do not define the type of the function it will never give us an error when some one returns string or any other data type in it
const addNumber2 = (num:number):number => {
    // return num * 5;
    return 'hello';
}

console.log(addNumber2(5));

const usersData = ['ali','bilal','zain','umer']

usersData.map((user):string => {
    return `all user name is ${user}`;
})

const userSignUp = (name:string,email:string,phone:number,isSign: Boolean = false) => {
    return `your info\n${name}\n${email}\n${phone}\n${isSign}`
}

console.log(userSignUp('zain','zain@gmail.com',987654321));


const errorMessage = (error:string):void => {
    console.log(error);
    return 1;
}

const throwError = (errormsg:string): never => {
    throw new Error(errormsg);
}


const user = {
    name: 'ali',
    email: 'abc@gmail.com',
    isActive: true
}
const mulUser = ({name: string,isActive: boolean}) => {}
