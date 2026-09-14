// inko lifecycle events kehte hein jo class based comp mein hote hein
// kab comp UI par show hua (componentDidMount)
// kab comp UI par update hua (componentDidUpdate)
// kab comp UI par se ghayeb hua (componentWillUnmount) -- ⚠️ CORRECTED naam
// (componentDidUnmount naam ka koi method hota hi nahi; unmount se pehle
// cleanup ka mauqa dene wale method ko "Will" prefix milta hai)

// React.createElement Call: Jab aap <MyComp title="Hello, World!" /> likhte
// hain, React isse internally React.createElement ke through handle karta hai.

<MyComp title="Hello, World!" />
React.createElement(MyComp, { title: "Hello, World!" });

// Element Object: React.createElement function ek object return karta hai,
// jo element ka representation hota hai. Yeh object component type
// (yani MyComp) aur props (yani { title: "Hello, World!" }) ko include karta hai.

// Component Function Call: Uske baad, React is element ko render karne ke
// liye MyComp function ko call karta hai:

MyComp({ title: "Hello, World!" });

// Is call ke andar aapko props ka object milta hai, jisse aap component
// ke andar access kar sakte hain.

// Agar aapka component kuch is tarah hai:
const MyComp = (props) => {
    return <h1>{props.title}</h1>;
};

// Toh jab aap <MyComp title="Hello, World!" /> likhte hain, React is
// process ko follow karta hai:
// React.createElement(MyComp, { title: "Hello, World!" });
// MyComp({ title: "Hello, World!" }); — isse h1 element render hota hai.

// React mein functional components mein lifecycle methods ka direct
// concept nahi hota kyun ke wo class components ke liye design kiye
// gaye hain. Is wajah se React ne Hooks introduce kiye hain, jo
// functional components mein lifecycle methods jaisa behavior implement
// karne mein madad karte hain.

// Hooks ka purpose yehi hai ke tum functional components mein bhi wohi
// lifecycle functionality achieve kar sako jo pehle sirf class components
// mein milti thi. Jaise:

// (1) useEffect hook se tum mounting, updating, aur unmounting ko control
//     kar sakte ho. But its not a lifecycle hook at all — it will
//     synchronize our comp from outside react world
// (2) useState hook se tum functional components mein state management
//     kar sakte ho, jo pehle sirf class components ke liye available tha.

// Class Components mein lifecycle methods (componentDidMount,
// componentDidUpdate, componentWillUnmount, etc.) directly use hote hain.

// Functional Components mein lifecycle methods ka direct access nahi
// hota, isliye hum Hooks ka use karte hain, jaise useEffect, useState,
// etc., jo synchronize way mein lifecycle ke phases (mounting, updating,
// unmounting) ko handle karte hain.

// ⚠️ CORRECTED: Render order vs Mount/Effect order — ye do ALAG cheezein
// hain, in dono ko mix nahi karna:
//
// RENDER order (function calls): PARENT pehle call hota hai (top-down /
// pre-order). Parent apna JSX return karta hai, TAB React uske andar
// diye gaye child components ke functions call karta hai. Matlab
// render mein parent PEHLE, child BAAD mein.
//
// MOUNT/EFFECT order (useEffect chalna): Iska ULTA hota hai — CHILD ke
// effects PEHLE fire hote hain, phir PARENT ka effect (bottom-up). Ye
// commit phase mein hota hai, render phase se bilkul alag cheez hai.
//
// (pehle "child pehle render+mount hota hai, phir parent" likha tha —
// "render" term galat tha; render parent-first hai, sirf effect/mount
// wala part child-first hai)

// agar comp unmount karna hota hai to hum conditional rendering karte
// hein jo k hum jsx mein js ka use kar k karte hein boolean value ki
// base par — yaha number ki base par conditional rendering nahi hosakti,
// for example agar humne 0 value di jo k js mein falsy hota hai but
// react usko as number consider karega or render kardega (literal "0"
// screen pe dikh jayega). Is problem ko solve karne k liyay hum !!0 use
// karenge (double not/bang operator) — kisi bhi data type ko boolean
// mein convert karsakte hein.

