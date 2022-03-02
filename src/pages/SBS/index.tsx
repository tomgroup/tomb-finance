import React, { useEffect } from "react";
import StyledButton from "../../components/button";
import { SBScontainer } from "./index.styled";
import bg from "../../assets/pit.png";

const SBS = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url('${bg}')`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }, []);
  return (
    <SBScontainer>
      <div className="unlock-container">
        <StyledButton text="UNLOOCK" color="#571eb1" onClick={()=>{console.log("here");}}/>
      </div>
    </SBScontainer>
  );
};

export default SBS;
