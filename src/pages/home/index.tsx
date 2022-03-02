import React, { useEffect } from "react";
import bg from "../../assets/home.png";
import { Homecontainer } from "./index.styled";
import CryptotombcashImage from "../../assets/crypto_tomb_cash.svg";
import StyledButton from "../../components/button";

const Home = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url('${bg}')`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }, []);
  return (
    <Homecontainer>
      <div className="MuiGrid-container">
        <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-4 ">
          <div className="cryptotomb-media">
            <img src={CryptotombcashImage} alt="crypto-tomb" />
          </div>
        </div>

        <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-8">
          <div className="welcome-panel">
            <h2>Welcome to Tomb Finance</h2>
            <p>
              The first algorithmic stablecoin on Fantom Opera, pegged to the
              price of 1 FTM via seigniorage.
            </p>
            <p>
              Stake your TOMB-FTM LP in the Cemetery to earn TSHARE rewards.
              Then stake your earned TSHARE in the Masonry to earn more TOMB!
            </p>
          </div>
        </div>

        <div className="MuiGrid-grid-xs-12">
          <div className="alert-panel">
            <div className="MuiPaper-root">
              <div className="MuiAlert-icon">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path>
                </svg>
              </div>
              <div className="MuiAlert-message">
                <b>
                  Please visit our{" "}
                  <a
                    target="_blank"
                    href="https://docs.tomb.finance"
                  >
                    documentation
                  </a>{" "}
                  before purchasing TOMB or TSHARE!
                </b>
              </div>
            </div>
          </div>
        </div>

        <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-4">
          <div className="total-value-panel">
            <h2>Total Value Locked</h2>
            <span>$751,780,724</span>
            
          </div>
        </div>

        <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-8">
          <div className="stake-panel">
            <StyledButton text="STKAE NOW" color="#571eb1" textColr="white" onClick={()=>{}} />
            <StyledButton text="FARM NOW" color="#e0e0e0" textColr="rgba(0, 0, 0, 0.87)" onClick={()=>{}} />
            <StyledButton text="BUY TOMB" color="#571eb1" textColr="white" onClick={()=>{}} />
            <StyledButton text="BUY TSHARE" color="#e0e0e0" textColr="rgba(0, 0, 0, 0.87)" onClick={()=>{}} />
          </div>
        </div>
      </div>
    </Homecontainer>
  );
};

export default Home;
