// 1 HOC high order functions

// HOC Comp wo hota hai jo aik comp ko as input le or output bhi as props comp karay with updated comp

// controlled and uncontrolled comp

// uncont comp wo hote hein jo react state k through handle na hon using ref or js variables k through handle ho usko kehte uncont comp

// cont comp wo hote hein jo react state k through handle ho.

// useRef & useState hooks

// console.log('State:', count); actual count value ko log karta hai jo ki state update hone ke baad bhi purani value dikha sakta hai kyunki state update asynchronous hoti hai.
// console.log('Ref:', countRef.current); reference value ko log karta hai jo immediately updated hoti hai.

// Initial Render:

// Count: 0
// After First Click:

// State: 0 (log from previous render state)
// Ref: 1
// Count: 1 (updated in UI after re-render)

// const [count, setCount] = useState(0);
// const prevCountRef = useRef();

// useEffect(() => {
//   prevCountRef.current = count;
// }, [count]);

// const prevCount = prevCountRef.current;

// return (
//   <div>
//     <h1>Current Count: {count}</h1>
//     <h2>Previous Count: {prevCount}</h2>
//     <button onClick={() => setCount(count + 1)}>Increment</button>
//   </div>
// );

// useEffect vs useLayoutEffect

// useEffect:
// useEffect aik 1st time run hota hi hai jab hamara comp re-render hota hai or yai asynchronous chalta hai
// useEffect side effects ko handle karta hai jo render ke baad execute hote hain.
// Yeh asynchronous nature ka hota hai, matlab yeh browser paint (render) ke baad execute hota hai.
// Commonly use hota hai data fetching, subscriptions, ya manual DOM manipulations ke liye jo render cycle ko block nahi karte.
// useEffect component render hone ke baad execute hota hai aur data fetch karta hai.
// Browser paint hone ke baad useEffect execute hota hai aur fetched data ko state mein set karta hai.

// exp:1
// const [countOne,setCountOne] = useState(0);

// useEffect(() => {
//     // code we want to run
//     console.log('The Count is:', countOne);
//     // optional return cleanup function
// },[countOne]); // dependency array

// return (
//     <>
//       {InnerBannerSix.map(value => <InnerBanner key={value.id} data={value} />)}
//       <h1>Current Count: {countOne}</h1>
//       <button onClick={() => setCount(countOne - 1)}>Decrement</button>
//       <button onClick={() => setCount(countOne + 1)}>Increment</button>
//     </>
//   )

// exp:2

// function DataFetchingComponent() {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//       // Data fetching logic
//       fetch('https://api.example.com/data')
//         .then(response => response.json())
//         .then(data => setData(data));
//     }, []); // Empty dependency array means this effect runs only once after the initial render

//     return (
//       <div>
//         <h1>Fetched Data</h1>
//         <pre>{JSON.stringify(data, null, 2)}</pre>
//       </div>
//     );
//   }

// useLayoutEffect:

// useLayoutEffect side effects ko handle karta hai jo render ke baad, lekin browser paint (render) se pehle execute hote hain.
// Yeh synchronous nature ka hota hai, matlab yeh browser ko render complete karne se pehle block kar sakta hai.
// Commonly use hota hai DOM manipulations ke liye jo immediately reflect karni chahiye before painting, jaise ki measuring DOM elements, synchronizing layouts, etc.

// Key Differences
// Timing:

// useEffect: Render ke baad execute hota hai, paint hone ke baad.
// useLayoutEffect: Render ke baad, lekin paint hone se pehle execute hota hai.
// Blocking:

// useEffect: Asynchronous, render cycle ko block nahi karta.
// useLayoutEffect: Synchronous, render cycle ko block kar sakta hai jab tak effect execute nahi ho jata.
// Use Cases:

// useEffect: Data fetching, subscriptions, logging, etc.
// useLayoutEffect: DOM measurements, synchronizing layouts, style calculations, etc.

// "Paint hone ke baad" ka matlab hai ki jab browser ek component ko render karta hai, to ye process kuch steps mein hota hai:

// JS Thread Execution: JavaScript code execute hota hai jo component ko render karta hai. Isme hooks jaise useState, useEffect, etc., execute hote hain.

