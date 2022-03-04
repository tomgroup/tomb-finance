import styled from "styled-components";
export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background: #121212;
  margin-bottom: 3rem;
  background-color: #121212;
  @media (min-width: 600px) {
    min-height: 64px;
    
  }
  @media screen and (min-width: 1014px) {
    .bm-menu-wrap {
      display: none;
    }
  }
  /* transition: all 0.85s ease-in-out; */
  position: sticky;
  top: 0;
  z-index: 9999;

  h2 {
    flex-grow: 1;
    font-size: 30px;
    padding-left: 34px;
    font-family: "Amarante", cursive;
    font-weight: 500;
    line-height: 1.6; 
    a {
      color: #e0e3bd;
      text-decoration: none;
    }
    @media screen and (max-width: 1013px) {
      padding-left: 55px;
    }
  }
  .logo {
    z-index: 999999;
    margin-top: -10px;
  }
  .bm-burger-button {
    font-size: 25px;
    color: white;
    display: none;
    cursor: pointer;
  }
 
  @media screen and (max-width: 1014px) {
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
    position: fixed !important;
    .bm-burger-button {
      display: inline-block;
      z-index: 10;
    }
  }
`;
export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1014px) {
    display: none;
  }
`;
export const MobileHeaderContent = styled.div`
  display: none;
  @media screen and (max-width: 1013px) {
    /* transform: none;
    transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 8px 10px -5px rgb(0 0 0 / 20%), 0px 16px 24px 2px rgb(0 0 0 / 14%), 0px 6px 30px 5px rgb(0 0 0 / 12%);
    justify-content: start;
    padding-top: 65px; */
    a {
      color: #04396c;
      /* font-family: Chivo, sans-serif; */
      font-style: normal;
      font-weight: 900;
      font-size: 18px;
      text-decoration: none;
      padding-left: 16px;
      padding-right: 16px;
      padding-top: 8px;
      padding-bottom: 8px;
      text-decoration: none;
      transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      div {
        font-size: 1.2rem;
        font-family: "Poppins",sans-serif;
        font-weight: 400;
        line-height: 1.5;
        color: black;
      }
    }

    .connect__btn {
      padding: 20px;
      text-align: center;
    }
  }
`;

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  /* font-family: Chivo, sans-serif; */
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  padding: 0;
  margin-right: 40px;
  a {
    color: #e0e3bd;
    margin: 8px 16px;
    font-size: 14px;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 400;
  }
  /* span:active,
  span:focus {
    color: #e91e63;
  } */
`;
export const ModalContainer = styled.div`
  text-align: left;
  h2 {
    font-family: "Amarante",cursive !important;
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
  h3 {
    font-family: "Poppins",sans-serif!important;
    display: block;
    font-size: 18px;
    text-align: center;
    color: rgb(44, 37, 96) !important;
  }
  .my__wallet {
    color: rgb(44, 37, 96) !important;
    display: flex;
    
    justify-content: center;
    margin-bottom: 24px;
    &__item {
      align-items: center;
      display: flex;
      flex-direction: column;
      margin: 0px 16px;
      .description {
        align-items: center;
        display: flex;
        flex-direction: column;
      }
      img {
        width: 64px;
        aspect-ratio: auto 64 / 64;
        height: 64px;
      }
    }
  }
  .wallet-content {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 5px;
    width: 400px;
    img {
      height: 35px;
      width: 35px;

    }
    .description {
      margin-left: 20px;
      font-weight: 500;
      line-height: 1.75;
      font-size: 0.875rem;
      color: #2c2560!important;
      font-family: "Poppins",sans-serif!important;
      font-size: 1.1rem!important;
    }
  }
`;

export const ConnectMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 34px;
  a {
    margin-right: 20px;
  }
`;

export const Button = styled.span`
  color: white;
  font-size: 16px;
  background-color: #571eb1;
  font-family: Chivo;
  font-weight: 900;
  cursor: pointer;
  padding: 6px 16px;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  line-height: 1.75;
  border-radius: 4px;
  text-transform: capitalize;
  width: max-content;
  margin-left: auto;
  margin-right: auto;
`;

export const WalletButton = styled.span`
  color: rgba(0, 0, 0, 0.87);
  font-size: 16px;
  background-color: #d5d5d5;
  font-family: Chivo;
  font-weight: 900;
  cursor: pointer;
  padding: 6px 16px;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  line-height: 1.75;
  border-radius: 4px;
  text-transform: capitalize;
  width: max-content;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    color: white;
  }
`;
