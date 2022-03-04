import React, { useEffect } from "react";
import StyledButton from "../../components/button";
import { SBScontainer } from "./index.styled";
import bg from "../../assets/pit.png";
import { useTypedSelector } from "../../hooks/useTypeSelector";

import CryptoTombImg from "../../assets/crypto_tomb_cash.svg";
import CryptoTombShareImg from "../../assets/crypto_tomb_share.svg";

const SBS = () => {
  const { address } = useTypedSelector((state) => state.address);
  useEffect(() => {
    document.body.style.backgroundImage = `url('${bg}')`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }, []);
  return (
    <SBScontainer>
      {address !== "" ? (
        <div className="MuiGrid-container">
          <div className="MuiGrid-grid-xs-12">
            <h2>{`TBond -> TShare Swap`}</h2>
            <h4>{`Swap TBond to TShare`}</h4>
          </div>
          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-6">
            <div className="sbs-panel">
              <h3>TBonds</h3>
              <div className="crypto_tomb_img">
                <img src={CryptoTombImg} alt="crypto cash" />
              </div>
              <div>
                <div className="tomb_available">
                  0 TBond Available
                </div>
                <div className="max_available">
                  <input placeholder="0" type="number" />
                  <div className="max_button_container">
                    <div>
                      <button>
                        <span>MAX</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <p>0 TBOND Available in Wallet</p>
            </div>
          </div>
          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-6">
            <div className="sbs-panel">
              <h3>TShare</h3>
              <div className="crypto_tomb_img">
                <img src={CryptoTombImg} alt="crypto cash" />
              </div>
              <div>
                <div className="tomb_available">
                  0 TShare Available
                </div>
                <div className="max_available">
                  <input placeholder="0" type="number" />
                  <div className="max_button_container">
                    <div>
                      <button>
                        <span>MAX</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <p>0 TBOND Available in Wallet</p>
            </div>
          </div>
          <div className="MuiGrid-grid-xs-12">
            <div className="sbs-approve-panel">
              <StyledButton text="APPROVE TBOND" color="#571eb1" textColr="white" onClick={()=>{}} />
            </div>
          </div>
        </div>
          ) : (
        <div className="unlock-container">
          <StyledButton text="UNLOCK" color="#571eb1" textColr="white" onClick={()=>{
            let element: HTMLElement = document.getElementById(
              "walletModal"
            ) as HTMLElement;
            element.click();
          }}/>
        </div>
      )}
    </SBScontainer>
  );
};

export default SBS;
