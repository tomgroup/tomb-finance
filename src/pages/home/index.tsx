import React, { useEffect } from "react";
import bg from "../../assets/home.png";
import { Homecontainer } from "./index.styled";
import CryptotombcashImage from "../../assets/crypto_tomb_cash.svg";
import StyledButton from "../../components/button";
import MetamaskIcon from "../../assets/wallet_icon/metamask-fox.svg";
import CryptoTombImg from "../../assets/crypto_tomb_cash.svg";
import CryptoTombShareImg from "../../assets/crypto_tomb_share.svg";
import CryptoTombBondImg from "../../assets/crypto_tomb_bond.svg";
import TbombFtmImg from "../../assets/tomb_ftm_lp.png";
import TshareFtmImg from "../../assets/tshare_ftm_lp.png";
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

        <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-4">
          <div className="tomb-price-panel">
            <h2>TOMB</h2>
            <button>
              <span>+ <img src={MetamaskIcon} alt="metamask" /></span>
            </button>
            <div className="crypto_tomb_img">
              <img src={CryptoTombImg} alt="crypto cash" />
            </div>
            Current Price
            <h3>0.9986 FTM</h3>
            $ 2.00 <br/>
            <span>Market Cap: $515603782.00 <br />Circulating Supply: 257801891 <br/>Total Supply: 257802023</span>
          </div>
        </div>

        <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-4">
          <div className="tomb-price-panel">
            <h2>TSHARE</h2>
            <button>
              <span>+ <img src={MetamaskIcon} alt="metamask" /></span>
            </button>
            <div className="crypto_tomb_img">
              <img src={CryptoTombShareImg} alt="crypto cash" />
            </div>
            Current Price
            <h3>4276.3768 FTM</h3>
            $ 8591.83 <br/>
            <span>Market Cap: $435442536.23 <br/>Circulating Supply: 50681 <br/>Total Supply: 67345</span>
          </div>
        </div>

        <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-4">
          <div className="tomb-lp-panel">
            <h2>TBOND</h2>
            <button>
              <span>+ <img src={MetamaskIcon} alt="metamask" /></span>
            </button>
            <div className="crypto_tomb_img">
              <img src={CryptoTombBondImg} alt="crypto cash" />
            </div>
            Current Price
            <h3>1.0000 FTM</h3>
            $ 2.00 <br/>
            <span>Market Cap: $81129792.00 <br/>Circulating Supply: 40564896 <br/>Total Supply: 40564896</span>
          </div>
        </div>
        
        <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-6">
          <div className="tomb-lp-panel">
            <h2>TOMB-FTM Spooky LP</h2>
            <div className="crypto_tomb_img">
              <img src={TbombFtmImg} alt="crypto cash" />
            </div>
            <div className="button-container">
              <StyledButton text="ZAP IN" color="#CDCDCD" textColr="white" onClick={()=>{}} />
            </div>
            
            <h3>1.48  TOMB / 1.48  FTM </h3>
            $ 5.91 <br/>
            <span>Liquidity: $277698244.29 <br/>Total supply: 47005982.58</span>
          </div>
        </div>

        <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-6">
          <div className="tomb-lp-panel">
            <h2>TSHARE-FTM Spooky LP</h2>
            <div className="crypto_tomb_img">
              <img src={TshareFtmImg} alt="crypto cash" />
            </div>
            <div className="button-container">
              <StyledButton text="ZAP IN" color="#571eb1" textColr="white" onClick={()=>{}} />
            </div>
            
            <h3>0.002 TSHARE / 78.61  FTM </h3>
            $ 315.75 <br/>
            <span>Liquidity: $90108533.86<br/>Total supply: 285781.80</span>
          </div>
        </div>

      </div>
    </Homecontainer>
  );
};

export default Home;