// Virtual DOM Update: React virtual DOM update hota hai. Yeh ek in-memory representation hoti hai actual DOM ki jo React use karta hai component updates ke manage karne ke liye.

// Render: Virtual DOM update hone ke baad, actual DOM elements ko update kiya jata hai jo hum dekhte hain browser mein.

// Paint: Finally, browser actual DOM elements ko screen par paint karta hai, jise hum visual representation ke roop mein dekhte hain.

// Jab hum kehte hain ki "paint hone ke baad", to hum useEffect ka matlab lete hain ki ye effect tab execute hoga jab component render ho chuka hai, virtual DOM update ho chuka hai, aur actual DOM elements ko browser ne paint kar diya hai. Iska matlab hai ki component ke state changes ya updates UI par reflect ho chuke hain, lekin ye effect execute hone se pehle ho sakta hai ki browser ne UI ko actual screen par paint nahi kiya ho.

// Is tarah se, React ke useEffect hook ka behavior asynchronous hota hai aur ye render cycle ko block nahi karta, jabki useLayoutEffect hook ka behavior synchronous hota hai aur ye effect execute hone se pehle render cycle ko block kar sakta hai.

// what is react profiler?

// React Profiler is a performance profiling tool provided by Facebook's React library. It helps developers identify performance bottlenecks in their applications and helps them make more efficient use of resources.

// what is the difference b/w custom hooks vs js function ?

// Custom hooks are reusable functions that encapsulate logic related to a specific component. They allow developers to extract and reuse stateful logic from a component without the need to manually manage state and lifecycle methods. Custom hooks make it easier to write more readable and maintainable code.

// what is the difference b/w framework and library ?

// framework mein pehle se flow define hota hai like api kahan or kaise kis name se bane gi. kahan par helper methods rahay ge kaise file structure rahay ga route kaise banege. but lib mein flow manually define karna hota hai. aik framework k andar multiple lib hosakti hein but aik lib k andar frame work nahi hosakta kabhi bhi

// jab hum ko functional comp k andar lifecycle methods use karne hote hein to hum react hooks use karte hein lekin kya react hooks saray lifecycle methods ko cover karta hai k nahi?

// nahi 3 aise lifecycle methods hein jinko hooks cover nahi karta
// 1) getSnapShotBeforeUpdate,  2) getDriveStateFromError,  3) ComponentDidCatch

// what is jsx?

// JSX is a JavaScript syntax extension that allows you to write HTML-like syntax within JavaScript. It is used to create React elements and render them to the DOM. JSX allows developers to write more readable and maintainable code by combining HTML elements with JavaScript expressions.

// Context api is alternative of redux ?

// context api use ki jati hai prop drilling ki problem ko resolve karne k liyay.

// map vs forEach

// map is a higher order array method that creates a new array with the results of calling a provided function on every element in the original array. It does not modify the original array.

// jab map fn k sath loop use karte hein to map fn return karta poray loop ko or usko print karta hai jsx mein.

// forEach loop bana deta hai but return nahi karta kuch.

// d/b react custom hooks and js fn:

// custom hooks as fn use hosakte hein. custom hooks k andar react js k lifecyle methods use karsakte hein

// react mvc architecture ko follow nahi karto agar hum rtk use karte hein to model ajayega and view already hota hai but controller nahi hoga phr bhi.

// react js fast work kaise karta hai?

// react js virtual dom use karta hai jis mein uske pass 2 layers hoti hein aik update se pehle ki aik update k baad ki. for exp jab bhi hum on click par kuch bhi fetch karte hein ya update karte hein to vd dono layers ko compair karta hai un mein se jo bhi div ya data change hota hai sirf us hi ko change kar k dikhaye ga baqi sub as it is rehta hai. baqi dosre frame works mein jaise k angular un mein jab dom mein changes hoti hein to pora dom repaint hota hai.

// what is useID hook ?

// useID hook unique id generate karne k liyay use kiya jata hai.

// frontend master react notes:

// react kaunsi problems solve karta hai:
// 1) reduce number of DOM Operations.(to minimize the DOM updates) cuz DOM manupulate sub se costly hoti hai web dev mein like agar hum 1000 arrays par loop chala dein wo cheap hai rather than we do document.getElementById(name).style.color = 'red' karain yai ziyada costly hota hai. kyun k browsers dom manupulation k liyay bane hi nahi hein browsers bus bane thay text document ko dikhane k liyays in 1990

