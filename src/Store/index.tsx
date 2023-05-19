import { useReducer, useRef, useState } from "react";
import { actionType, stateType } from "./ReducerValue";

const inistialState: stateType = {
  BP: { value: 0, name: "Bloodsure" },
  HR: { value: 0, name: "heart Rate" },
  SBP: { value: 0, name: "Sistolic Bp" },
  DBP: { value: 0, name: "Distolic BP" },
};

const reducerFunction = (state = inistialState, action: actionType) => {
  switch (action.type) {
    case "Update_BP":
      return {
        ...state,
        BP: { value: action.payload.value, name: state.BP.name },
      };

    case "Update_HR":
      return {
        ...state,
        HR: { value: action.payload.value, name: state.HR.name },
      };

    case "Update_SBP":
      return {
        ...state,
        SBP: { value: action.payload.value, name: state.SBP.name },
      };

    case "Update_DBP":
      return {
        ...state,
        DBP: { value: action.payload.value, name: state.DBP.name },
      };
    default:
      return state;
  }
};
const ReducerFunction = () => {
  const selectef: any = useRef();
  const [helthInput, setHelthInput] = useState<number>(0);

  const [count, dispatch] = useReducer(reducerFunction, inistialState);

  const updayteHelathData = () => {
    console.log("selectRef", selectef.current.value);
    console.log("helthInput", helthInput);

    dispatch({
      payload: { value: helthInput },
      type: selectef.current.value,
    });
  };

  return (
    <>
      <div>
        <ul>
          <li>
            {count.BP.name}={count.BP.value}
          </li>
          <li>
            {count.HR.name}={count.HR.value}
          </li>
          <li>
            {count.SBP.name}={count.SBP.value}
          </li>
          <li>
            {count.DBP.name}={count.DBP.value}
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <select name="healthh" ref={selectef}>
            <option value="Update_BP">Bloodsure</option>
            <option value="Update_HR">heart Rate</option>
            <option value="Update_SBP">Sistolic Bp</option>
            <option value="Update_DBP">Distolic BP</option>
          </select>
          <input
            type="text"
            value={helthInput}
            onChange={(event) => setHelthInput(parseInt(event.target.value))}
          ></input>

          <input
            type="submit"
            value="Submit"
            onClick={updayteHelathData}
          ></input>
        </ul>
      </div>
    </>
  );
};

export default ReducerFunction;
