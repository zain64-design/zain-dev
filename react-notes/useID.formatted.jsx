// ═══════════════════════════════════════════
// 📘 useID
// ═══════════════════════════════════════════

// 🔹 jab hamare pass multiple instances ho same comp k aik given page mein to hum useID hook use karte hein unique id get karne k liyay.or page reload par same rehti hai change nahi hoti

// 💻
import React, {useId } from 'react';

const App = ()=> {
    return (
      <>
        <FormInput/>
        <FormInput/>
        <FormInput/>
        <FormInput/>
      </>
    );
}

const FormInput= ()=> {
  const uniqueId = useId();
  return(
    <>
      <label htmlFor={uniqueId}>Enter your name:</label>
      <input id={uniqueId} type="text" />
    </>
  )
}


export default App;