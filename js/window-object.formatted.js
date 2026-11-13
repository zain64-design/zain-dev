// ═══════════════════════════════════════════
// 📘 window-object
// ═══════════════════════════════════════════

// 🔹 "Browser mein jab JS run hoti hai, ek global execution context banta hai jiska global object window hota hai. Saari globally declared variables/functions is window object pe attach ho jaati hain."

// ❓ "Browser Context API kya hai?"
// ✅ "Browser Context API teen cheezон ka combination hai — Window Object, Stack, aur Heap Memory. Ye teeno mil ke JS ko browser mein execute karne ka environment provide karte hain."

// ❓ "Window Object kya hai?"
// ✅ "Window object browser ka global object hai jisme browser se related saari features hoti hain jaise alert, prompt, setTimeout etc. Iske andar DOM, BOM aur Core JS teeno hote hain. Jab bhi hum globally koi variable ya function declare karte hain, wo automatically window object pe attach ho jaata hai."

// ❓ "Stack kya hai?"
// ✅ "Stack wo memory hai jahan function calls track hoti hain aur primitive values store hoti hain. Ye LIFO order mein kaam karta hai — matlab jo function sabse baad call hua, wo sabse pehle complete hoga. Jab function call hota hai stack pe push hota hai, aur jab complete hota hai pop ho jaata hai."

// ❓ "Heap Memory kya hai?"
// ✅ "Heap wo unstructured memory hai jahan reference types yaani objects aur arrays store hote hain. Jab hum koi object banate hain, actual data heap mein store hota hai aur stack mein sirf uska reference/address hota hai."

// ❓ "Execution Context kya hai?"
// ✅ "Jab bhi koi function call hota hai, JS us function ke liye ek wrapper banata hai jise Execution Context kehte hain. Iske 3 parts hote hain — pehla Variable Environment jahan us function ke local variables, arguments aur declarations store hote hain. Doosra Scope Chain jiske zariye function apne parent scopes ke variables tak bhi access kar sakta hai, aur ye hi Closure ka base hai. Teesra this binding jo define karta hai ke is waqt this keyword kis object ko refer kar raha hai."

// ❓ "Lexical Environment kya hai?"
// 💻 "Lexical Environment Variable Environment aur Scope Chain ka combination hai. Ye determine karta hai ke koi function kin variables ko access kar sakta hai, aur ye decision code ki physical location ke basis pe hota hai — yaani jahan code likha gaya hai. Nested functions apne outer function ke variables access kar sakte hain, lekin outer function inner ke variables access nahi kar sakta. Ye Closure ka foundation hai.

// 🔹 "lexical env aik scope and scope chain create karta hai agar nested fn ho to jo yai decide karta hai k apka particular fn kin cheezon ko access karsakta hai and kin ko nahi karsakta"


// ❓ "Temporal Dead Zone (TDZ) kya hai?"
// ✅ "Jab let ya const se variable declare kiya jaata hai, to wo variable apne scope ke start se lekar us line tak accessible nahi hota jahan wo actually declare hua hai — is period ko Temporal Dead Zone kehte hain. Agar is zone mein variable access karne ki koshish karo to JS ReferenceError throw karta hai. var mein TDZ nahi hota kyunki var hoist hoke undefined ban jaata hai, lekin let aur const hoist toh hote hain but initialize nahi hote — isliye TDZ exist karta hai."

