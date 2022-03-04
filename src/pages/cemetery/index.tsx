import React, { useEffect } from "react";
import StyledButton from "../../components/button";
import { CemeteryContainer } from "./index.styled";
import bg from "../../assets/cemetery.png";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import TbombFtmImg from "../../assets/tomb_ftm_lp.png";
import TshareFtmImg from "../../assets/tshare_ftm_lp.png";
import FTMlogobleImg from "../../assets/ftm_logo_blue.svg";
import SmokeyImg from "../../assets/spooky.png";
import SilbaImg from "../../assets/shiba_logo.svg";
import ZooImg from "../../assets/zoo_logo.svg";
import { useNavigate } from "react-router-dom";

const Cemetery = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url('${bg}')`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }, []);
  const { address } = useTypedSelector((state) => state.address);
  const navigate = useNavigate();
  return (
    <CemeteryContainer>
      {address !== "" ? 
      (
        <div className="MuiGrid-container">
          <div className="MuiGrid-grid-xs-12">
            <h2>
            {`Cemetery`}
            </h2>
          </div>
          <div className="MuiGrid-grid-xs-12">
            <h4>
            {`Earn TSHARE by staking LP`}
            </h4>
          </div>
          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-4 ">
            <div className="tomb-lp-panel">
              <h3>TOMB-FTM Spooky LP</h3>
              <p>Deposit TOMB-FTM-LP Earn TSHARE</p>
              
              <div className="crypto_tomb_img">
                <img src={TbombFtmImg} alt="crypto cash" />
              </div>
              <div className="button-container">
                <StyledButton text="VIEW" color="#571eb1" textColr="white" onClick={()=>{
                  navigate("/cemetery/TombFtmLPTShareRewardPool");
                }} />
              </div>
            </div>
          </div>
          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-4 ">
            <div className="tomb-lp-panel">
              <h3>TSHARE-FTM-LP</h3>
              <p>Deposit TSHARE-FTM-LP Earn TSHARE</p>
              
              <div className="crypto_tomb_img">
                <img src={TshareFtmImg} alt="crypto cash" />
              </div>
              <div className="button-container">
                <StyledButton text="VIEW" color="#571eb1" textColr="white" onClick={()=>{
                  navigate("/cemetery/TshareFtmLPTShareRewardPool");
                }} />
              </div>
            </div>
          </div>
          <div className="MuiGrid-grid-xs-12">
            <h4>
            {`Earn TOMB by staking LP`}
            </h4>
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
                    All below pools have ended. Please unstake and collect your rewards
                  </b>
                </div>
              </div>
            </div>
          </div>

          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-4 ">
            <div className="tomb-lp-panel">
              <h3>TOMB-FTM-LP</h3>
              <p>Deposit TOMB-FTM-LP Earn TOMB</p>
              
              <div className="crypto_tomb_img">
                <img src={TbombFtmImg} alt="crypto cash" />
              </div>
              <div className="button-container">
                <StyledButton text="VIEW" color="#571eb1" textColr="white" onClick={()=>{
                  navigate("/cemetery/TshareFtmLPTShareRewardPool");
                }} />
              </div>
            </div>
          </div>

          <div className="MuiGrid-grid-xs-12">
            <h4>
            {`Genesis Pools`}
            </h4>
          </div>

          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-4 ">
            <div className="tomb-lp-panel">
              <h3>WFTM</h3>
              <p>Deposit WFTM Earn TOMB</p>
              
              <div className="crypto_tomb_img">
                <img src={FTMlogobleImg} alt="crypto cash" />
              </div>
              <div className="button-container">
                <StyledButton text="VIEW" color="#571eb1" textColr="white" onClick={()=>{
                  navigate("/cemetery/TombFtmRewardPool");
                }} />
              </div>
            </div>
          </div>

          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-4 ">
            <div className="tomb-lp-panel">
              <h3>BOO</h3>
              <p>Deposit BOO Earn TOMB</p>
              
              <div className="crypto_tomb_img">
                <img src={SmokeyImg} alt="crypto cash" />
              </div>
              <div className="button-container">
                <StyledButton text="VIEW" color="#571eb1" textColr="white" onClick={()=>{
                  navigate("/cemetery/TombBooGenesisRewardPool");
                }} />
              </div>
            </div>
          </div>

          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-4 ">
            <div className="tomb-lp-panel">
              <h3>SHIBA</h3>
              <p>Deposit SHIBA Earn TOMB</p>
              
              <div className="crypto_tomb_img">
                <img src={SilbaImg} alt="crypto cash" />
              </div>
              <div className="button-container">
                <StyledButton text="VIEW" color="#571eb1" textColr="white" onClick={()=>{
                  navigate("/cemetery/TombShibaGenesisRewardPool");
                }} />
              </div>
            </div>
          </div>

          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-4 ">
            <div className="tomb-lp-panel">
              <h3>ZOO</h3>
              <p>Deposit ZOO Earn TOMB</p>
              
              <div className="crypto_tomb_img">
                <img src={ZooImg} alt="crypto cash" />
              </div>
              <div className="button-container">
                <StyledButton text="VIEW" color="#571eb1" textColr="white" onClick={()=>{
                  navigate("/cemetery/TombZooGenesisRewardPool");
                }} />
              </div>
            </div>
          </div>

        </div>
      ) : 
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
