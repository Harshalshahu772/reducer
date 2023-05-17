import { useReducer } from "react";
const initialState = {count: 0, op: ''};

function reducer(state: { count: number; }, action: { type:string }) {
  switch (action.type) {
    case "incrimant":
      return { count: state.count + 1,op:"incrimant" };
      break;
    case "decrimant":
      return { count: state.count - 1,op:"dicrimant"};
      default:
        throw new Error();
  }
}

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      count:{state.count}
      <br></br>
      <br></br>
      op:{state.op}
<br></br>
      <button onClick={() => dispatch({ type: "decrimant" })}>-</button>
      <button onClick={() => dispatch({ type: "incrimant" })}>+</button>
    </>
  );
};
export default Reducer;
