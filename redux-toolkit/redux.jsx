// key points

// website and webapp mein diff hota hai. jahan par hum ko data ko ziyada manage nahi karna hota wo websites hoti hein or jahan ziyada karna hota waha hum lib framework use karte.like react next angular to create web apps.react mein bhi hum data manage karsakte hein without redux or any other state management lib agar hamara data flow ziyada nahi hai.

// jab hum redux use karte hein to hamare saray comp k pass direct access hota hai hamary store se. 

// we can add logs when my data is getting updated and we can debug also using redux dev tools.

// redux ka data hamara local storage mein nahi hota yai by default stack and heap memory mein hota hai. heap memory mein obj rehte hein. yai local storage mein jab jata hai jab hum data ko persist karwate hein. agar hum page refresh karenge to data lost hojayega.

// react aik UI lib hai jo work karta hai comp ko kaise structure karna hai

// 1) redux immutability acheive karne mein help karta hai. Means mera obj aik specific way mein change ho ya wo change nahi ho.kyun agar mein obj ko kisi fn mein pass karun or wo function usko change karde to hamari app inconsistent state mein chali jayegi cuz obj work on references. and obj ko koi bhi fn change karega to hum ko idea nahi ho payega k kis fn k through change hua hai.agar koi bhi data update hoga to specific way mein update hoga 

// 2) redux js ki lib hoti hai agar hum ko react mein redux ka use karna hota hai to hum react-redux ka use karte hein jo redux ko react k sath connect karta hai.

// 3) initially hamary pass empty obj hota hai jisko hum store kehte hein redux mein. pori app mein jo data flow hota hai wo is obj store mein hota hai or is obj store ko hum directly update nahi karsakte. direct update karainge to issues anay lage ge.

// 4) agar hum ko store ko update karna hai to hum ko 3 steps ko follow karna hota hai:

// ==>1) hum ko action object create karna hota hai. or action object k pass specific key hoti hai type: jo yai define karti hai kis ko update karna hai or sath mein hum value pass karte hein jo hum ko change karni hoti hai

// ==>2) phr hum ko is action obj ko dispatch karna hota hai. disptach function hum ko useDispatch hook se milta hai or useDispatch hum ko react redux package se milta hai.

// ==>3) dispatch function ka work yai hota hai jitne bhi reducer function hum ne create kare hein un sub reducer function ko invoke karna or invoke karne k bad action obj ko reducer function mein pass karna.

// =>4) reducer function mein jo bhi checks & condition lagi hoti hain phr wo execute hongi. or state update hojayegi.

// ==>5) based on subscription jab data update hua to comp re-render hojata hai

// ==>6) subscription ka work useSelector karta hai agar hum ne apne comp useSelector ka use kar k koi data get kara hai or wo update hota hai to comp re render hota hai or yai re render useSelector trigger karta hai.And yai hamare store ko listen karta hai



// setup in react project

// 1) sub se pehle hum ko store import karna hota hai and provider or phr store ko initialize karna hota hai.

// 2) create store function mein 3 argument expect karta hai jis mein 1 required hai or 2 optional 1st is reducer function 2nd is persist state agar mein chahta hun k meri app load ho kuch specific data k sath. so i can pass object. and 3rd argument enhancers hote hein jo hamary store ko additional functionality dete hein

// 3) ab jab mera store bangaya to isko mujhay apne store ko apne project mein add karne k liyay provider comp use karna hoga root comp mein as wrapper and store ko pass kardunga. ab saray children comp mein redux use karsakta hun

// 4) ab hum ko action creators banane hein agar hum functions ka use karte hein actions ko create karne k liyay to wo action creator kehlata hai. action creator aisa fn hota hai jo aik plain obj return kare jis mein aik type key ho jis ko reducer function check karta hai or is type ki basis par hum apni state ko update karte hein (in js like this store.subscribe() and react redux mein behind the scene yai process hota hai or jaise hi store update hota hai useSelector store se data lata hai and new data return kardeta hai and useSelector update ko trigger karta hai. useSelector trigger the comp rerender. use selector check and compare karta hai previous and newly return value ko by using === agar value true hai means value same hai no need to render agar false hai to diff hai value to comp re render trigger hota hai)

// 5) ab reducer function create karna hai. reducer fn ka kaam hota hai state ko update kar k humko aik new state return karna reducer fun ko redux internally call karta hai jab call karta hai to hum ko state obj and wo action milta hai jo hum ne dispatch kara hai. and is hi action ka use kar k hum apni state ko update kar k return karte hein and actions are pure js obj.redux internally reducer fn ko actions k through call karta hai

// 6) agar data read karna hai to us k liyay useSelector() hook use karte hein redux ka. agar data upate karna hai to useDispatch() hook use karna hai redux ka jo actions dispatch karega take state immutable rahay agar change ho to aik specific function se update ho.

// 7) const dispatch = useDispatch(); ko call karne par hum ko fn milega is mein hum apna obj pass karna hoga jis ko action kehte hein. dispatch(addToCart()) mein ne addToCart() fn call kara jo k aik obj return karega.


const store = createStore(reducer,{})

// diff b/w context provider and redux:

// context provider is a dependency injection tool and redux is a state management tool. hum context provider ka use kar k koi aik info ko inject karwa sakte hein but hum pori app ka data manage nahi karwate. but use karsakte hein lekin phr hum ko debugging features nahi mile ge jaise data visualization & time travel debugging. exact data kahan se update hua hai yai nahi find karsakte

// context provider hum apni app ki small info store karne k liyay use karte hein like theme color change, language change. humko agar apne pori app ki state manage karni hai to hum ko context provider use nahi karna chahiyay kyun k us mein koi debugging tool nahi hota. yai aisa hai k hum normal react use kar rahay hein or props k through apne functions pass kar rahay hein with some a good management


// jab bhi hum redux mein kisi bhi action ko disptach karte hein to redux usko saray reducer function mein pass karta hai. isliyay kabhi bhi same name k actions apne reducer functions mein nahi likhne chahiyay