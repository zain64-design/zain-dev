// ═══════════════════════════════════════════
// 📘 useCallBack
// ═══════════════════════════════════════════

// 🔹 useCallback hum use karte hein performance ko improve karne k liyay or function ko memoize karne k liyay.

// 💻
const MainComp = () => {
    console.log('Main comp rendered');
    
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  const incrementCount = useCallback(() => {
    setCount(prevCount => {
        counterRef.current = prevCount + 1; // Update the ref correctly
        return prevCount + 1; // Update state
    });
}, []);

const decrementCount = useCallback(() => {
    setCount(prevCount => {
        counterRef.current = prevCount - 1; // Update the ref correctly
        return prevCount - 1; // Update state
    });
    // 🔹 agar yahan hum dep array nahi denge to jab bhi child comp rerender hoga kyun k function ref change nahi hoga same rahay ga nahi denge to ref change hojayega fun ka kyun fun are obj. Iska matlab ye hai ki har render par in functions ko naya instance milega.
}, []);
  return (
      <>
          <h1>Count: {count}</h1>
          <button onClick={incrementCount}>Increment</button>
          <button onClick={decrementCount}>Decrement</button>
          <MemoizedChild count={count} incrementCount={incrementCount} decrementCount={decrementCount}/>
      </>
  )
}

const ChildComp = ({count}) => {
    console.log('child comp rendered');

    const total = useMemo(()=> {
        console.log('inside useMemo',count);
        return count * 2;
    },[]);
  return (
      <>
          <h1>child comp here{total}</h1>
      </>
  )
}

const MemoizedChild = memo(ChildComp);

// 💡 Agar aap useCallback mein dependency array hi nahi dete (yaani [] nahi rakhte), toh ye function har render par naya reference lega, aur isse kuch important results honge:

// 🔹 Function Re-Creation:Naya Reference: Jab bhi MainComp render hota hai (jaise count update hone par), incrementCount aur decrementCount ke naya references create honge. Iska matlab ye hai ki har render par in functions ko naya instance milega.

// 🔹 Impact on Child Component: Child Component Re-Render: Agar aap incrementCount aur decrementCount ko MemoizedChild ko props ke taur par pass kar rahe hain, toh ye child component har render par re-render hoga, kyunki usse naye function references mil rahe hain.


// 🔹 First Render:
// 🔹 MainComp render hota hai.
// 🔹 MemoizedChild render hota hai.

// 🔹 On Button Click (State Change):
// 🔹 count update hota hai, MainComp re-render hota hai.
// 🔹 incrementCount aur decrementCount ka naya reference create hota hai.
// 🔹 MemoizedChild ko naye props milte hain, isliye ye re-render hota hai.