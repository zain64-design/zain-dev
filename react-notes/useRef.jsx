// ref is a react way to access the dom elements like we do in js like document.getElementById(). ref ka use kar k hum dom nodes ko get karte heinn like const num1 = useRef(); num1.current.value har ref k pass aik current property hoti hai jisk andar dom hota hai

// ref ka use hum karte hein updated value ko save karne k liyay aik ref mein hum string, obj, array, dom nodes, every thing we can store.

// ref live the outside the render cycle of react ref par react ki re rendering ka effect nahi ata kyun k wo react ki boundry se bahir hai chahay comp ko kitna hi update karlain ref kabhi change nahi hoga jo value rakhe ge wohi value rahay gi.
// useRef does not triger ui

// Example:
function Counter() {
  // Create a ref to track if this is the first render of the component
  let isFirstRender = useRef(true);

  // Initialize state variable 'count' with initial value of 0
  const [count, setCount] = useState(0);

  // Create a ref to store the current count value
  const counterRef = useRef(null);

  // useEffect hook that runs after the component mounts
  useEffect(() => {
    // Check if this is the first render
    if (isFirstRender.current) {
      // Set the ref to false to indicate it's no longer the first render
      isFirstRender.current = false;
      console.log("First render"); // Log to console for debugging
      return; // Exit the effect early for the first render
    }

    console.log("use effect invoked"); // Log when the effect is invoked

    console.log("Count updated to:", count);

    // Set an interval to run every 5 seconds
    setInterval(() => {
      // Increment the count using the current value from the counterRef
      setCount(counterRef.current + 1);
    }, 5000);

    // Cleanup function that runs when the component unmounts or the effect re-runs
    return () => console.log("cleanup function invoked");
  }, []); // Empty dependency array means this effect runs only once after the initial render

  // Function to handle button clicks
  function handleClick() {
    // Increment the count state by 1
    setCount(count + 1);

    // Update the counterRef with the new count value
    counterRef.current = count + 1;

    // Log the button click action
    console.log("Button clicked");
  }
}
