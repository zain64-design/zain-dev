"// 1️⃣ async function hamesha aik resolved promise return karti hai, chahe aap kuch bhi return karein. js wrapped returned value in Promise.resolve() and return it."
"// 2️⃣ async await sirf promise ko consume karne k tareeqay ji badalta hai .promise creation k tareeqay ko nahi badalta."
"// 3️⃣ agar kuch return nahi kiya to async function undefined return karegi with resolved promise."
"// 4️⃣ await use karsakte hein non promise value k sath bhi."
"// 5️⃣ await sirf kaam karta hai aise object k sath jis k pass then method ho."
const thenable = {
  then: function (resolve, reject) {
    resolve("thenable resolved");
  },
};
"// 6️⃣ jo bhi code await k baad likha hoga wo microtask queue me chala jata hai aur event loop k through execute hota hai."

function fakeAxios() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("data not fetched");
    }, 5000);
  });
}

async function myAsync(callback) {
  try {
    const data = await callback();
    return [data, null];
  } catch (e) {
    return [null, e];
  }
}

async function getData() {
  const data = await myAsync(fakeAxios);
  console.log(data);
}

async function myAsync(promiseFn) {
  try {
    const data = await promiseFn();
    return [data, null];
  } catch (e) {
    return [null, e];
  }
}

async function fetchUser(userId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${userId}`,
  );
  if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
  return res.json();
}

async function getData() {
  const [user, error] = await myAsync(() => fetchUser(5));

  if (error) {
    console.log("User fetch fail hua:", error.message);
    return;
  }
  console.log("User mil gaya:", user);
}

"❔ agar koi function async ho to wo hamesha promise hi karega return ?"
"🟢 async function hamesha ek Promise return karega, koi exception nahi. Ye JS ka guaranteed rule hai."

async function test1() {
  return 5;
}
console.log(test1()); // Promise {<fulfilled>: 5}

async function test2() {
  console.log("hello");
  // koi return nahi
}
console.log(test2()); // Promise {<fulfilled>: undefined}

async function test3() {
  return fetch("https://api.example.com"); // ye khud Promise hai
}
console.log(test3()); // Promise {<pending>}

"Interview-important: JS double-wrap nahi karta — agar tum async function ke andar se already ek Promise return karo, JS use "flatten" kar deta hai. Matlab Promise<Promise<X>> nahi banta, seedha Promise<X> hi milta hai."
