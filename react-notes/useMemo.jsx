// Har re render par inside function comp k liyay new state new prop new event handler new function sub new create hota hai

// first humko is way se comp ko break kar k un-necessary renders ko raukna hai incase agar is way se possible nahi ho phr hum ko memo() and useMemo ko use karna chahiyay.

const AppOne = ()=> {
    console.log('App comp rendered');
    return (
        <div>
            <MainCompSepOne />
            <ChildCompSepOne />
        </div>
    )
}

export default AppOne;

const MainCompSepOne = () => {
    console.log('Main comp rendered');
    
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  const incrementCount = () => {
      setCount(count + 1);
      counterRef.current = count + 1;
  };

  const decrementCount = () => {
      setCount(count - 1);
      counterRef.current = count - 1;
  };
  return (
      <>
          <h1>Count: {count}</h1>
          <button onClick={incrementCount}>Increment</button>
          <button onClick={decrementCount}>Decrement</button>
      </>
  )
}

const ChildCompSepOne = () => {
    console.log('child comp rendered');
  return (
      <>
          <h1>child comp here</h1>
      </>
  )
}

// 2nd way:

const AppTwo = ()=> {
    console.log('App comp rendered');
    return (
        <div>
            <MainCompSepTwo>
                <ChildCompSepTwo />
            </MainCompSepTwo>
        </div>
    )
}

export default AppTwo;

// props are immutable a consumer comp can not change the prop
const MainCompSepTwo = ({children}) => {
    console.log('Main comp rendered');
    
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  const incrementCount = () => {
      setCount(count + 1);
      counterRef.current = count + 1;
  };

  const decrementCount = () => {
      setCount(count - 1);
      counterRef.current = count - 1;
  };
  return (
      <>
          <h1>Count: {count}</h1>
          <button onClick={incrementCount}>Increment</button>
          <button onClick={decrementCount}>Decrement</button>
          {children}
      </>
  )
}

const ChildCompSepTwo = () => {
    console.log('child comp rendered');
  return (
      <>
          <h1>child comp here</h1>
      </>
  )
}

// useMemo() and memo() hum use karte hein performance ko improve karne k liyay. sirf memo() hum un necessary renders ko raukne k liyay use karte hein yai aik HOC hota hai jo k comp k un necessary renders ko prevent karta hai and yai shallow comparison karta hai props ka. yai comp ko memoized karta hai isliyay jab props change hon us comp k jab hi wo comp render ho

const AppThree = ()=> {
    console.log('App comp rendered');
    return (
        <div>
            <MainCompThree/>
        </div>
    )
}

export default AppThree;

const MainCompThree = () => {
    console.log('Main comp rendered');
    
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  const incrementCount = () => {
      setCount(count + 1);
      counterRef.current = count + 1;
  };

  const decrementCount = () => {
      setCount(count - 1);
      counterRef.current = count - 1;
  };
  return (
      <>
          <h1>Count: {count}</h1>
          <button onClick={incrementCount}>Increment</button>
          <button onClick={decrementCount}>Decrement</button>
          <MemoizedChildThree/>
      </>
  )
}

const ChildCompThree = () => {
    // at here its just invoked comp function when something will be change in my parent comp its not change the my this comp UI cuz its a react way to refresh the elements but jab child comp mein koi heavy cal hoti hain to jab yai issue ban jayega hamari app k slow kardega
    console.log('child comp rendered');
    
  return (
      <>
          <h1>child comp here</h1>
      </>
  )
}

const MemoizedChildThree = memo(ChildCompThree);


// Lekin ab child comp mein props change horahay hein to ab again same issue ayega child comp re render hoga hamara
const MainCompFour = () => {
    console.log('Main comp rendered');
    
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  const incrementCount = () => {
      setCount(count + 1);
      counterRef.current = count + 1;
  };

  const decrementCount = () => {
      setCount(count - 1);
      counterRef.current = count - 1;
  };
  return (
      <>
          <h1>Count: {count}</h1>
          <button onClick={incrementCount}>Increment</button>
          <button onClick={decrementCount}>Decrement</button>
          <MemoizedChildFour count={count}/>
      </>
  )
}

const ChildCompFour = () => {
    console.log('child comp rendered');
  return (
      <>
          <h1>child comp here</h1>
      </>
  )
}

const MemoizedChildFour = memo(ChildCompFour);

// Ab entry hoti useMemo Hook ki. kyun k yai use hota memoize the value of comp like this:

const MainCompFive = () => {
    console.log('Main comp rendered');
    
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  const incrementCount = () => {
      setCount(count + 1);
      counterRef.current = count + 1;
  };

  const decrementCount = () => {
      setCount(count - 1);
      counterRef.current = count - 1;
  };
  return (
      <>
          <h1>Count: {count}</h1>
          <button onClick={incrementCount}>Increment</button>
          <button onClick={decrementCount}>Decrement</button>
          <MemoizedChildFive count={count}/>
      </>
  )
}

const ChildCompFive = ({count}) => {
    console.log('child comp rendered',count);

    const total = useMemo(()=> {
        console.log('inside useMemo',count);
        return count * 2;
        // agar yaha hum prop pass nahi karege to parent comp k change par child comp call hoga but inside useMemo mein controll nahi jayega.
    },[count]);
  return (
      <>
          <h1>child comp here{total}</h1>
      </>
  )
}

const MemoizedChildFive = memo(ChildCompFive);


// 2nd way is this:
const MainCompSix = () => {
    console.log('Main comp rendered');
    
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  const incrementCount = () => {
      setCount(count + 1);
      counterRef.current = count + 1;
  };

  const decrementCount = () => {
      setCount(count - 1);
      counterRef.current = count - 1;
  };
  return (
      <>
          <h1>Count: {count}</h1>
          <button onClick={incrementCount}>Increment</button>
          <button onClick={decrementCount}>Decrement</button>
          <MemoizedChildSix count={count}/>
      </>
  )
}

const ChildCompSix = () => {
    console.log('child comp rendered');
    
  return (
      <>
          <h1>child comp here</h1>
      </>
  )
}

const MemoizedChildSix = memo(ChildCompSix,()=>{return true});
