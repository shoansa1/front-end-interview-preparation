import React, { useReducer } from "react";

const UseReducerEx = () => {
  const initialState = {
    count: 0,
  };
  const counterReducer = (state, action) => {
    switch (action.type) {
      case "INC":
        return {
          ...state,
          count: state.count + 1,
        };
      case "DEC":
        return {
          ...state,
          count: state.count - 1,
        };
        default: 
         return state;
    }
  };
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h3>Use Reducer example</h3>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "DEC" })}>INC Count</button>
    </div>
  );
};

export default UseReducerEx;
