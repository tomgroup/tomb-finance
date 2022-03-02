import { FooterContainer } from "./index.styled";
import React from "react";
import DiscordIcon from "../../../assets/social_icon/discord.svg";
import GithubIcon from "../../../assets/social_icon/github.svg";
import TelegramIcon from "../../../assets/social_icon/telegram.svg";
import TwitterIcon from "../../../assets/social_icon/twitter.svg";
import YoutubIcon from "../../../assets/social_icon/youtube.svg";

const Footer = () => {
  // const [year, setYear] = useState({});
  // useEffect(() => {
  //   let get_year = new Date().getFullYear;
  //   setYear(get_year);
  // }, []);
  return (
    <FooterContainer id="footer">
      <div className="container">
        <div className="copyright">
          Copyright © Tomb Finance 2022
        </div>
        <div className="social">
          <a href="https://twitter.com/tombfinance" rel="noopener noreferrer" target="_blank" >
            <img alt="twitter" src={TwitterIcon} /></a>
          <a href="https://github.com/tombfinance/tombfinance-frontend" rel="noopener noreferrer" target="_blank" >
            <img alt="github" src={GithubIcon}/></a>
          <a href="https://t.me/tombfinance" rel="noopener noreferrer" target="_blank" >
            <img alt="telegram" src={TelegramIcon} /></a>
          <a href="https://www.youtube.com/channel/UCGf87DxPzLXwPrfYpXIkaLQ" rel="noopener noreferrer" target="_blank" >
            <img alt="youtube" src={YoutubIcon} /></a>
          <a href="http://discord.tomb.finance/" rel="noopener noreferrer" target="_blank" >
            <img alt="discord" src={DiscordIcon} /></a>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