// ⚠️ CORRECTED: Unmount order bhi bottom-up hota hai (mount jaisa hi
// symmetrical) — sub se pehle CHILD comp ka cleanup chalta hai, uske
// baad PARENT ka. (pehle likha tha "parent pehle unmount hota hai" jo
// galat tha — cleanup wahi order follow karta hai jis order mein
// effects "attach" hue thay, yani children first)

// React strict mode comp ko rerender karta hai, useEffects ko mount
// unmount and again mount karta hai (dev-only extra cycle), deprecated
// koi function use karte ho to error throw karta hai.

// React Strict Mode mein kuch additional checks hote hain jo development
// environment mein help karte hain. Yeh checks ensure karte hain ke
// tumhara code future-proof ho aur React ke best practices follow kare.
// Strict Mode kuch specific actions perform karta hai jo normally
// production mode mein nahi hote. Jaise:
// (1) component render function ko dev mein 2 baar call karna (pure
//     rakhne ke liye check)
// (2) Effect ke setup+cleanup ko ek extra dafa chalana (mount pe)

// agar hum ko react mein kisi jaga bhi reactivity chahiyay means kisi
// change par kuch perform karna ho to waha hum state var use karte hein

// react mein hum jo kuch bhi comp function k outside rakhte hein wo
// rerender cycle se bahir hoti hai



// ============================================
// Lifecycle of Reactive Effects — Official Docs Notes
// ============================================

// ============================================
// Effect Ka Lifecycle Component Se ALAG Hai
// ============================================

// Component lifecycle: mount -> update -> unmount
// Effect lifecycle: sirf 2 cheezein -- START synchronizing, STOP synchronizing
// Ye start/stop cycle MULTIPLE baar ho sakta hai jab tak component
// mounted rahe, agar Effect kisi changing prop/state pe depend karta ho.

// MINDSET: Effect ko "callback jo mount ke baad chalta hai" ki tarah mat
// socho. Iske bajaye socho: "ye Effect kis cheez ko sync kar raha hai,
// aur kaise start/stop karta hai" -- bas yehi do sawal.

useEffect(() => {
  const connection = createConnection(serverUrl, roomId);
  connection.connect();       // <- START synchronizing
  return () => {
    connection.disconnect();  // <- STOP synchronizing
  };
}, [roomId]);

// ============================================
// Sync Multiple Baar Kyun Zaroori Hoti Hai
// ============================================

// Socho user dropdown se roomId "general" se "travel" pe switch karta hai:
// - UI turant update ho jati hai
// - Lekin Effect ABHI BHI "general" room se connected hai -- UI aur
//   actual system ab OUT OF SYNC hain
//
// React ko 2 kaam karne hain:
// (1) Purani sync band karo (general se disconnect)
// (2) Nayi sync start karo (travel se connect)
//
// Ye dono kaam pehle hi sikhaye hue hain: setup fn = start, cleanup fn = stop.
// React sirf inhe SAHI ORDER mein, SAHI VALUES ke sath call karta hai.

// ============================================
// Re-synchronize Kaise Hota Hai (Step by Step)
// ============================================

// roomId "general" -> "travel" hone par:
// (1) React PURANA CLEANUP chalata hai (jis roomId se connect hua tha
//     usi ke sath -- yani "general" se disconnect)
// (2) React NAYA SETUP chalata hai (naye roomId "travel" ke sath connect)
//
// Phir "travel" -> "music" ho to same cycle repeat: disconnect travel,
// connect music. Component unmount ho to last dafa disconnect music.

// ============================================
// "Effect Ke Perspective Se Sochna" — Sabse Bada Mindset
// ============================================

// Component perspective se dekhna (CONFUSING tareeqa):
// 1. Mount hua roomId="general"
// 2. Update hua roomId="travel"
// 3. Update hua roomId="music"
// 4. Unmount hua

