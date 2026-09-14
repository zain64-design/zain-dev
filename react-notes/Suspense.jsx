🟢 Suspense lets you display a fallback UI until its children have finished loading.
1️⃣ aik component ko instead of direct importing that we can import that in a while like lazy loading.
2️⃣ Suspense promise ko check karta hai k child component promise throw kar raha hai ya nahi, agar throw kar raha hai to fallback UI show karega jab tak ki promise resolve nahi ho jata. cuz component can return to things either null or jsx. suspense promise ko listen karta rehta hai agar promise resolve hota hai to wo phr us promise ko return nahi karta
 