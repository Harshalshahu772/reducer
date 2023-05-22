import { useContext } from "react";
import Contexmain from "../Contex-main/Contexmain";

const SetHelthInput = () => {
  const mainContextValue = useContext(Contexmain);
  console.log("mainContextValue", mainContextValue);

  const { inputValue, setInputValue } = mainContextValue;

  return (
    <>
      <input
        type="number"
        value={inputValue}
        onChange={(event) => setInputValue(parseInt(event.target.value))}
      ></input>
    </>
  );
};

export default SetHelthInput;