// Effect perspective se dekhna (SAHI tareeqa) -- non-overlapping time
// periods ki tarah:
// 1. Effect connected tha "general" room se (jab tak disconnect na hua)
// 2. Effect connected tha "travel" room se (jab tak disconnect na hua)
// 3. Effect connected tha "music" room se (jab tak disconnect na hua)

// QUOTE-WORTHY RULE: Hamesha ek single start/stop cycle pe focus karo.
// Ye matter nahi karna chahiye ke component mount ho raha hai, update
// ho raha hai, ya unmount ho raha hai. Bas describe karo start kaise
// karna hai aur stop kaise karna hai. Agar ye sahi kiya, Effect
// resilient hoga chahe jitni baar start/stop ho.

// ============================================
// React Verify Kaise Karta Hai Re-sync Kaam Karta Hai — Strict Mode
// ============================================

// Pehli dafa mount hone par dev mode console mein 3 logs aate hain:
// 1. Connecting to "general"...   (dev-only)
// 2. Disconnected from "general"  (dev-only)
// 3. Connecting to "general"...
//
// WAJAH: React jaan-boojh kar ek extra setup->cleanup->setup cycle
// chalata hai -- jaise darwaza khol kar band karke check karte ho ke
// lock sahi kaam kar raha hai. Ye verify karta hai ke tumhara CLEANUP
// sahi implement hua hai.

// ============================================
// Dependency Array Ka Asli Kaam
// ============================================

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]); // tum React ko keh rahe ho: "ye Effect roomId pe depend karta hai"
}

// Har render ke baad React dependency array ko PREVIOUS render ke array
// se compare karta hai (Object.is se). Koi bhi value different hai to
// RE-SYNCHRONIZE hota hai. Sab same hain to Effect chupchap connected
// rehta hai, kuch nahi hota.

// ============================================
// Ek Effect = Ek Independent Synchronization Process
// ============================================

// ❌ GALAT — do alag processes ek Effect mein mix kar diye:
useEffect(() => {
  logVisit(roomId);            // analytics -- ye ek ALAG process hai
  const connection = createConnection(serverUrl, roomId);
  connection.connect();
  return () => connection.disconnect();
}, [roomId]);

// PROBLEM: agar future mein is Effect mein koi aur dependency add ho
// (jaise serverUrl, sirf connection ke liye zaroori), to logVisit bhi
// UNNECESSARILY dobara chalega -- jo galat hai.

// ✅ SAHI — alag Effects:
useEffect(() => {
  logVisit(roomId);
}, [roomId]);

useEffect(() => {
  const connection = createConnection(serverUrl, roomId);
  connection.connect();
  return () => connection.disconnect();
}, [roomId, serverUrl]);

// TEST: agar ek Effect DELETE karne se dusre ka logic na tootey, to
// matlab wo genuinely 2 alag synchronization processes hain -- split
// karo. Decision "code clean lagta hai" pe base MAT karo -- decision
// "kya ye same process hai ya alag" pe base karo.

// ============================================
// Reactive Values — "Effects React Karte Hain Reactive Values Pe"
// ============================================

const serverUrl = 'https://localhost:1234'; // component ke BAHAR -- kabhi change nahi hota

function ChatRoom2({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]); // serverUrl dependency NAHI hai -- kyunki wo kabhi change hi nahi hoti
}

// RULE: Props, state, aur component body ke andar declare hui koi bhi
// variable/function -- SAB reactive hain. Ye sab render ke DAURAN
// calculate hote hain. Jab in mein koi change hoti hai, React NAYA
// render karta hai, aur is naye render mein Effect ko dependency-array
// compare se pata chal jata hai ke value badal gayi.

// ============================================
// Empty Dependency Array [] Ka Asli Matlab
// ============================================

const serverUrl2 = 'https://localhost:1234'; // bahar
const roomId2 = 'general'; // bahar

