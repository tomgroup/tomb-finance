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
        <StyledButton text="UNLOCK" color="#571eb1" textColr="white" onClick={()=>{
          let element: HTMLElement = document.getElementById(
            "walletModal"
          ) as HTMLElement;
          element.click();
        }}/>
      </div>
    </SBScontainer>
  );
};

export default SBS;
