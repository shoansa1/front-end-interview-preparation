import React, { useState } from 'react'

function ReactRendering(){
    const [count, setCount] = useState(0)
    const increament = () =>{
        setCount(count + 1)
    }
    const reset = () =>{
        setCount(0)
    }

    return <div>
        <h2>count is : {count}</h2>
        <button onClick={increament}>+</button>
        <br/>
        <button onClick={reset}>Reset</button>
    </div>
}
export default ReactRendering;

