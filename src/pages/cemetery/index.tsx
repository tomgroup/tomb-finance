import React, { useEffect } from "react";
import StyledButton from "../../components/button";
import { CemeteryContainer } from "./index.styled";
import bg from "../../assets/cemetery.png";
import { useTypedSelector } from "../../hooks/useTypeSelector";

const Cemetery = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url('${bg}')`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }, []);
  const { address } = useTypedSelector((state) => state.address);
  return (
    <CemeteryContainer>
      {address !== "" ? 
      (<></>): 
      (
        <div className="unlock-container">
          <StyledButton text="UNLOCK" color="#571eb1" textColr="white" onClick={()=>{
            let element: HTMLElement = document.getElementById(
              "walletModal"
            ) as HTMLElement;
            element.click();
          }}/>
        </div>
      )}
    </CemeteryContainer>
  );
};

export default Cemetery;
