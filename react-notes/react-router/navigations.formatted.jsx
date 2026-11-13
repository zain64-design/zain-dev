// ═══════════════════════════════════════════
// 📘 navigations
// ═══════════════════════════════════════════

// 🔹 to navigate in web app between pages
// 💻
const navigate = useNavigate();
const handleRedirect = ()=> {
    navigate('/About');
}

const goBack = ()=> {
    navigate(-1);
}

const goFwd = ()=> {
    navigate(1);
}

// 🔹 Link component ko tab use kiya jata hai jab aapko ek simple navigation link chahiye ho.
// 🔹 Yeh ek anchor tag ke tarah kaam karta hai jo ek different route par navigate karne ke liye hota hai, bina page reload ke.
// 🔹 Ismein koi additional functionality nahi hoti related to active route.

{/* <Link to="/about">About</Link> */}

// 🔹 NavLink component bhi Link ki tarah hi hai, lekin yeh additional functionality provide karta hai, specifically active state ke liye.
// 🔹 Jab aap kisi specific route par hote ho jo NavLink se match karta hai, toh yeh active class ya koi custom active style apply karta hai.
// 🔹 Iska use generally tab hota hai jab aapko dikhana ho ke kaunsa link currently active hai (jaise navbar ya side menu mein).

{/* <NavLink to="/about" activeClassName="active-link">About</NavLink> */}
