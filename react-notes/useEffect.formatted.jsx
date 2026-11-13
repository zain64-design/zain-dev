// ═══════════════════════════════════════════
// 📘 useEffect
// ═══════════════════════════════════════════

// 🔹 jab hum useEffect use karte hein to hamara code browser tak kaise jata hai is mein kuch steps hote hein:
// 💻
const MyComponent = () => {
    return (
        <>
        <h1>zain</h1>
        </>
    )
}

// (1): 🔹 jo bhi is comp mein useState logic data update karne ka completed hoga update hojayega
// to yai comp convert hoga React.createElement() fn call mein or yai fn call humko VDOM dega
// or phr VDOM Browser mein react draw kardega

// 🔹 React useEffect jab invoke karta hai jab comp UI mein show hojata hai (yani render + commit
// ho chuka ho) or useEffect ka code us k baad execute hojata hai

// 🔹 we can run some code, when a variable data changes

// 🔹 useEffect aik function hai jo hum use karte hein apne code ko execute karne k liyay 2 specific
// scenario mein: (1) UI par kuch show hogaya hai to koi action perform karna hai (2) koi data
// var change hua hai mujhay koi function call karna hai

// 🔹 useEffect mein synchronization hota hai data ka UI se or UI ka data se (external system ke sath)

// 🔹 useEffect mein dependency array [] mein jab jab define ki hui value change hogi to callback
// function run hoga

// 💻
const [age, setAge] = useState('');
useEffect(() => {
    console.log('value is changed'); // this will run after UI paint, jab age change hogi
}, [age]);

// 🔹 React mein useEffect ka behavior: jab bhi tum useEffect mein koi code likhte ho, wo UI render
// hone ke baad (yani jab DOM elements appear ho chuke hote hain / commit ho chuka hota hai)
// run hota hai. Iska matlab hai ke useEffect ka code React component ke render cycle ke baad
// execute hota hai.

// 🔹 Yeh conceptually class components ke componentDidMount aur componentDidUpdate jaisa kaam
// karta hai. Matlab:

// (1) 🔹 Mounting ke baad (jab component pehli dafa render hota hai) ya updating ke baad (jab
//     dependency array ki value change hoti hai) useEffect trigger hota hai.
// (2) 🔹 Jab component render hota hai aur tumhara UI browser mein dikhai dena shuru hota hai,
//     uske baad useEffect ka code chalega.
// (3) 🔹 Agar tum koi DOM-related kaam ya side effects (like fetching data, subscribing to an
//     event, ya timers) karna chahte ho, toh wo sab kaam useEffect ke andar karte ho kyunki
//     ye render ke baad execute hota hai.

// 💻
import { useEffect, useState } from "react";

