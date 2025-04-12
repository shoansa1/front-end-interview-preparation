import React, { useState } from "react";

const Hooks = () => {
    const [count, setCount] = useState(0);

    const increament = () =>{
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    }
  return (
    <div>
      <p>Count is : {count}</p>
      <button onClick={increament}>+</button>
    </div>
  )
}

export default Hooks;