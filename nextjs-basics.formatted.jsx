// ═══════════════════════════════════════════
// 📘 nextjs-basics
// ═══════════════════════════════════════════

//  ❓ What is your project named? my-app
// ❓ Would you like to use TypeScript? No / Yes  (No)
// ❓ Would you like to use ESLint? No / Yes (Yes)
// ❓ Would you like to use Tailwind CSS? No / Yes (No)
// ❓ Would you like to use `src/` directory? No / Yes (Yes)
// ❓ Would you like to use App Router? (recommended) No / Yes (Yes)
// ❓ Would you like to customize the default import alias? No / Yes (Yes)

// npx npm-check-updates -u


// ❓ what is components ?
// ✅ comp aik reusable function hota hai jo k jsx ko return karta hai or comp ko render karne k liyay compe ka first letter capital hona chahiyay means camel case. <Button/>

// 🔹 when ever we create and export our rc like this {rafce} : ==> (export default Blog) we need to import rc like this:==> (import Blog from"@/components/Blog")

// 🔹 when ever we create and our rc like this:==> ( export async function Blog() {} ) we need to import rc like this:==> (import {Blog} from"@/components/Blog")


// ❓ what is rendering:

// 🔹 Rendering ka matlab hai k code ko browser par execute karna means jsx ko browser par html mein convert
// kar k dekhana.

// 🔹 rendering environment:

// 🔹 iska matlab hai 2 tarha se rendering hosakti hai client side or server side. client side means
// k jab bhi koi site visit karoge to code ap k browser par ane k baad render hoga. server side mein code server par convert ho k ata hai browser par.


// ❓ what is pre-rendering:
// ✅ jab hamara code server side env k andar html generate kar k deta hai to usko kehte hein pre-rendering.
// ✅ pre-rendering ka matlab k code browser par ane se pehle hi render ho chuka hai. Means hamara code pehle hi server side par html mein generate ho chuka hai.

// 🔹 (Part 1) static generation:
//  🔹 jab hum build banate hein npm run build command se jab hi hamara html page generate hojata hai server par save rehta hai.
//  🔹 Or jaise hi hum website ko access karte hein to html page server se uth k hamare browser par ajata hai.
//  🔹 or yai generated page kisi bhi user ki req par reused hota hai. har bar req par new html page generate nahi hota server par.

// 🔹 (Part 2) server side rendering:
// 🔹 is mein jab user req karta hai to req time par dynamically html generate hota hai server se browser par.
// 🔹 agar 100 users aik hi page par req karainge to jsx ka code har user ki req par us k browser par usko html generate kar k dega server se browser par.

// 🔹 Pre Rendering:
// 🔹 By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.

// ❓ what is state ?

// 🔹 state aik container hota hai means comp obj hota hai jo k comp k inside use hota hai outside use nahi karsakte. Incase state data ko agar kisi dosre comp mein use karna hai to usko as props pass kar k comp mein use karsakte hein.state kind of js variables jaise data store karta hai but but js var comp ko rerender nahi karsakta lekin state ko declare karte hein or update karte hein to wo comp ko rerender karta hai.

// 💻
example:

const CompName = () => {
    const [name, setName] = useState("Ali");

    const InnerComp = () => {
        return(
            <>
            </>
        )
    }

    const printName = () => {
    setName('Zain');
    }

    return (
        <>
        <h1>my name is ${name}</h1>
        <button type="button" onClick={() => printName()}>
        </button>
        
        <InnerComp/>
        <!-- we can invoked the comp like directly as function -->
        {InnerComp()}
        </>
    )

}