function ExampleComponent() {
  const [data, setData] = useState(null);

  // 🔹 UI render hone ke baad ye effect chalega.
  useEffect(() => {
    console.log("Component rendered, now fetching data...");

    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Data from API:</h1>
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  );
}

// 🔹 useEffect component ke first render ke baad API se data fetch karta hai.
// 🔹 Pehle UI render hota hai (with "Loading..." text), aur uske baad useEffect execute hota hai
// jo data fetch kar ke state update karta hai.

// ⚠️ CORRECTED: Cleanup function ki definition
// 🔹 useEffect mein jo function hum return karte hein wo cleanup function hota hai, aur ye DO
// mauqon pe invoke hota hai:
//   (1) ↳ Har dependency-change re-render se PEHLE (purani values ke sath) — purana setup
//       🔹 "undo" karne ke liye, phir naya setup naye values se chalta hai
//   (2) ↳ Component UNMOUNT hone par — ek LAST dafa, final cleanup ke liye
// (pehle sirf unmount wala case likha tha jo incomplete tha)

// ⚠️ CORRECTED: Double Invoking Effects (Strict Mode)
// 🔹 React Strict Mode dev mode mein har Effect ke setup+cleanup cycle ko EK EXTRA dafa chalata
// hai (asal setup se pehle) — taake hidden side-effects/bugs pakde ja sakein.
// 🔹 Sequence hoti hai: setup -> cleanup -> setup (dobara)

// ⚠️ IMPORTANT CLARIFICATION: Component khud "remount" NAHI hota is process mein — sirf Effect
// ka setup/cleanup cycle double-invoke hota hai. Component ki state, refs waisi ki waisi
// persist rehti hain (reset nahi hoti). Ye sirf Effect lifecycle test hai, component lifecycle
// nahi. (pehle "component dobara mount hota hai" likha tha, jo galat term hai)

// 🔹 Ye behavior ensure karta hai ke tumhare useEffect ke side effects cleanup proper tarah se
// handle ho rahe hain — agar cleanup symmetrical/complete hai, to double-invoke se koi visible
// farak nahi padna chahiye.

// 🔹 Detecting Side Effects: Strict Mode side-effects detect karta hai jo unexpected behavior
// cause karte hain. React double-invoke se ye ensure karta hai ke koi unwanted side-effect har
// render ke baad na ho. Proper cleanup aur side effects test karne ke liye setup+cleanup ka
// ek extra cycle chalata hai.

// 🔹 Warnings throw karta hai agar tum koi deprecated API ya unsafe lifecycle methods use karte ho.
// 🔹 Silent errors detect karta hai jo normal mode mein miss ho sakte hain.

// 💻
useEffect(() => {
  setState();
  // 🔹 this will create infinite loop
});
// 🔹 this will call when first time your app is loaded and your comp will render and then setState
// fn will invoked
// 🔹 this will call on every state change (no dependency array).
// 🔹 this will synchronize my comp from react outside actions on every render/state change.

// 💻
useEffect(() => {}, []);
// 🔹 this will call once, when my comp will render or mounts
// this will synchronize my comp from react outside actions when comp mounts

// 💻
useEffect(() => {}, [someVar]);
// 🔹 this will call once, when my comp will render or mounts and when ever reactive var passed
// in dep array changes.
// 🔹 this will synchronize my comp from react outside actions when comp mounts AND on every
// someVar change

// 💻
useEffect(() => {
  console.log('useEffect with Reactive Var');

  return () => {
    console.log('cleanup function');
  };
}, [someVar]);

// 🔹 Component pehli baar render hota hai: Jab component pehli baar render hota hai, useEffect
// trigger hota hai. Is waqt console mein "useEffect with Reactive Var" print hoga.

// 🔹 Dependency change hone par: Agar someVar ki value change hoti hai, pehle useEffect ka
// cleanup function run hoga (agar define kiya gaya ho), jo console mein "cleanup function"
// print karega. Uske baad, useEffect ka body phir se execute hoga, aur "useEffect with
// 🔹 Reactive Var" print hoga.

// 🔹 Component unmount hone par: Agar component unmount hota hai, cleanup function bhi run hoga,
// jo "cleanup function" print karega.

// 🔹 useEffect Use Cases:
// 🔹 aik useEffect hum jab use karte hein jab hum ko react k outside kuch action perform karna
// hota hai
// (1) 🔹 Axios API Call (2) Fetch() API Call (3) Add Event Listener (4) Local Storage access
// (5) 🔹 Browser API (6) Socket Connection

// 🔹 cleanup function use cases:
// (1) 🔹 clearing timeouts (2) event listeners (3) API cancelling

// 💻
const MainComp = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
      setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
      setCount((prevCount) => prevCount - 1);
  };
  return (
      <>
          <h1>Count: {count}</h1>
          <button onClick={incrementCount}>Increment</button>
          <button onClick={decrementCount}>Decrement</button>
          {count >= 5 && <ChildComp/>}
      </>
  )
}