function ChatRoom3() {
  useEffect(() => {
    const connection = createConnection(serverUrl2, roomId2);
    connection.connect();
    return () => connection.disconnect();
  }, []); // ✅ koi reactive value use hi nahi ho rahi
}

// Component perspective se: [] matlab "sirf mount pe connect karo, sirf
// unmount pe disconnect karo" (plus dev mode ka extra stress-test cycle).
//
// Effect perspective se (BETTER): iska matlab hai aaj is Effect ki KOI
// reactive dependency nahi hai. Kal agar roomId dynamic banana ho, Effect
// ka CODE change nahi karna padega -- sirf dependency array mein add
// karna hoga.

// ============================================
// Component Body Ki HAR Variable Reactive Hai
// ============================================

function ChatRoom4({ roomId, selectedServerUrl }) { // roomId reactive
  const settings = useContext(SettingsContext);       // settings reactive
  const serverUrl3 = selectedServerUrl ?? settings.defaultServerUrl; // ye BHI reactive!

  useEffect(() => {
    const connection = createConnection(serverUrl3, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, serverUrl3]); // dono chahiye
}

// serverUrl3 na prop hai na state -- regular variable hai jo render ke
// dauran CALCULATE hoti hai. Lekin chunki render ke dauran calculate
// hoti hai, re-render pe CHANGE ho sakti hai -- isliye ye bhi reactive hai.

// ============================================
// Mutable Values Dependency NAHI Ban Sakti
// ============================================

// location.pathname ya ref.current jaisi MUTABLE values kabhi dependency
// nahi ban saktin:
// - React ke render data flow ke BAHAR kabhi bhi change ho sakti hain
// - Inka change hona RE-RENDER TRIGGER NAHI karta
// - Isliye dependency array mein daal bhi do, React ko PATA HI NAHI
//   chalega ke ye change hui -- rendering ke dauran mutable data padhna
//   React ki PURITY RULE bhi todta hai
//
// ALTERNATIVE: external mutable values ke liye useSyncExternalStore use karo

// EXCEPTION: useState ka SET FUNCTION aur useRef ka REF OBJECT (khud,
// .current nahi) STABLE hote hain -- React guarantee karta hai re-render
// pe change nahi honge. Isliye dependency array se OMIT kiye ja sakte
// hain (include karna bhi allowed hai, farq nahi padta).

// ============================================
// Linter Se Disagree Ho To Kya Karo (Suppress Kabhi Nahi)
// ============================================

// 3 legitimate solutions jab Effect zaroorat se zyada re-sync ho raha ho:
// (1) Check karo Effect independent process hai ya nahi -- agar kuch
//     sync nahi ho raha, shayad Effect ki zaroorat hi nahi. Multiple
//     cheezein sync ho rahi hain to split karo.
// (2) Latest value chahiye bina "react" kiye -- Effect ko reactive aur
//     non-reactive parts mein split karo, non-reactive part ko
//     useEffectEvent mein nikalo.
// (3) Object/function dependencies avoid karo -- render ke dauran bane
//     objects/functions har render pe naye hote hain, Effect ke andar
//     move karo.

// 🔴 KABHI MAT KARO: eslint-disable comment se linter chup karana --
// ye bug CHUPATA hai, FIX nahi karta.

// ============================================
// Recap (Interview Cheat Sheet)
// ============================================

// - Components mount/update/unmount karte hain -- Effects sirf
//   START/STOP karte hain synchronization
// - Har Effect apna ALAG lifecycle rakhta hai component se
// - Har Effect ek SEPARATE synchronization process describe karta hai
// - Effect likhte/padhte waqt EFFECT ke perspective se socho (start/stop),
//   component ke perspective se nahi (mount/update/unmount)
// - Component body ki HAR value reactive hai (props, state, aur unse
//   calculate hui koi bhi variable)
// - Reactive values Effect ko RE-SYNCHRONIZE karati hain kyunki wo time
//   ke sath change ho sakti hain
// - Linter HAMESHA sahi hota hai jab dependency missing flag kare --
//   suppress mat karo, code restructure karo