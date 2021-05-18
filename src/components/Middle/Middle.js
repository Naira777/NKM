import React from "react";
import Left from "./Left/Left";
import  Right  from "./Left/Right/Right";
import * as Styled from "./styled";


const Middle = () => {
  return (
    <Styled.Box>
      <Left />
      <Right />
    </Styled.Box>
  )
};
export default Middle;
