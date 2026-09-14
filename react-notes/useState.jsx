// ============================================
// useState Hook - Complete Notes
// ============================================

// useState react ka inbuilt hook hai jiska use karke react state changes ko
// track karta hai. Hum initial value assign karte hein jo hume ek array
// return karta hai: pehla element current state value, dusra element
// setter function jo state update karne aur react ko re-render trigger
// karne ke liye use hota hai.

const [count, setCount] = useState(0);

// Simplified conceptual implementation (samajhne ke liye):
function useState(initialValue) {
  let state = initialValue; // internal storage
  function setState(newValue) {
    state = newValue; // update internal state
    // + re-render trigger logic
  }
  return [state, setState];
}

// [] array return hone ki wajah se hum destructure karke apni marzi ka
// variable name rakh sakte hein.

const array = useState();
const [number, func] = array; // custom naming allowed

// ============================================
// Re-render kya hota hai
// ============================================

// Re-render matlab: React usi component FUNCTION ko dobara call (re-invoke)
// karta hai — naya function nahi banata. Har call ek fresh execution
// context deta hai, isliye us call ke purane local variables/closures
// discard ho jate hein (function khud nahi, uske andar ki purani values).
// Naya return hua JSX (Virtual DOM) purane VDOM se diff algorithm ke
// zariye compare hota hai, aur sirf jo actual change hai wahi real DOM
// mein update hota hai.

// Real React Implementation mein ye zyada complex hota hai:
// - Fiber Architecture: updates/re-renders efficiently manage karta hai
// - Reconciliation: state changes track karke re-rendering optimize karta hai

// const [count, setCount] — array destructuring:
// count  -> current state value
// setCount -> state update karne wala function
// (set prefix sirf convention hai, koi bhi naam de sakte ho, kaam same rahega)

// ============================================
// Batching + Updater Function
// ============================================

const Number = () => {
  const [value, setValue] = useState(0);

  const Increase = () => {
    setValue(value + 10); // discard
    setValue(value + 40); // discard
    setValue(value + 10); // discard
    setValue(value + 20); // sirf ye "direct value" wala last call effective hai
    setValue((prev) => prev + 1); // updater function, iske pehle wali value pe apply hoga
  };

  return (
    <>
      <button onClick={Increase}>add</button>
      <h1>{value}</h1>
    </>
  );
};

// Jab useState ko initial value dene ke baad setter function multiple
// baar "direct value" ke sath call karte hein, to sirf LAST call ka
// effect hota hai (purane discard). Agar updater function
// ((prev) => prev + 1) use karo, to wo queue mein add hoke sequence
// mein apply hote hein — previous queued result pe next chalta hai.

// Setter function ko directly component body mein call NAHI karna —
// warna infinite render loop lag jayegi. Sirf kisi event/condition ke
// through call karo.

// ============================================
// Re-render pe kya discard hota hai (per render cycle)
// ============================================

// 1) Har re-render pe component ki apni state & props hoti hein,
//    purani discard ho jati hein
// 2) Har re-render pe apne event handlers hote hein, purane discard
// 3) Har re-render pe apne Effects hote hein, purane discard

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count); // stale closure example - purani 'count' value use hogi
    }, 5000);
    return () => console.log("cleanup function invoked");
  }, []);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

// ============================================
// ⚠️ CORRECTED: Rules of Hooks
// ============================================

// ❌ GALAT (pehle ye likha tha):
// "never use useState hook in comp inside another function always use
//  at top level of your comp AFTER any return statement"

// ✅ SAHI RULE:
// Hook ko component ke TOP LEVEL par, kisi bhi conditional 'return'
// se PEHLE call karo — return ke baad nahi.

// ❌ Galat example:
function Profile({ user }) {
  if (!user) return <p>Loading...</p>;
  const [name, setName] = useState(user.name); // kabhi skip ho sakta hai!
}

// ✅ Sahi example:
function Profile({ user }) {
  const [name, setName] = useState(user?.name); // hook pehle
  if (!user) return <p>Loading...</p>;           // return baad mein
}

// WAJAH: React hooks ko unke CALL ORDER se track karta hai (render se
// render tak, ek internal list ki tarah). Agar return kisi condition
// mein hook se pehle aa jaye, to kabhi hook call hoga kabhi skip —
// har render pe hook order mismatch ho jayega aur React crash/wrong
// state show karega.

// Baaki rules (sahi hein):
// - never call a hook inside an if statement
// - never call a hook inside a loop
// - hooks sirf component ya custom hook ke top level pe

// ============================================
// Controlled vs Uncontrolled Components
// ============================================

// Uncontrolled comp: jo React state ke through handle NA ho, ref ya
// plain JS variables se handle ho.

// Controlled comp: jo React state ke through handle ho.

// ============================================
// useRef vs useState (previous value track karna)
// ============================================

// console.log('State:', count) -> current render ki state value dikhata
// hai, jo update ke baad bhi is render mein purani value dikha sakta
// hai (state update snapshot/batched hoti hai, turant reflect nahi hoti
// isi closure mein).

// console.log('Ref:', countRef.current) -> ref value turant/immediately
// updated dikhati hai, kyunki ref mutation hai, re-render trigger nahi
// karta aur na hi snapshot behavior follow karta hai.

// Initial Render: Count: 0
// After First Click:
//   State: 0 (previous render ka snapshot)
//   Ref: 1 (turant update)
//   Count: 1 (UI re-render ke baad)

