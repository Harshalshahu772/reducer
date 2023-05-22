import { useReducer, useRef, useState } from "react";
import { actionType, stateType } from "./ReducerValue";
import ShowHelthData from "../ShowHelthData/ShowHelthData";
import SetHelthData from "../SetHelthData/SetHelthData";
import Contexmain from "../Contex-main/Contexmain";

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
  const [helthInput, setHelthInput] = useState<number>(0);

  const setInputValueFun = (value: number) => {
    setHelthInput(value);
  };

  const [count, dispatch] = useReducer(reducerFunction, inistialState);

  const updayteHelathData = (inputValue: any) => {
    console.log("selectRef", inputValue);
    console.log("helthInput", helthInput);

    dispatch({
      payload: { value: helthInput },
      type: inputValue,
    });
  };

  return (
    <>
      <Contexmain.Provider
        value={{
          inputValue: helthInput,
          setInputValue: setInputValueFun,
        }}
      >
        <ShowHelthData count={count} />
        <SetHelthData count={count} updayteHelathData={updayteHelathData} />
      </Contexmain.Provider>
    </>
  );
};

export default ReducerFunction;