// 2) browsers jo hai wo c++ mein likhe gaye hein jo k apne aap mein aik fast language hai but js is high level scripting,single threaded, slow language and js kabhi bhi hardware se direct interact nahi karsakti js ko hardware se interact karne k liyay 2nd lang ki need hogi like c++ low level language. scripting lang are just to give instruction to a low level language what i want todo.

// 3) browser mein jo js engine hote hein v8 waghera unka yahi work hota hai js code ko convert karna into low level lang code so that c++ usko understand karsake is process mein bohat sare translation conversions hote hein jiski waja se web slow hojata hai. jab hum aise karte hein document.getElementById yai js ka code nahi hai yai browser ka code hai.js is fn ko call karta hai or c++ ko bataye usko kya perform karna hai.

// 4) agar hum aise karain document.getElementsByTagName('div') to hum ko jo HTMLCollection(224)[] mein obj milega wo c++ ka obj hota hai. CGRect() and DrawRect() these are c++ methods jab bhi hum koi dom manupulation karte hein to yai do methods call hote hein is waja se yai operation costly hai.

// 5) is problem ko react resolve karta hai by concilation VDOM is a simply plain object hai jo DOM ko rep karta hai jab hum js k through dom ko update karte hein to dom directly update hota hai. but jab react ka use kar k dom update karte hein to react directly dom ko update nahi karta wo check karta hai k dom mein kuch changes karne ki need hai agar hai jab hi wo update karta hai dom ko

// 6) waybackmahicne web jab hum website mein kisi link k trough kisi dosre page par redirect karte hein to page reload hota hai or sari files again dowbload hoti hein.is problem ko solve karne k liyay pehle ajax aye jo aik asynch js hai isk through web page par content dynamically change hota tha without refreshing the page phr baad mein fetch and axios methods aye.

// 7) React aik SPA hai single page application is mein hamara web page reload nahi hota jo content hum ko change karwana hai just wo change hota hai. aik traditional web mein jitne url hote hein utne pages create hote hein. but aik SPA mein url change hota hai but web reload nahi hoti. hum sara content js k through update karte hein jab content ki need hoti hai hum download karlete hein

// 8) react router hum ko yai functionallity deta hai k hum apne content ko with out reload change karsake.

// what is react

// 1) normally kaha jata hai k react is a js lib for building UI. but in reality react dom operation ko reduce karne k liyay bani hai. dom oper reduce jab honge jab react ka use kar k UI banaye.

// 2) imparative means like we create button using js and declarative means hum ne react ko batana k hum ko kya chahiyay

// 3) react mein comp means functions hote hein

// 4) react par work karn k liyay 2 lib ki need hoti react and react dom and babel.

// 5) react project create karen k 4 ways hein CRA create react app,  VITE,  CDN & manually npm init.

// 6) babel jsx ko transpiler karta hai normal html js mein take browser usko read karsake.

// 7) jsx ka full form javascriptXML jo k react team ne banaye hai. jsx is a syntax extention means js file ko extend karsakte hein in jsx. jsx ka purpose yai k hum UI and logic ko aik sath likh sake.multiple elements jsx comp se return karne k liyay hum div [] and react fragments ka use karte hein.kyun k normal fun mein hum multiple value return nahi karsakte hum ko phr yai array banana parega ya phr obj. is waja se react mein hum jab fragments ka use karte hein to wo function call hota hai bable us fragment ko obj mein convert kardeta hai.

// 8) react functional comp mein jo return kara jata hai angle brackets mein us ko jsx kehte hein or wohi part babel fun call mein change kar k html create karta hai.

// 9) React aur JSX XSSc cross site scripting attacks se prevent karta hai is se bachne ke liye kuch built-in protections provide karte hain, jaise automatic escaping.

// 10) react mein className is liyay likha jata hai class dene k liyay kyun at the end jsx js mein convert hogi or js mein class reserved keyword hota hai jo k js mein class banane k liyay use hota hai

// 11) in react we need to return must be some thing by comp like UI Element, Null its manadatory. component is a fn thats returns a ui elements.props are immutable only parent comp can be change them not child

// 12) react mein comp name hamesh Capital hona chahiyay take html tag and comp mein diff rahay bable transpilation k time error na aye

