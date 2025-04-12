import React, { useEffect, useRef, useState } from 'react'

const UseRefExample = () => {
const [count, setCount] = useState(0);
   const refValue = useRef(0);
   console.log(refValue.current);
   
  return (
    <div>
      <h3>Use ref examples</h3>
      <p> ref value is : {refValue.current}</p>
      <p> Count value is : {count}</p>
      <button onClick={()=> setCount(count + 1)}></button>
      <button onClick={()=> refValue.current= refValue.current+1}>REF+</button>
    </div>
  )
}

export default UseRefExample