// 🔴 CORRECTED: ChildComp mein "isFirstRender" ref check hata diya gaya hai — ye anti-pattern
// tha. Dependency array [] hone ki wajah se ye Effect sirf EK dafa chalta hai, to
// isFirstRender.current hamesha 'true' hi milta (uss ek call mein), aur code hamesha early
// 🔹 'return' pe ruk jata — setInterval aur addEventListener KABHI execute hi nahi hote
// production mein (jahan Strict Mode extra invoke nahi karta). Dev + Strict Mode mein ye
// 🔹 "kaam karta hua" dikhta hai (2nd invoke pe ref false ho jata hai), isliye ye ek dangerous
// ⚠️ SILENT BUG tha jo sirf production mein pakda jata.
//
// ⚠️ Rule: agar Strict Mode ka double-invoke problem create kar raha hai, iska matlab cleanup
// incomplete/asymmetrical hai — usay "skip" karna nahi, cleanup ko SAHI karna chahiye.

// 💻
const ChildComp = () => {
  useEffect(() => {
      let id = setInterval(() => {
          console.log('comp is mounted');
      }, 1000);

      document.addEventListener('click', handleClick);

      return () => {
          console.log('cleanup function invoked');
          clearInterval(id);
          document.removeEventListener('click', handleClick);
      }
  }, []);

  function handleClick(value) {
      console.log(value, 'clicked');
  }
  return (
      <>
          <h1>child comp here</h1>
      </>
  )
}

export default MainComp;

// 💡 Note: handleClick ko NAMED function rakhna sahi practice hai (anonymous nahi) — kyunki
// removeEventListener sirf usi named function reference se listener sahi tarah remove kar
// sakta hai. Anonymous function pass karne se removeEventListener kaam nahi karta (naya
// reference hota hai har dafa), listener leak ho jata hai.


// ============================================
// 📘 useEffect — Official Docs Extra Concepts
// ============================================

// ============================================
// 📘 Custom Hooks Mein Effect Wrap Karna
// ============================================

// 🔹 Agar same Effect logic baar baar likh rahe ho, usay custom hook mein
// extract kar lo — declarative aur reusable ban jata hai.

// 💻
function useChatRoom({ serverUrl, roomId }) {
  useEffect(() => {
    const connection = createConnection({ serverUrl, roomId });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, serverUrl]);
}

// 🔹 use karo kisi bhi component se:
// 💻
function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');
  useChatRoom({ roomId, serverUrl }); // Effect "hidden" hai is API ke peeche
}

// ============================================
// 📘 Non-React Widget Ko Control Karna
// ============================================

// 🔹 Third-party widget (map, video player, koi bhi non-React library) ko
// apne component ke props/state ke sath sync rakhna ho to:

// 💻
function Map({ zoomLevel }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current === null) {
      mapRef.current = new MapWidget(containerRef.current);
    }
    mapRef.current.setZoom(zoomLevel); // widget ko sync karo current prop se
  }, [zoomLevel]);

  return <div style={{ width: 200, height: 200 }} ref={containerRef} />;
}

// 🔹 Yahan cleanup zaroori NAHI — MapWidget sirf apne diye gaye DOM node ko
// manage karta hai, component remove hote hi browser khud garbage
// collect kar dega (DOM node + class instance dono).

// ============================================
// 📘 Data Fetching With Effects — Race Condition Se Bachna
// ============================================

// 💻
function Page() {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState(null);

  useEffect(() => {
    let ignore = false; // race-condition guard flag
    setBio(null);
    fetchBio(person).then(result => {
      if (!ignore) {
        setBio(result); // sirf tab set karo jab response abhi bhi "relevant" ho
      }
    });
    return () => {
      ignore = true; // purani/stale request ka result ab discard hoga
    };
  }, [person]);
}

