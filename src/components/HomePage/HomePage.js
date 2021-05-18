import React from "react";
import First from "../First/First";
import Last from "../Last/Last";
import Middle from "../Middle/Middle";
import * as Styled from "./styled";

function HomePage() {
  return (
    <Styled.AppContent>
     <First />
   <Middle />
   <Last />
    </Styled.AppContent>
  );
}

export default HomePage;
