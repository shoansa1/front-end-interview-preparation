import React, { useEffect, useRef } from "react";
import { useState } from "react";

const HooksCombined = () => {
  const [count, setCount] = useState(0);
   const inputRef = useRef(null);
   useEffect(() => {
        inputRef.current.focus()
   }, [])
  return <div>
    <input ref={inputRef}></input>
    <p> Count is : {count}</p>
    <button onClick={()=> setCount(count + 1)}>+</button>
  </div>;
};

export default HooksCombined;
