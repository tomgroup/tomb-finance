import React, { useEffect } from "react";
import StyledButton from "../../components/button";
import { Pitcontainer } from "./index.styled";
import bg from "../../assets/pit.png";

const Pit = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url('${bg}')`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }, []);
  return (
    <Pitcontainer>
      <div className="unlock-container">
        <StyledButton text="UNLOCK" color="#571eb1" textColr="white" onClick={()=>{
          let element: HTMLElement = document.getElementById(
            "walletModal"
          ) as HTMLElement;
          element.click();
        }}/>
      </div>
    </Pitcontainer>
  );
};

export default Pit;
