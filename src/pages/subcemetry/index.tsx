import React, { useEffect, useState } from "react";
import StyledButton from "../../components/button";
import { SubCemetrycontainer } from "./index.styled";
import bg from "../../assets/masonry.png";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import { useParams} from "react-router-dom";
import CryptoTombImg from "../../assets/crypto_tomb_cash.svg";
import CryptoTombShareImg from "../../assets/crypto_tomb_share.svg";
import ZoologoImg from "../../assets/zoo_logo.svg";
import ShibalogoImg from "../../assets/shiba_logo.svg";
import FtmlogoImg from "../../assets/ftm_logo_blue.svg";
import SpookyImg from "../../assets/spooky.png";
import TombFtmImg from "../../assets/tomb_ftm_lp.png";
import TshareFtmImg from "../../assets/tshare_ftm_lp.png";

const data: { [key: string]: any } = {
  "TombZooGenesisRewardPool": {
    title: "Earn TOMB by ZOO",
    subtitle: "Deposit ZOO and earn TOMB",
    apr: "0.00 %",
    daily_apr: "0.00 %",
    tvl: "$105.02",
    left: {
      src: CryptoTombImg,
      total: "0.0000",
      earned: "0.00",
      text: "TOMB Earned"
    },
    right: {
      src: ZoologoImg,
      total: "0.0000",
      earned: "0.00",
      text: "ZOO Staked",
      buttonText: "APPROVE ZOO",
    },
    bottom: false
  },
  "TombShibaGenesisRewardPool": {
    title: "Earn TOMB by SHIBA",
    subtitle: "Deposit SHIBA and earn TOMB",
    apr: "0.00 %",
    daily_apr: "0.00 %",
    tvl: "$0.00",
    left: {
      src: CryptoTombImg,
      total: "0.0000",
      earned: "0.00",
      text: "TOMB Earned"
    },
    right: {
      src: ShibalogoImg,
      total: "0.0000",
      earned: "0.00",
      text: "SHIBA Staked",
      buttonText: "APPROVE SHIBA",
    },
    bottom: false
  },
  "TombFtmRewardPool": {
    title: "Earn TOMB by FTM",
    subtitle: "Deposit WFTM and earn TOMB",
    apr: "0.00 %",
    daily_apr: "0.00 %",
    tvl: "$0.26",
    left: {
      src: CryptoTombImg,
      total: "0.0000",
      earned: "0.00",
      text: "TOMB Earned"
    },
    right: {
      src: FtmlogoImg,
      total: "0.0000",
      earned: "0.00",
      text: "WFTM Staked",
      buttonText: "APPROVE WFTM",
    },
    bottom: false
  },
  "TombBooGenesisRewardPool": {
    title: "Earn TOMB by BOO",
    subtitle: "Deposit BOO and earn TOMB",
    apr: "0.00 %",
    daily_apr: "0.00 %",
    tvl: "$0.00",
    left: {
      src: CryptoTombImg,
      total: "0.0000",
      earned: "0.00",
      text: "TOMB Earned"
    },
    right: {
      src: SpookyImg,
      total: "0.0000",
      earned: "0.00",
      text: "BOO Staked",
      buttonText: "APPROVE BOO",
    },
    bottom: false
  },
  "TombFtmLPTShareRewardPool": {
    title: "Earn TSHARE by TOMB-FTM LP",
    subtitle: "Deposit TOMB-FTM-LP and earn TSHARE",
    apr: "89.20%",
    daily_apr: "0.24%",
    tvl: "$274044334.02",
    left: {
      src: CryptoTombShareImg,
      total: "0.0000",
      earned: "0.00",
      text: "TSHARE Earned"
    },
    right: {
      src: TombFtmImg,
      total: "0.0000",
      earned: "0.00",
      text: "TOMB-FTM-LP Staked",
      buttonText: "APPROVE TOMB-FTM-LP",
    },
    bottom: true
  },
  "TshareFtmLPTShareRewardPool": {
    title: "Earn TSHARE by TSHARE-FTM LP",
    subtitle: "Deposit TSHARE-FTM-LP and earn TSHARE",
    apr: "179.40%",
    daily_apr: "0.49%",
    tvl: "$92183907.43",
    left: {
      src: CryptoTombShareImg,
      total: "0.0000",
      earned: "0.00",
      text: "TSHARE Earned"
    },
    right: {
      src: TshareFtmImg,
      total: "0.0000",
      earned: "0.00",
      text: "TSHARE-FTM-LP Staked",
      buttonText: "APPROVE TSHARE-FTM-LP",
    },
    bottom: true
  },
  "TombFtmLpTombRewardPool": {
    title: "Earn TOMB by TOMB-FTM LP",
    subtitle: "Deposit TOMB-FTM-LP and earn TOMB",
    apr: "0.00 %",
    daily_apr: "0.00 %",
    tvl: "$1630.95",
    left: {
      src: CryptoTombImg,
      total: "0.0000",
      earned: "0.00",
      text: "TOMB Earned"
    },
    right: {
      src: TombFtmImg,
      total: "0.0000",
      earned: "0.00",
      text: "TOMB-FTM-LP Staked",
      buttonText: "APPROVE TOMB-FTM-LP",
    },
    bottom: true
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
                <img src={data[datakey].left.src} alt="crypto cash" />
              </div>
              <h2>{data[datakey].left.total}</h2>
              <h3>{`≈ $${data[datakey].left.earned}`}</h3>
              {data[datakey].left.text} <br/><br/><br/><br/>
              <div className="button-container">
                <StyledButton text="CLAIM" color="#CDCDCD" textColr="white" onClick={()=>{}} />
              </div>
            </div>
          </div>

          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-4">
            <div className="tomb-lp-panel">
              <div className="crypto_tomb_img">
                <img src={data[datakey].right.src} alt="crypto cash" />
              </div>
              <h2>{data[datakey].right.total}</h2>
              <h3>{data[datakey].right.earned}</h3>
              {data[datakey].right.text} <br/><br/><br/><br/>
              <div className="button-container">
                <StyledButton text={data[datakey].right.buttonText} color="#571eb1" textColr="white" onClick={()=>{}} />
              </div>
            </div>
          </div>

          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-5 ">
          </div>

          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-5"></div>
          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-6">
            {data[datakey].bottom ? 
            (
            <div className="subcemetry-bottom-panel">
              <a href="https://spookyswap.finance/add/FTM/0x6c021Ae822BEa943b2E66552bDe1D2696a53fbB7" target="_blank">
                {`👻 Provide liquidity for TOMB-FTM pair now on SpookySwap 👻`}
              </a>
            </div>
            ) : (<></>)
            }
          </div>
          <div className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-5"></div>

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
