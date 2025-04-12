import React, { useReducer } from "react";

const UseReducer = () => {
  const initialState = {
    count: 0,
  };
  const countReducer = (state, action) => {
    switch (action.type) {
      case "INC":
        return { ...state, count: state.count + action.payload };
      case "DEC":
        return { ...state, count: state.count - action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <div>
      <p>count is : {state.count}</p>
      <button onClick={() => dispatch({ type: "DEC", payload: 5 })}>+</button>
    </div>
  );
};

export default UseReducer;