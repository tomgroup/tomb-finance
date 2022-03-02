import React from "react";
import StyledButton from "../../components/button";
import { SBScontainer } from "./index.styled";
const SBS = () => {
  return (
    <SBScontainer>
      <div className="unlock-container">
        <StyledButton text="UNLOOCK" color="#571eb1" />
      </div>
    </SBScontainer>
  );
};

export default SBS;