// 🔹 WAJAH "ignore" flag ki: Network responses guaranteed order mein wapas
// nahi aatay. Agar user "Alice" select kare, request jaye, phir turant
// 🔹 "Bob" select kar le — dusri request jaye — aur "Alice" ki response
// 🔹 "Bob" ki response ke BAAD wapas aaye, to galat (Alice ka) data screen
// pe overwrite ho sakta hai. Cleanup mein ignore=true set hone se stale
// response discard ho jata hai.

// 🔹 Downsides of fetching directly in Effects (docs ke mutabiq):
// (1) 🔹 Effects server pe nahi chalte -> initial HTML sirf "loading" state
// (2) 🔹 Network WATERFALLS ban sakte hain (parent fetch -> render child ->
//     child fetch = sequential, parallel nahi)
// (3) 🔹 Preload/cache nahi hota by default -> unmount+remount pe dobara fetch
// (4) 🔹 Boilerplate zyada (race condition manually handle karni padti hai)

// 🔹 RECOMMENDATION: Framework ka built-in data fetching use karo, ya
// 🔹 TanStack Query / SWR / React Router loaders jaisi caching library
// (Zain: ye wahi hai jo tum already TanStack Query aur RR7 loaders mein
// use kar rahe ho — best practice already follow ho rahi hai)

// ============================================
// 📘 Reactive Dependencies — "Choose" Nahi Kar Sakte
// ============================================

// 🔹 Effect ke andar jo bhi reactive value (props, state, ya component ke
// andar declare hui koi variable/function) use ho, wo dependency array
// mein HONI ZAROORI hai — manually skip nahi kar sakte. Linter enforce
// karta hai.

// 💻
function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, []); // 🔴 Linter error: roomId, serverUrl missing
}

// 🔹 Dependency hatane ka SAHI tareeqa: value ko "non-reactive" prove karo
// 🔹 — jaise component ke BAHAR move kar do:

// 💻
const serverUrl = 'https://localhost:1234'; // ab reactive nahi hai

function ChatRoom2({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]); // ✅ sirf roomId chahiye
}

// ⚠️ PITFALL: kabhi bhi eslint-disable comment se linter ko chup mat
// karwao — wo bug chupata hai, fix nahi karta. Reason: dependency aur
// code mismatch hote hue bhi warning gayab ho jati hai, bug wahi ka
// wahi rehta hai (missed re-connect, stale closure waghera).

// ============================================
// 📘 Previous State Se Update Karna (Interval Wala Common Bug)
// ============================================

// 🚩 Problem: count dependency ki wajah se interval har second reset hota hai
// 💻
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count + 1); // 'count' closure mein stale ho jata hai
    }, 1000);
    return () => clearInterval(intervalId);
  }, [count]); // 🚩 count change hote hi cleanup+resetup baar baar hoga
}

// ✅ FIX: updater function use karo, count ko dependency se hata do
// 💻
function Counter2() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(c => c + 1); // ✅ previous value khud milti hai, closure ki zaroorat nahi
    }, 1000);
    return () => clearInterval(intervalId);
  }, []); // ✅ ab count dependency nahi
  return <h1>{count}</h1>;
}

// ============================================
// 📘 Unnecessary Object/Function Dependencies Hatana
// ============================================

