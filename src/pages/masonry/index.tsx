import React, { useEffect } from "react";
import StyledButton from "../../components/button";
import { Masonrycontainer } from "./index.styled";
import bg from "../../assets/masonry.png";

const Masonry = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url('${bg}')`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }, []);
  return (
    <Masonrycontainer>
      <div className="unlock-container">
        <StyledButton text="UNLOCK" color="#571eb1" onClick={()=>{
          let element: HTMLElement = document.getElementById(
            "walletModal"
          ) as HTMLElement;
          element.click();
        }}/>
      </div>
    </Masonrycontainer>
  );
};

export default Masonry;
