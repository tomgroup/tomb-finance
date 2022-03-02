import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  bottom: 0;
  height: 1.3rem;
  position: absolute;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #121212;
  @media (max-width: 505px) {
    display: none;
  }
  .container {
    width: 100%;
    display: block;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    @media (min-width: 600px) {
      padding-left: 24px;
      padding-right: 24px;
    } 
    .copyright {
      flex-grow: 0;
      max-width: 50%;
      flex-basis: 50%;
      text-align: left;
      color: rgba(255, 255, 255, 0.7);
    }
    .social{
      flex-grow: 0;
      max-width: 50%;
      flex-basis: 50%;
      text-align: right;
      margin: 0;
      box-sizing: border-box;
      margin: 0;
    }
    a {
      width: 24px;
      height: 24px;
      display: inline;
      margin-left: 20px;
      img {
      width: 24px;
      height: 24px;
      }
    }
  }
`;
