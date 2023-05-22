import React from "react";
import { stateType } from "../Store/ReducerValue";
import ListItem from "../ListItem/ListItem";

const ShowHelthData: React.FC<{
  count: stateType;
}> = (props) => {
  const { count } = props;

  return (
    <>
      <div>
        <ul>
          <ListItem name={count.BP.name} value={count.BP.value} />
          <ListItem name={count.HR.name} value={count.HR.value} />
          <ListItem name={count.SBP.name} value={count.SBP.value} />
          <ListItem name={count.DBP.name} value={count.DBP.value} />
        </ul>
      </div>
    </>
  );
};

export default ShowHelthData;
