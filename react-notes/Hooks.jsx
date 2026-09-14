// what are hooks?

// A function which let you Hook into (use) React's state management and lifecycle features from a fucntional comp

// diff b/w hooks and comp. Comp returns JSX/ while Hook will returns obj or var or nothing or array

// comp must return a value (jsx or null). where as hook can skip returning a value.l


"Aur Custom Hooks basically factory functions hain jo har call pe naya state aur logic return karte hain."

"Functional components mein prototype chain directly nahi hoti kyunki ye plain functions hain. But JS ke core concepts zaroor kaam karte hain — Closure ki wajah se state aur props accessible rehte hain, Lexical Scope ki wajah se useEffect ke andar bahar ke variables mil jaate hain, aur Custom Hooks basically factory functions hain jo har component ko alag state aur logic dete hain."