// 🚩 Problem: 'options' object har render pe NAYA banta hai (naya
// reference), isliye Effect zaroorat se zyada chalta hai:
// 💻
function ChatRoom3({ roomId }) {
  const options = { serverUrl, roomId }; // har render pe naya object
  useEffect(() => {
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [options]); // 🚩 hamesha "different" hai Object.is ke hisaab se
}

// ✅ FIX: object/function ko EFFECT KE ANDAR hi banao
// 💻
function ChatRoom4({ roomId }) {
  useEffect(() => {
    const options = { serverUrl, roomId }; // ab Effect ke andar
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]); // ✅ sirf primitive string dependency

  // 🔹 Same principle FUNCTIONS pe bhi apply hoti hai — function ko bhi
  // 🔹 Effect ke andar declare karo, bahar nahi, agar wo sirf usi Effect
  // ke liye hai.
}

// ============================================
// 📘 Latest Props/State Padhna Bina "React" Kiye — useEffectEvent
// ============================================

// 🔹 Scenario: Effect ko kisi value ki LATEST value chahiye, lekin us
// value ke change hone par Effect re-run NAHI hona chahiye.

// 💻
function Page2({ url, shoppingCart }) {
  const onVisit = useEffectEvent(visitedUrl => {
    logVisit(visitedUrl, shoppingCart.length); // hamesha LATEST value milti hai
  });

  useEffect(() => {
    onVisit(url);
  }, [url]); // ✅ sirf 'url' change pe chalega, shoppingCart change pe NAHI
}

// 🔹 RULE: Effect Events (useEffectEvent se bane) KABHI dependency array
// mein NAHI aate — ye "non-reactive" hote hain by design.

// ============================================
// 📘 Server vs Client Alag Content Dikhana
// ============================================

// 🔹 Effects sirf CLIENT pe chalte hain, server rendering ke dauran nahi.
// 🔹 Isliye agar localStorage jaisi client-only cheez chahiye:

// 💻
function MyComponent() {
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true); // ye sirf client pe chalega
  }, []);

  if (didMount) {
    // 🧪 client-only JSX (e.g. localStorage se data)
  } else {
    // 🔹 initial JSX (server ke sath match karne wala)
  }
}

// 🔹 CAUTION: sparingly use karo — slow connection wale users ko initial
// content der tak dikhega, phir sudden switch hoga (jarring UX). Zyada
// tar cases mein CSS se conditional show/hide better hota hai.

// ============================================
// 📘 Troubleshooting Reference Table
// ============================================

// 🔹 Effect mount pe 2 baar chalta hai
//   🔹 -> Strict Mode dev-only stress test, NORMAL hai, cleanup sahi likho

// 🔹 Effect har re-render pe chalta hai
//   🔹 -> dependency array bhool gaye (bilkul diya hi nahi), ya array mein
//      koi dependency har render pe naya reference bana rahi hai
//   🔹 -> debug: console.log(dependencies) har render pe, phir
//      🆚 Object.is(temp1[i], temp2[i]) se compare karo browser console mein

// 🔹 Infinite loop lag rahi hai
//   🔹 -> Effect state update kar raha hai JO dependency change kar deta
//      hai -> wapas Effect trigger -> loop
//   ❓ -> check: kya ye genuinely external system se sync ho raha hai?
//      ✅ agar sirf rendering ke liye data track karna hai, 'ref' use karo
//      (ref re-render trigger nahi karta)

// 🔹 Cleanup chal raha hai bina unmount ke
//   🔹 -> NORMAL hai — cleanup HAR dependency-change pe bhi chalta hai,
//      sirf unmount pe nahi. Agar cleanup code hai lekin setup mein
//      uska corresponding kaam nahi hai, ye code smell hai — cleanup
//      hamesha setup ko "mirror" kare (symmetrical rahe)

// 🔹 Visual flicker dikh raha hai Effect chalne se pehle
//   🔹 -> useLayoutEffect use karo (RARELY needed — sirf jab paint se
//      🔹 PEHLE measurement/positioning zaroori ho, jaise tooltip)





// ============================================
// 📘 Module Scope Kya Hai
// ============================================

// 🔹 Jo area component (ya kisi bhi function) ke BAHAR, file ke top level
// pe hota hai, wahi MODULE SCOPE kehlata hai. Har .js/.jsx file apne
// aap mein ek MODULE hai (ES Modules system mein).

// 💻
import { useState, useEffect } from 'react'; // ye bhi module scope mein hai

const serverUrl = 'https://localhost:1234'; // ye module scope variable hai

function ChatRoom({ roomId }) {
  // 🔹 ye COMPONENT scope hai — har render pe naya execution context
  const [count, setCount] = useState(0);
}

export default ChatRoom; // ye bhi module scope

