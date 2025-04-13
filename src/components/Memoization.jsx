import React, { useMemo, useState } from 'react'

const Memoization = () => {
    const [cout, setCout] = useState(0);
    const [otherState, setOtherState] = useState(0);

    const expensiveCalculation = (num) =>{
        for (let i=0; i<92345566; i++){}
        return num * 2;
    }
    const calculatedValue = useMemo(()=>{
        return expensiveCalculation(cout);
    }, [cout])
  return (
    <div>
        <h3>Expensive Calculation</h3>
        <p>Count is : {cout}</p>
        <button onClick={()=> setCout(cout + 1)}>increamentCOunt</button>

    </div>
  )
}

export default Memoization

