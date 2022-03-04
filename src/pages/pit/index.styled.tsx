import styled from "styled-components";

export const Pitcontainer = styled.div`
  padding-bottom: 5rem;
  width: 100%;
  display: block;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 850px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  .unlock-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  .MuiGrid-container {
    width: calc(100% + 24px);
    margin: -12px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    text-align: center;

    .MuiGrid-grid-xs-12 {
      flex-grow: 0;
      max-width: 100%;
      flex-basis: 100%;
      h2 {
        margin-bottom: 0.35em;
        color: white;
        font-size: 3rem;
        font-family: "Amarante",cursive!important;
        font-weight: 400;
        line-height: 1.167;
      }
      h4 {
        color: rgb(189, 189, 189);
        font-size: 18px;
        font-weight: 400;
        margin: 0px;
        padding: 0px;
        text-align: center;
        margin-bottom: 3rem;
      }
    }

    @media (min-width: 850px) {
      .MuiGrid-grid-sm-4 {
        flex-grow: 0;
        max-width: 33.333333%;
        flex-basis: 33.333333%;
        display: flex;
        justify-content: center;
      }
      .MuiGrid-grid-sm-6 {
        flex-grow: 0;
        max-width: 50%;
        flex-basis: 50%;
        display: flex;
        justify-content: center;
      }
      .MuiGrid-grid-sm-8 {
        flex-grow: 0;
        max-width: 66.666667%;
        flex-basis: 66.666667%;
      }
    }


    .pit-panel {
      padding: 32px;
      margin: 10px;
      width: 100%;
      box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
        0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
      border-radius: 4px;
      color: #2c2560 !important;
      transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      background-color: rgba(255, 255, 255, 0.9);
      text-align: center;
      position: relative;
    
      h3 {
        margin: 0;
        font-family: "Poppins",sans-serif!important;
        font-size: 20px;
        font-weight: 700;
        height: 64px;
      }
      &__img {
        align-items: center;
        display: flex;
        margin-bottom: 5px;
        justify-content: center;
        &__svg {
          padding-left: 16px;
          padding-right: 16px;
          width: 20px;
          margin-top: -60px;
        }
      }
      .crypto_tomb_img {
        background-color: rgb(33, 33, 33);
        font-size: 36px;
        height: 72px;
        width: 72px;
        display: flex;
        border-radius: 36px;
        justify-content: center;
        margin: 0px auto 16px;
      }
      .button-container {
        position: relative;
      }
      span {
        margin-top: 10px;
        font-family: "Poppins", sans-serif !important;
        -webkit-font-smoothing: antialiased;
        font-size: 12px;
      }

      @media (max-width: 850px) {
        width: auto;
      }
    }
    .ftm-panel-container {
      width: 100%;
    }
    .ftm-panel {
      padding: 32px 32px 5px 32px;
      margin: 10px;
      box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
        0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
      border-radius: 4px;
      color: #2c2560 !important;
      transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      background-color: rgba(255, 255, 255, 0.9);
      text-align: center;
      position: relative;
    
      h3 {
        margin: 0;
        font-family: "Poppins",sans-serif!important;
        font-size: 20px;
        font-weight: 700;
      }
      &__img {
        align-items: center;
        display: flex;
        margin-bottom: 5px;
        justify-content: center;
        &__svg {
          padding-left: 16px;
          padding-right: 16px;
          width: 20px;
          margin-top: -60px;
        }
      }
      .crypto_tomb_img {
        background-color: rgb(33, 33, 33);
        font-size: 36px;
        height: 72px;
        width: 72px;
        display: flex;
        border-radius: 36px;
        justify-content: center;
        margin: 0px auto 16px;
      }

      @media (max-width: 850px) {
        width: auto;
      }
    }
  }
`;
