// promise is simply an api jo humko aik mechanisim provide karti hai aik task ko asynchronously perform karne k liyay and once that task is done it will give me some value with the status either failed or rejected

// we created promise obj and we passed cb as argument to create promise. it will give us 2 fn resolve and reject inside cb fn kyun k jab hamara cb function constructor function mein invoke hota hai to tab wo res rej ko push karta hai.
const promOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    // if promise is fulfilled then we resolve it
    resolve("Promise Resolved");
    reject("Promise Not Resolved");
  }, 2000);
});

console.log(promOne);

// consumption phase
promOne
  .then(
    (data) => {
      console.log("from then", data);
    },
    (e) => {
      console.log("error catch from then", e);
    },
  )
  .catch((error) => {
    console.log("from catch", error);
  })
  .finally(() => {
    console.log("Finally done");
  });

const promOneTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 2000);
});

promOneTwo
  .then((data) => {
    console.log("from then", data);
    // implicitly return resolved promise Promise.resolve();
    return "again resolved";
    // explicitly return resolved promise Promise.resolve('again resolved');
  })
  .then((data2) => {
    console.log("again then", data2);
  });

// summary
// 1) then finally catch returns a resolved promise thats why you can chain it.
// 2) you can have multiple then catch and finally. but only first catch will be executed other will ignored.
// 3) you can pass 2nd arg in then block which act as a catch function jo priority par hoga.

const createAsyncTask = (data, time, rejectData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!rejectData) {
        resolve(data);
      } else {
        reject(`${data} data is rejected`);
      }
    }, time);
  });
};

const rejectData = true;

const p1 = createAsyncTask("p1", 1000);
const p2 = createAsyncTask("p2", 3000, rejectData);
const p3 = createAsyncTask("p3", 2000);
const p4 = createAsyncTask("p4", 6000);
const p5 = createAsyncTask("p5", 5000);

p1.then(console.log);
p2.then(console.log);
p3.then(console.log);
p4.then(console.log);
p5.then(console.log);

// it will execute all promises together and after its resolve it will give the data according to the define order.if any promise is rejected then all resolved promises will be discard
Promise.all([p1, p2, p3, p4, p5]).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.log({ error });
  },
);

// it will give all data promises data that will resolve or rejected.catch block will not work in this thats why we use error handle like that
Promise.allSettled([p1, p2, p3, p4, p5]).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.log({ error });
  },
);

// it will give us first resolved promise.if resolved promise is rejected it will throw error
Promise.race([p1, p2, p3, p4, p5]).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.log({ error });
  },
);

// it will give us only that resolved promise who will resolved first and the rest will discard with rejected promise.if all are rejected then error will block will execute
Promise.any([p1, p2, p3, p4, p5]).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.log({ error });
  },
);

// 1) how resolve and reject are getting injected
// 2) how chaining for promises works
// 3) how then catch & finally works

// promise behind the scene
class MyPromise {
  constructor(cb) {
    this.state = "pending"; // Initial state
    this.value = undefined; // Resolve value
    this.handlers = []; // Array to hold then handlers

    // Call the provided callback with resolve and reject
    cb(this.#resolve.bind(this), this.#reject.bind(this));
  }

  #resolve(value) {
    if (this.state === "pending") {
      this.state = "fulfilled"; // Change state
      this.value = value; // Set resolved value
      this.handlers.forEach((handler) => handler(value)); // Execute all handlers
    }
  }

  #reject(reason) {
    if (this.state === "pending") {
      this.state = "rejected"; // Change state
      this.value = reason; // Set rejected reason
    }
  }

  then(onFulfilled) {
    if (this.state === "fulfilled") {
      onFulfilled(this.value); // Execute immediately if already fulfilled
    } else {
      this.handlers.push(onFulfilled); // Otherwise, add to handlers
    }
    return this; // Return this for chaining
  }

  catch(onRejected) {
    if (this.state === "rejected") {
      onRejected(this.value); // Execute immediately if already rejected
    }
    return this; // Return this for chaining
  }

  finally(onFinally) {
    // Always execute finally
    onFinally();
    return this; // Return this for chaining
  }
}

// Usage
const promiseObj = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise fulfilled!");
  }, 1000);
});

promiseObj
  .then((value) => {
    console.log(value); // 'Promise fulfilled!'
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Finally executed.");
  });

console.log(promiseObj);

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(res);
}

getData();
