// ═══════════════════════════════════════════
// 📘 useContext
// ═══════════════════════════════════════════

// 🔹 use provider context hamesha pora comp tree re render hota hai from parent to child

// 💻
import React, { useState, createContext, useContext, memo } from 'react'

const MyContext = createContext();

const App = ()=> {

const [will,setWill] = useState('');
  
    console.log('App comp rendered');
    return (
        <MyContext.Provider value={{setWill}}>
          <h1>Parent Comp</h1>
          {will}
          <MemoGrandChild />
        </MyContext.Provider>
    );
}

const GrandChild = ()=> {
      console.log('GrandChild comp rendered');
  return(
    <>
      <h1>Grand Child Comp</h1><Child />
    </>
  );
}

const MemoGrandChild = memo(GrandChild);

const Child = ()=> {
  const gpContext = useContext(MyContext);
  const {setWill} = gpContext;
    console.log('Child comp rendered',gpContext);
  
  return(
    <>
      <h1 onClick={()=> {
        setWill('give every thing to my grand child');
      }}>child comp</h1>
    </>
  );
}

export default App;