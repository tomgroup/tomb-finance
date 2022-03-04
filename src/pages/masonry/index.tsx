import React, { useEffect, useState } from "react";
import StyledButton from "../../components/button";
import { Masonrycontainer } from "./index.styled";
import bg from "../../assets/masonry.png";
import { useTypedSelector } from "../../hooks/useTypeSelector";

import CryptoTombImg from "../../assets/crypto_tomb_cash.svg";
import CryptoTombShareImg from "../../assets/crypto_tomb_share.svg";

const Masonry = () => {
  const { address } = useTypedSelector((state) => state.address);
  const initialHour = 3;
  const initialMinute = 1;
  const initialSeconds = 0;
  const [hours, setHours] = useState(initialHour);
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    document.body.style.backgroundImage = `url('${bg}')`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }, []);

  useEffect(()=> {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            clearInterval(myInterval);
          }
          else {
            setHours(hours - 1);  
            setMinutes(59);
            setSeconds(59);
          }
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  })

  return (
    <Masonrycontainer>
      {address !== "" ? (
        <div className="MuiGrid-container">
          <div className="MuiGrid-grid-xs-12">
            <h2>{`Masonry`}</h2>
          </div>

          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-5 ">
            <div className="masonry-top-panel">
              <p>Next Epoch</p>
              <p>
                <b>
                  {minutes === 0 && seconds === 0 ? null : 
                    (<>{hours} : {minutes} : {seconds}</>)
                  }
                </b>
              </p>
            </div>
          </div>
          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-5 ">
            <div className="masonry-top-panel">
              <p>Current</p>
              <p>Epoch 1059</p>
            </div>
          </div>
          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-5 ">
            <div className="masonry-top-panel">
              <p>
                TOMB Price <span>(TWAP)</span>
              </p>
              <p>0.9759</p>
            </div>
          </div>
          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-5 ">
            <div className="masonry-top-panel">
              <p>APR</p>
              <p>1602.88%</p>
            </div>
          </div>
          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-5 ">
            <div className="masonry-top-panel">
              <p>TSHARES Staked</p>
              <p>40988.8917</p>
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
                    {`Staked TSHAREs can only be withdrawn after 6 epochs since deposit.`}
                  </b>
                </div>
              </div>
            </div>
          </div>

          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-5 ">
          </div>

          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-4">
            <div className="tomb-lp-panel">
              <div className="crypto_tomb_img">
                <img src={CryptoTombImg} alt="crypto cash" />
              </div>
              <h3>{`≈ $0.00`}</h3>
              {`TSHARE Earned`} <br/><br/><br/><br/>
              <div className="button-container">
                <StyledButton text="CLAIM REWARD" color="#CDCDCD" textColr="white" onClick={()=>{}} />
              </div>
            </div>
          </div>

          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-4">
            <div className="tomb-lp-panel">
              <div className="crypto_tomb_img">
                <img src={CryptoTombShareImg} alt="crypto cash" />
              </div>
              <h3>{`≈ $0.00`}</h3>
              {`TSHARE Staked`} <br/><br/><br/><br/>
              <div className="button-container">
                <StyledButton text="APPROVE TSHERE" color="#571eb1" textColr="white" onClick={()=>{}} />
              </div>
            </div>
          </div>

          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-5 ">
          </div>
          <div className="MuiGrid-grid-xs-12">
            <div className="button-container">
              <StyledButton text="CLAIM AND WITHDRAW" color="#CDCDCD" textColr="white" onClick={()=>{}} />
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
    </Masonrycontainer>
  );
};

export default Masonry;
