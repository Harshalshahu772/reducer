import { createContext } from "react";

const Contexmain = createContext({
  inputValue: 0,
  setInputValue: (value: number) => {},
});
console.log("Contexmain", Contexmain);
export default Contexmain;