// 🔹 Imports, exports, aur function/component ke BAHAR declare ki hui
// koi bhi cheez — sab module scope mein hoti hai.

// 🔹 Module scope wali cheezein SIRF EK DAFA banti hain jab file
// load/parse hoti hai — chahe component kitni bhi baar re-render ho,
// module scope wapas nahi chalta. Isi liye module-scope variables
// 🔹 "kabhi change nahi hote render ki wajah se" — unka koi taluq hi
// nahi render cycle se.

// ============================================
// 📘 Primitive vs Reference Type — Comparison Kaise Hoti Hai
// ============================================

// ⚠️ IMPORTANT CORRECTION: Primitives ke liye "memory address" wala
// concept apply hi NAHI hota jaisa reference types ke liye hota hai.

// 🆚 PRIMITIVES — VALUE se compare hote hain:
// 💻
let a = 5;
a = 10; // ye "same address pe value change" NAHI hai — 'a' ab ek NAYE,
        // 🔹 ALAG value ko point kar raha hai. Primitive CHANGE nahi hota,
        // primitive REPLACE hota hai.

// 💻
Object.is(5, 5);      // true — dono VALUES barabar hain
Object.is("a", "a");  // true — VALUES barabar hain
Object.is(5, 10);     // false — VALUES alag hain

// 🔹 Engine internally values kahan store karta hai — isse hume (aur
// 🔹 React ko) koi matlab nahi. Bas VALUES barabar hain ya nahi, yehi
// dekha jata hai.

// 🆚 REFERENCE TYPES (object, array, function) — ADDRESS se compare hote hain:
// 💻
let obj1 = { count: 5 };
let obj2 = { count: 5 }; // BILKUL alag object, ALAG memory location

obj1 === obj2; // false — content SAME hai lekin ADDRESS alag hai!

let obj3 = { count: 5 };
let obj4 = obj3; // obj4 ne obj3 ka SAME reference/address liya

obj4.count = 10;
console.log(obj3.count); // 10 — obj3 BHI change ho gaya, kyunki SAME
                          // 🔹 memory address share ho raha hai

// ============================================
// 📘 FINAL CORRECT COMPARISON TABLE (yaad rakhne wali)
// ============================================

// |                  | Kya compare hota hai      | Address ka role                          |
// |------------------|----------------------------|-------------------------------------------|
// | Primitive         | VALUE directly             | Address concept applicable hi nahi         |
// | Reference type    | MEMORY ADDRESS (reference) | Address hi decide karta content irrelevant |

// 💡 ONE-LINE YAAD RAKHNE KA TAREEQA:
// ❓ Primitive: "Kya VALUES barabar hain?"      -> VALUE-based comparison
// ❓ Reference: "Kya dono SAME OBJECT point kar rahe hain?" -> ADDRESS-based comparison

// ============================================
// 📘 React Mein Ye Kaise Apply Hota Hai (useEffect dependency array)
// ============================================

// 🔹 React HAMESHA Object.is(oldValue, newValue) use karta hai dependency
// compare karne ke liye. React kabhi galat "track" nahi karta — jo bhi
// 🔹 Object.is bolta hai, wahi follow hota hai, 100% consistent hai.

// 🔹 CASE 1: Primitive dependency — EXPECTED behavior milta hai
// 💻
function Component1({ count }) {
  const doubled = count * 2; // number — primitive

  useEffect(() => {
    console.log(doubled);
  }, [doubled]); // ✅ Effect sirf tab chalega jab doubled ki VALUE actually
                 // 🔹 change ho. count same rahे to doubled same -> skip hoga
}

// ⚠️ CASE 2: Object MUTATE kiya (same reference) — BUG milta hai
// 💻
function Component2() {
  const [obj, setObj] = useState({ count: 0 });

  const handleClick = () => {
    obj.count = 10;   // ❌ MUTATE kiya — SAME reference
    setObj(obj);        // same object wapas de diya
  };
  // Object.is(oldObj, newObj) -> SAME reference -> "true" (no change)
  // 🔹 -> re-render SKIP ho jayega, chahe content actually badal chuka ho!
}

