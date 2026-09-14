/********************** closures *****************************/
const adder = (num) => {
  const add = (b) => {
    console.log(num + b);
  };
  return add;
};
("adder fn will return another fn thats why we call this fn and save in another const to invoked inner function also:");
const adderTo = adder(10);

adderTo(10);

("aik function jo kuch preserved values k sath ho to wo closure create karta hai.");

("agar hum kisi bhi function k andar koi bhi var outside the function access karte hein to js us function ka reference apni scope property mein add karleta hai usko closure kehte hein.");

("js mein har fn mein aik special key hoti hai scopes js mein kisi bhi function k andar koi bhi variable outside the function access karte hein to js us fn ka ref apni scope prop mein add karleta hai closure create hota hai.");

("Closure ka matlab hai, jab ek function apne lexical environment ko access karta hai, jisme usse surround karne wale variables aur parameters aate hain.");

("Is case mein, sayHello() function ko name aur email ka access hai, jo welcome() function ke andar defined hain.");

function welcome() {
  const name = "zain";
  const email = "zainyzain64@gmail.com";
  function sayHello() {
    console.log(`Hello, my name is ${name} and my email is ${email}`);
  }
  console.dir(sayHello);
}

welcome();

const outerFn = () => {
  let outerNameOne = "zain";
  let outerNameTwo = "Ali";
  const innerFn = () => {
    console.log(outerNameOne);
  };
  console.dir(innerFn);
};

outerFn();

// closure is phenomenon.
("when inner functions access variables from its parent function. it creates a closure.");
("it's not necssary that you access a variable defined in outside scope and say your inner function is creating a closure.");
("closure is created when your code in compilation phase.");
("closure let us to have private var. (pros)");
("why do we use closure ? for data encapsulation data hiding to make private var");
function showingLangDetails() {
  let reactLoverWins = true;
  function jsLover() {}
  function reactLover() {
    console.log(reactLoverWins);
  }
  return [jsLover, reactLover];
}

const [jsFn, reactFn] = showingLangDetails();

console.dir(jsFn);
console.dir(reactFn);

("stale closure ki problem jab face karte hein jab hum setTimeOut onClick ya cached Fn use karte hein like useCallback useMemo");
