// ═══════════════════════════════════════════
// 📘 reactmodules
// ═══════════════════════════════════════════

// 🔹 js mein modular code likhne k liyay multiple ways aye thay jinko use kar k hum apna code moduler bana sakte hein:


// 1) 🔹 common js introduce by node js is mein code hamara modular banta tha by node js jo bhi js file banti thi usko aik invisible function mein wrap kardeta tha:

// 🔹 file1:
// function() {
    var x = 8;

    module.export = x;
// }();

// 🔹 file2:
// 💻
const x = require('file1.js');

// 🔹 but is mein drawback yai tha k synchronous execute hota tha.

// 🔹 isko resolve kara AMD ne Asynchronous module definition yai js package hai require js ka

// 🔹 file1:
// 💻
function getData() {
    console.log('data files');
}
module.export = {getData};

// 🔹 file:2

// 💻
const datafromGetData = require('file1.js');

datafromGetData.getData();


// 🔹 hum ko yai idea hogaya k moduler code kaise likhna hai but browsers to js file ko download karne k baad sari files ko aik file mein merge kardete hein 

// 🔹 CJS = common js, AMD = Asynchronous module definition,  UMD = universal module definition it isa combine version of CJS & AMD, ESM = ES modules is package ne default browser mein module system add kardiya is waja se hum browsers mein hi module bana sakte hein 


// 💻
function getData() {
    console.log('data files');
}

export default getData;

// 🔹 file1: named export
// 💻
export const myvar = 'zain';

// 🔹 file2: named import
// 💻
import {myvar} from 'file1.js' 


// npm hum use karte hein install karne k liyay packages ko npx hum use karte hein packages ko create karne k liyay or run karne k liyay


// 🔹 NPM is Package Manager yai packages ko manage karta hai k kaun kab call hoga

// 🔹 webpack is package bundlers yai packages se work karwata hai jo bhi modules hum ne npm ka use kar k add kare hein un sari files ko webpack combine karta hai means sub files ko bundle.js mein merge kardeta hai

// 🔹 HMR hot module replacement 

// 🔹 loaders: webpack ko nahi pata html css kya hai to via loaders hum webpack ko batata hai html css file ko aise treat karna hai js ki file ko aise karna hai 

// 🔹 instead of using cra now we are using vite becuase of webpack kyun k pehle jab bhi hum code mein kahin bhi kuch change karte thay to webpacke again sari files ko analyze karta hai sub combine karta hai new bundle create karta hai or browser ko ref karta hai in future agar app size increase hota hai to load time barh jayega build banane mein and run karne mein.

// 🔹 now browsers have native support of esm. vite hamare code ko browser k way mein create kar k deta hai is mein jitni bhi files hoti wo combine nahi hoti jitne modules hote hein wohi hum ko miljate hein

// ⚠️ those files that never changes like node modules vite inka aik alag se bundle file bana rakh deta hai

// 🔹 those file that would be changed. and there is another tool called ESbuild this will build es modules files



