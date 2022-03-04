import React, { useEffect, useState } from "react";
import StyledButton from "../../components/button";
import { SubCemetrycontainer } from "./index.styled";
import bg from "../../assets/masonry.png";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import { useParams} from "react-router-dom";
import CryptoTombImg from "../../assets/crypto_tomb_cash.svg";
import CryptoTombShareImg from "../../assets/crypto_tomb_share.svg";

const data: { [key: string]: any } = {
  "TombZooGenesisRewardPool": {
    title: "Earn TOMB by ZOO",
    subtitle: "Deposit ZOO and earn TOMB",
    apr: "0.00 %",
    daily_apr: "0.00 %",
    tvl: "$105.02",
  },
  "TombShibaGenesisRewardPool": {
    title: "Earn TOMB by SHIBA",
    subtitle: "Deposit SHIBA and earn TOMB",
    apr: "0.00 %",
    daily_apr: "0.00 %",
    tvl: "$0.00",
  },
  "TombFtmRewardPool": {
    title: "Earn TOMB by FTM",
    subtitle: "Deposit WFTM and earn TOMB",
    apr: "0.00 %",
    daily_apr: "0.00 %",
    tvl: "$0.26",
  },
  "TombBooGenesisRewardPool": {
    title: "Earn TOMB by BOO",
    subtitle: "Deposit BOO and earn TOMB",
    apr: "0.00 %",
    daily_apr: "0.00 %",
    tvl: "$0.00",
  },
  "TombFtmLPTShareRewardPool": {
    title: "Earn TSHARE by TOMB-FTM LP",
    subtitle: "Deposit TOMB-FTM-LP and earn TSHARE",
    apr: "89.20%",
    daily_apr: "0.24%",
    tvl: "$274044334.02",
  },
  "TshareFtmLPTShareRewardPool": {
    title: "Earn TSHARE by TSHARE-FTM LP",
    subtitle: "Deposit TSHARE-FTM-LP and earn TSHARE",
    apr: "179.40%",
    daily_apr: "0.49%",
    tvl: "$92183907.43",
  },
  "TombFtmLpTombRewardPool": {
    title: "Earn TOMB by TOMB-FTM LP",
    subtitle: "Deposit TOMB-FTM-LP and earn TOMB",
    apr: "0.00 %",
    daily_apr: "0.00 %",
    tvl: "$1630.95",
  }
}

const SubCemetry = () => {
  const { address } = useTypedSelector((state) => state.address);
  const { name } = useParams();
  const [ datakey, setKey ] = useState("TombZooGenesisRewardPool");
  useEffect(() => {
    document.body.style.backgroundImage = `url('${bg}')`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    setKey(name!);
  }, []);


  return (
    <SubCemetrycontainer>
      {address !== "" ? (
        <div className="MuiGrid-container">
          <div className="MuiGrid-grid-xs-12">
            <h2>{data[datakey].title}</h2>
            <h4>{data[datakey].subtitle}</h4>
          </div>

          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-5 ">
          </div>
          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-5 ">
            <div className="masonry-top-panel">
              <p>{`APR`}</p>
              <p>{data[datakey].apr}</p>
            </div>
          </div>
          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-5 ">
            <div className="masonry-top-panel">
              <p>
                {`Daily APR`}
              </p>
              <p>{data[datakey].daily_apr}</p>
            </div>
          </div>
          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-5 ">
            <div className="masonry-top-panel">
              <p>{`TVL`}</p>
              <p>{data[datakey].tvl}</p>
            </div>
          </div>
          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-5 ">
          </div>

          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-5 ">
          </div>

          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-4">
            <div className="tomb-lp-panel">
              <div className="crypto_tomb_img">
                <img src={CryptoTombImg} alt="crypto cash" />
              </div>
              <h2>{`0.0000`}</h2>
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
              <h2>{`0.0000`}</h2>
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
              <StyledButton text="CLAIM & WITHDRAW" color="#571eb1" textColr="white" onClick={()=>{}} />
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
    </SubCemetrycontainer>
  );
};

export default SubCemetry;