// 13) In react jab web app load hoti hai to us time react dom actual dom ko read karta hai like document kar k.Phr us k baad react dom aik plain js obj banata hai us mein type and value hote hein jo k aik originalVDOM obj hota hai actual DOM ka us k bad aik copy obj banta hai originalVDOM ka. Phr us k baad hamari app mein jo bhi changes hoti hein react wo chnages copyOriginalVDOM obj mein change karta hai. Or ui update karte waqt originalVDOM and copyoriginalVDOM mein check karta hai kya copyoriginalVDOM obj mein kuch change hua hai agar change hota hai to us change ko originalVDOM mein change karta and then usko ui par show karta hai.

// Initial Load
// Virtual DOM Creation:

// Component Initialization: Jab React application load hoti hai, components create kiye jaate hain aur unki initial state aur props set kiye jaate hain.
// Generate Initial VDOM: React ek initial Virtual DOM (VDOM) create karta hai jo components aur unke states ko represent karta hai. Ye VDOM ek JavaScript object hota hai.
// Render to Actual DOM:

// Mounting: React is initial VDOM ko actual DOM me render karta hai. Is process ko "mounting" kehte hain.
// Initial DOM Creation: React ReactDOM.render function ke zariye VDOM ko DOM elements me convert karta hai aur user ko visible content milta hai.
// Subsequent Updates
// State/Props Changes:

// Trigger Changes: Agar user interaction ya data changes ke wajah se state ya props change hoti hain, to React ko updates handle karni hoti hain.
// Generate Updated VDOM: React ek updated Virtual DOM create karta hai jo latest state aur props ko represent karta hai.
// Reconciliation:

// Diffing Algorithm: Updated VDOM ko current VDOM (jo pehle se render ho chuka hai) ke sath compare kiya jata hai. React ka diffing algorithm differences identify karta hai.
// Update Current VDOM: Jo changes detect kiye gaye hain, wo current VDOM (original VDOM) me apply kiye jate hain. Yeh process intermediate "copy" ke zariye hoti hai, jisse ki React ko pata chalta hai ki kya changes actual DOM me apply karne hain.
// Apply Changes to Actual DOM:

// Generate Update List: Jo differences updated VDOM aur current VDOM ke beech detect kiye gaye hain, unhe ek update list me convert kiya jata hai.
// Commit Phase: React commit phase me in updates ko actual DOM me apply karta hai. Is process me actual DOM elements ko update, add, ya remove kiya jata hai based on the changes.

// Summary
// Initial Load:

// Create initial VDOM.
// Render initial VDOM to actual DOM (mounting).
// Subsequent Updates:

// On state/props change:
// Create updated VDOM.
// Compare updated VDOM with current VDOM (Reconciliation).
// Apply differences to current VDOM.
// Commit changes to actual DOM.
// Example Flow
// Initial Load:

// Original VDOM: <div>Hello, World!</div>
// Render to actual DOM: <div>Hello, World!</div>
// State Change Example:

// Updated VDOM: <div>Hello, React!</div>
// Diffing: Compare updated VDOM with original VDOM.
// Update Current VDOM: Reflect changes in the current VDOM.
// Commit: Update actual DOM to <div>Hello, React!</div>

// jsx transpilation

// Summary of the Flow
// JSX to JavaScript: JSX transpile hota hai JavaScript functions (like React.createElement).
// Create Virtual DOM: React.createElement function virtual DOM node create karta hai.
// Convert to Fiber Node: Virtual DOM node ko Fiber Node mein convert kiya jata hai (React Fiber architecture).
// Render to Actual DOM: Fiber Node changes ko actual DOM mein apply kiya jata hai during the commit phase.

// JSX Code:
function MyComponent() {
  return <h1>Welcome to React</h1>;
}

//   Transpiled Code:

function MyComponent() {
  return React.createElement("h1", null, "Welcome to React");
}

//   Virtual DOM Node:

const virtualDOMNode = React.createElement("h1", null, "Welcome to React");

// Fiber Node Conversion:

const fiberNode = createFiberNode(virtualDOMNode);

// Render to Actual DOM:
ReactDOM.render(<MyComponent />, document.getElementById("root"));

// Actual DOM Output:

<h1>Welcome to React</h1>;
