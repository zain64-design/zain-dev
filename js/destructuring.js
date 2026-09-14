/******************************* array objects destructuring ******************************/
const arrDest = ["zain","ali","usama","waleed"];

const fnDest = arrDest;
const [a, b, c, d] = fnDest;

const objDest = {name:"zain ul abidin",age:"28 march 1996",job:"front end dev"}

const {name:FullName,age:DateOfBirth,job:Occupation} = objDest;