import { useRef } from "react";
import SetHelthInput from "./SetHelthInput";

const SetHelthData:React.FC<any> = (props:any) => {

  const {count,updayteHelathData}=props

  const selectef: any = useRef();
  return <>
  
  <div>
        <ul>
          <select name="healthh" ref={selectef}>
            <option value="Update_BP">{count.BP.name}</option>
            <option value="Update_HR">{count.HR.name}</option>
            <option value="Update_SBP">{count.SBP.name}</option>
            <option value="Update_DBP">{count.DBP.name}</option>
          </select>
         <SetHelthInput  />

          <input
            type="submit"
            value="Submit"
            onClick={()=>{updayteHelathData(selectef.current.value)}}
          ></input>
        </ul>
      </div>
  
  
  </>;
};
export default SetHelthData;
