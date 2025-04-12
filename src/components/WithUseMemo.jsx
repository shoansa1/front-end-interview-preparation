import React, { useMemo, useState } from "react";

const WithUseMemo = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);
  const expensiveCalculation = (num) => {
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  };

  const calculatedValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);
  return (
    <div>
      <h3>Expensive calculation</h3>
      <p>Count is : {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>Calculated value : {calculatedValue}</p>
      <p>other state : {otherState}</p>
      <button onClick={() => setOtherState(otherState + 1)}>
        ChangeOtherState
      </button>
    </div>
  );
};

export default WithUseMemo;
