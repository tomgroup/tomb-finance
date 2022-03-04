import styled from "styled-components";

export const Homecontainer = styled.div`
  padding-bottom: 5rem;
  width: 100%;
  display: block;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  @media (min-width: 950px) {
    padding-left: 24px;
    padding-right: 24px;
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
    }

    @media (min-width: 950px) {
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

    .cryptotomb-media {
      padding-top: 0px;
      position: relative;
      width: 300px;
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: inherit;
        top: 0px;
        left: 0px;
        opacity: 1;
        transition: filterBrightness 2250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
          filterSaturate 3000ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
          opacity 1500ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
      }
    }
    .welcome-panel {
      padding: 32px;
      margin: 10px;
      box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
        0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
      border-radius: 4px;
      color: #2c2560 !important;
      transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      background-color: rgba(255, 255, 255, 0.9);
      text-align: left;
      h2 {
        margin: 0;
        font-family: "Amarante", cursive !important;
        font-size: 1.5em;
      }
      p {
        font-family: "Poppins", sans-serif !important;
        -webkit-font-smoothing: antialiased;
        font-size: 18px;
      }
    }
    .alert-panel {
      padding: 32px;
      display: flex;
      justify-content: center;
      .MuiPaper-root {
        font-weight: 500;
        background-color: #ff9800;
        display: flex;
        padding: 6px 16px;
        font-size: 0.875rem;
        font-family: "Poppins", sans-serif;
        line-height: 1.43;
        border-radius: 4px;
        box-shadow: none;
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        color: #2c2560 !important;
        justify-content: center;
        .MuiAlert-icon {
          display: flex;
          opacity: 0.9;
          padding: 7px 0;
          font-size: 22px;
          margin-right: 12px;

          .MuiSvgIcon-root {
            fill: currentColor;
            width: 1em;
            height: 1em;
            display: inline-block;
            font-size: inherit;
            transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            flex-shrink: 0;
            user-select: none;
          }
        }

        .MuiAlert-message {
          padding: 8px 0;
        }
      }
    }

    .total-value-panel {
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
      h2 {
        margin: 0;
        font-family: "Amarante", cursive !important;
        font-size: 1.5em;
      }
      span {
        margin-top: 10px;
        font-family: "Poppins", sans-serif !important;
        -webkit-font-smoothing: antialiased;
        font-size: 25px;
      }

      @media (max-width: 950px) {
        width: auto;
      }
    }
    .stake-panel {
      margin: 10px;
      box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
        0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
      border-radius: 4px;
      color: #2c2560 !important;
      transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      background-color: rgba(255, 255, 255, 0.9);
      text-align: left;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 50px;
    
      button {
        margin-left: 5px;
        margin-right: 5px;
        width: 100%;
      }
    }

    .tomb-price-panel {
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
      h2 {
        margin: 0;
        font-family: "Amarante", cursive !important;
        font-size: 1.5em;
      }
      h3 {
        margin: 0;
        font-family: "Amarante", cursive !important;
        font-size: 1em;
      }
      button {
        display: flex;
        position: absolute;
        top: 20px;
        right: 10px;
        color: #571eb1;
        border: 1px solid rgba(87, 30, 177, 0.5);
        border-radius: 4px;
        padding: 8px 20px;
        span {
          width: 100%;
          display: inherit;
          justify-content: center;
          align-items: center;
          font-size: 0.875rem;
          font-family: "Poppins",sans-serif;
          font-weight: 500;
          line-height: 1.75;
          color: #571eb1 !important;
          display: flex;
          img {
            width: 20px;
          }
        }
        &:hover{
          background-color: rgba(87, 30, 177, 0.08);
          span {
            color: #fff!important;
          }
        }
      }
      .crypto_tomb_img {
        background-color: rgb(255, 255, 255);
        font-size: 36px;
        height: 95px;
        width: 95px;
        display: flex;
        border-radius: 40px;
        justify-content: center;
        box-shadow: rgb(224 224 224) 4px 4px 8px inset,
          rgb(245 245 245) -6px -6px 12px inset;
        margin: 0px auto 16px;
      }
      span {
        font-family: "Poppins", sans-serif !important;
        -webkit-font-smoothing: antialiased;
        font-size: 12px;
      }

      @media (max-width: 950px) {
        width: auto;
      }
    }
    .tomb-lp-panel {
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
      h2 {
        margin: 0;
        font-family: "Amarante", cursive !important;
        font-size: 1.5em;
      }
      h3 {
        margin: 0;
        font-family: "Amarante", cursive !important;
        font-size: 1em;
      }
    
      .crypto_tomb_img {
        background-color: rgb(255, 255, 255);
        font-size: 36px;
        height: 95px;
        width: 95px;
        display: flex;
        border-radius: 40px;
        justify-content: center;
        box-shadow: rgb(224 224 224) 4px 4px 8px inset,
          rgb(245 245 245) -6px -6px 12px inset;
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

      @media (max-width: 950px) {
        width: auto;
      }
    }
  }
`;
