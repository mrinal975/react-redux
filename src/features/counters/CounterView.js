import React from "react";
import { useSelector } from "react-redux";

const CounterView = () => {
  const count = useSelector((state) => console.log(state));
  return (
    <div>
      <h2>Count : 0 </h2>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  );
};
export default CounterView;