const [count, setCount] = useState(0);
const prevCountRef = useRef();

useEffect(() => {
  prevCountRef.current = count;
}, [count]);

const prevCount = prevCountRef.current;

return (
  <div>
    <h1>Current Count: {count}</h1>
    <h2>Previous Count: {prevCount}</h2>
    <button onClick={() => setCount(count + 1)}>Increment</button>
  </div>
);




// ============================================
// initialState — Lazy Initializer Function (Special Case)
// ============================================

// Agar useState ko initial value ki jagah ek FUNCTION pass karo, to
// React usay "initializer function" samajhta hai — sirf INITIAL MOUNT
// pe ek dafa call karega, uske baad har render pe ignore kar dega.

// ❌ Galat — har render pe chalega (function call karke result diya)
const [todos, setTodos] = useState(createInitialTodos());

// ✅ Sahi — sirf mount pe ek dafa chalega (function reference diya, call nahi)
const [todos, setTodos] = useState(createInitialTodos);

// Real use-case: jab initial value nikalne mein heavy computation ho —
// localStorage se parse karna, badi array banana, URL params parse karna.
const [cartItems, setCartItems] = useState(() => {
  const saved = localStorage.getItem('cart');
  return saved ? JSON.parse(saved) : [];
});

// Strict Mode mein React initializer function ko 2 baar call karta hai
// (dev-only, production mein nahi) — taake impure functions pakdi ja sakein.

// ============================================
// Object.is Check — Screen kyun update nahi hoti
// ============================================

// Agar naya value purani value ke IDENTICAL hai (Object.is comparison),
// React re-render SKIP kar deta hai — ye ek performance optimization hai.

// Ye tab common bug banta hai jab object/array MUTATE karke wapas set
// karte ho — reference same rehta hai to React samajhta hai kuch change
// nahi hua:

obj.x = 10;   // ❌ mutate kiya
setObj(obj);  // ❌ same reference — React ignore kar dega, re-render nahi hoga

setObj({ ...obj, x: 10 }); // ✅ naya object — reference change, re-render hoga

// Isi wajah se: state ko hamesha REPLACE karo, MUTATE mat karo
// (chahe object ho ya array).

// ============================================
// set Function ki Stable Identity
// ============================================

// setState/setCount jaisa set function React ki taraf se STABLE identity
// rakhta hai — matlab re-render pe uska reference change nahi hota.
// Isi liye useEffect ki dependency array mein isay likhna optional hota
// hai (ESLint bhi allow karta hai omit karna), Effect dobara fire nahi
// hoga is wajah se.

// ============================================
// Resetting State With key
// ============================================

// Component ka POORA internal state reset karne ka ek tareeqa: uska
// `key` prop change kar do. Jab key change hoti hai, React us component
// ko (aur uske saare children ko) DESTROY karke NAYA bana deta hai —
// saara internal state fresh ho jata hai automatically.

// Example: category switch pe form ka fresh state chahiye
<InquiryForm key={selectedBookId} bookId={selectedBookId} />

// Example: "Reset" button se pura form fresh karna (bina manually har
// field reset kiye)
const [formVersion, setFormVersion] = useState(0);
<button onClick={() => setFormVersion(v => v + 1)}>Reset</button>
<ContactForm key={formVersion} />

// Caution: Ye "heavy" operation hai (DOM nodes destroy + recreate hote
// hein, normal re-render jaisa diffing nahi hota) — sirf tab use karo
// jab genuinely fresh instance chahiye ho.

// ============================================
// Storing Previous Render Info — Render Ke Dauran setState (Advanced)
// ============================================

// Ye us useRef+useEffect wale pattern se ALAG hai jo upar notes mein tha.
// Yahan RENDER ke DAURAN hi conditionally setState call karte hein
// (useEffect ke bina), taake extra render/flicker na ho.

function CountLabel({ count }) {
  const [prevCount, setPrevCount] = useState(count);
  const [trend, setTrend] = useState(null);

  if (prevCount !== count) {
    setPrevCount(count);
    setTrend(count > prevCount ? 'increasing' : 'decreasing');
  }

  return (
    <>
      <h1>{count}</h1>
      {trend && <p>Count is {trend}</p>}
    </>
  );
}

// Kyun useEffect se better hai IS case mein: Effect mein karte to pehle
// purani value ke sath ek render hota, phir effect chalta, phir dobara
// render — user ko flash dikhta (2 visible paints). Is pattern mein
// React render ke andar hi state update kar leta hai (return ke turant
// baad, children render hone se pehle) — sirf EK visible render hota hai.

// RULE: Condition ke bina likhoge to "Too many re-renders" error aayega
// (infinite loop). Sirf CURRENTLY RENDERING component ka apna state
// update kar sakte ho is tarah — kisi doosre component ka nahi.
// Ye pattern REAL projects mein RARE use hota hai — zyada tar cases
// mein useMemo ya derived state se kaam chal jata hai.

// ============================================
// Function Ko State Mein Store Karna — Gotcha
// ============================================

// Function ko seedha state mein store nahi kar sakte — React usay
// initializer/updater function samajh kar CALL kar dega:

const [fn, setFn] = useState(someFunction);       // ❌ someFunction CALL ho jayega
setFn(someOtherFunction);                          // ❌ ye bhi CALL ho jayega

// Fix: () => wrap karo dono jagah
const [fn, setFn] = useState(() => someFunction);  // ✅
setFn(() => someOtherFunction);                    // ✅