// 🔹 CASE 3: Naya object banaya (different reference, chahe content same ho)
// 💻
function ChatRoom({ roomId }) {
  const options = { serverUrl, roomId }; // naya object HAR render pe

  useEffect(() => {
    // ...
  }, [options]);
  // 🔹 Har render pe {serverUrl, roomId} NAYA object literal hai
  // 🔹 -> Object.is HAMESHA "false" (different reference)
  // 🔹 -> Effect HAMESHA re-run hoga, chahe roomId/serverUrl actual mein
  //    same hi hon
}

// ============================================
// 📘 Component Ke Andar Variable (let/const) — Dependency Ban Sakti Hai?
// ============================================

// 🔹 HAAN — agar variable component ke ANDAR banti hai (chahe useState na
// ho), aur wo HAR RENDER PE FRESH calculate hoti hai current props/state
// se, to React usay track kar sakta hai:

// 💻
function ChatRoom2({ roomId }) {
  const upperRoomId = roomId.toUpperCase(); // har render pe fresh calculate

  useEffect(() => {
    console.log(upperRoomId);
  }, [upperRoomId]); // ✅ valid — REACTIVE value hai, React track kar sakta hai
}

// 🔹 WAJAH: React har re-render pe POORA component function body dobara
// execute karta hai — isliye 'upperRoomId' har render pe naye sire se
// calculate hota hai us render ke roomId se. Ye ise "reactive" banata hai.

// 🔹 LEKIN agar ye variable PRIMITIVE nahi, OBJECT/ARRAY/FUNCTION hai, to
// ⚠️ Case 3 wala problem aayega (upar dekho) — reference hamesha naya
// hoga chahe content same ho.

// ============================================
// 📘 SUMMARY TABLE — Variable Kahan Hai + Type Ke Hisaab Se Behavior
// ============================================

// | Variable Kahan Hai              | Type                        | Dependency Array Behavior                              |
// |----------------------------------|-----------------------------|--------------------------------------------------------|
// | Component ke BAHAR (module scope)| koi bhi                     | Kabhi change nahi hoti — dependency banana bekar hai    |
// | Component ke ANDAR (let/const)   | Primitive (string/num/bool) | ✅ Sahi kaam karta hai — VALUE compare hoti hai          |
// | Component ke ANDAR (let/const)   | Object/Array/Function       | 🚩 Har render pe "different" — Effect zaroorat se zyada chalega |
// | useState/useRef se aaya          | State value                 | ✅ Reactive, sahi tareeqe se track hota hai              |
// | useRef().current                 | Mutable ref                 | ❌ Kabhi bhi dependency ban hi nahi sakta (track hi nahi hota) |

// ============================================
// 📘 FIX — Object/Array/Function Dependencies Ka Masla
// ============================================

// 💻
function ChatRoom3({ roomId }) {
  useEffect(() => {
    const options = { serverUrl, roomId }; // ✅ object ab EFFECT KE ANDAR bana
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]); // ✅ sirf PRIMITIVE dependency — string compare hoti hai
}

// 🔹 ALTERNATIVE FIX: useMemo se reference ko stabilize karo jab tak
// content actual mein na badle:
// const options = useMemo(() => ({ serverUrl, roomId }), [serverUrl, roomId]);

// ============================================
// 📘 BOTTOM LINE
// ============================================

// 🔹 React KABHI bhi galat track nahi karta — Object.is jo bolta hai wahi
// follow karta hai, 100% consistent hai. "Problem" sirf ye hai ke
// objects/arrays/functions ke liye "value equality" nahi, "reference
// equality" use hoti hai — aur ye JavaScript ki fundamental design hai,
// 🔹 React ki limitation NAHI.