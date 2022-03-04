import React, { useEffect } from "react";
import StyledButton from "../../components/button";
import { Pitcontainer } from "./index.styled";
import bg from "../../assets/pit.png";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import MetamaskIcon from "../../assets/wallet_icon/metamask-fox.svg";
import CryptoTombImg from "../../assets/crypto_tomb_cash.svg";
import CryptoTombShareImg from "../../assets/crypto_tomb_share.svg";
import CryptoTombBondImg from "../../assets/crypto_tomb_bond.svg";
import TbombFtmImg from "../../assets/tomb_ftm_lp.png";
import TshareFtmImg from "../../assets/tshare_ftm_lp.png";

const Pit = () => {
  const { address } = useTypedSelector((state) => state.address);

  useEffect(() => {
    document.body.style.backgroundImage = `url('${bg}')`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }, []);
  return (
    <Pitcontainer>
      {address !== "" ? (
        <div className="MuiGrid-container">
          <div className="MuiGrid-grid-xs-12">
            <h2>{`Buy & Redeem Bonds`}</h2>
            <h4>{`Earn premiums upon redemption`}</h4>
          </div>

          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-4">
            <div className="pit-panel">
              <h3>{`Purchase TBOND`}</h3>

              <div className="pit-panel__img">
                <div>
                  <div className="crypto_tomb_img">
                    <img src={CryptoTombImg} alt="crypto cash" />
                  </div>
                  <h3>{`TOMB`}</h3>
                </div>
                <div className="pit-panel__img__svg">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-right"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="crypto_tomb_img">
                    <img src={CryptoTombBondImg} alt="crypto cash" />
                  </div>
                  <h3>{`TBOND`}</h3>
                </div>
              </div>
              <p>{`7676106.4137 TBOND available for purchase`}</p>
              <div className="button-container">
                <StyledButton
                  text="APPROVE TOMB"
                  color="#571eb1"
                  textColr="white"
                  onClick={() => {}}
                />
              </div>
            </div>
          </div>

          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-4">
            <div className="ftm-panel-container">
              <div className="ftm-panel">
                <h3>{`💰 TOMB = 0.9767 FTM`}</h3>
                <p>Last-Hour TWAP Price</p>
              </div>
              <div className="ftm-panel">
                <h3>{`💰 TBOND = 0.98 FTM`}</h3>
                <p>{`Current Price: (TOMB)^2`}</p>
              </div>
            </div>
          </div>

          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-4">
            <div className="pit-panel">
              <h3>{`Redeem TOMB`}</h3>

              <div className="pit-panel__img">
                <div>
                  <div className="crypto_tomb_img">
                    <img src={ CryptoTombBondImg} alt="crypto cash" />
                  </div>
                  <h3>{`TBOND`}</h3>
                </div>
                <div className="pit-panel__img__svg">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-right"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="crypto_tomb_img">
                    <img src={CryptoTombImg} alt="crypto cash" />
                  </div>
                  <h3>{`TOMB`}</h3>
                </div>
              </div>
              <p>{`0.0000 TBOND Available in wallet`}</p>
              <div className="button-container">
                <StyledButton
                  text="Enabled when TOMB > 1.01FTM"
                  color="#CDCDCD"
                  textColr="white"
                  onClick={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="unlock-container">
          <StyledButton
            text="UNLOCK"
            color="#571eb1"
            textColr="white"
            onClick={() => {
              let element: HTMLElement = document.getElementById(
                "walletModal"
              ) as HTMLElement;
              element.click();
            }}
          />
        </div>
      )}
    </Pitcontainer>
  );
};

export default Pit;
