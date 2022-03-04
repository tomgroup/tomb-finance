import styled from "styled-components";

export const SBScontainer = styled.div`
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
        font-family: "Amarante", cursive !important;
        font-weight: 400;
        line-height: 1.167;
      }
      h4 {
        font-size: 18px;
        font-family: "Amarante", cursive !important;
        font-weight: 300;
        line-height: 1.235;
        margin-bottom: 0.35em;
        color: #fff;
        text-align: center;
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
      .MuiGrid-grid-sm-5 {
        flex-grow: 0;
        max-width: 20%;
        flex-basis: 20%;
        display: flex;
        justify-content: center;
      }
      .MuiGrid-grid-sm-4 {
        flex-grow: 0;
        max-width: 30%;
        flex-basis: 30%;
        display: flex;
        justify-content: center;
      }
      .MuiGrid-grid-sm-8 {
        flex-grow: 0;
        max-width: 66.666667%;
        flex-basis: 66.666667%;
      }
    }

    .sbs-approve-panel {
      padding: 32px;
      margin: 10px;
      box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
        0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
      border-radius: 4px;
      color: #2c2560 !important;
      transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      background-color: rgba(255, 255, 255, 0.9);
      text-align: center;
      position: relative;
    }

    .sbs-panel {
      padding: 32px;
      margin: 10px;
      width: 90%;
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
        font-family: "Amarante", cursive !important;
        font-size: 1.5rem;
        color: rgb(44, 37, 96) !important;
        font-family: "Poppins", sans-serif !important;
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
      .tomb_available {
        -webkit-box-align: center;
        align-items: center;
        color: rgb(189, 189, 189);
        display: flex;
        font-size: 14px;
        font-weight: 700;
        height: 44px;
        -webkit-box-pack: end;
        justify-content: flex-end;
      }
      .max_available {
        -webkit-box-align: center;
        align-items: center;
        background-color: rgb(238, 238, 238);
        border-radius: 12px;
        display: flex;
        padding: 0px 16px;
        input {
          background: none;
          border: 0px;
          color: rgb(117, 117, 117);
          font-size: 18px;
          flex: 1 1 0%;
          height: 56px;
          margin: 0px;
          padding: 0px;
          outline: none;
        }
        .max_button_container {
          -webkit-box-align: center;
          align-items: center;
          display: flex;
          button {
            padding: 4px 10px;
            font-size: 0.8125rem;
            background-color: #571eb1;
            box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
              0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
            font-family: "Poppins", sans-serif;
            font-weight: 500;
            line-height: 1.75;
            border-radius: 4px;
            color: white;
            border: 0;
          }
        }
      }
      .button-container {
        position: relative;
        text-align: right;
      }

      @media (max-width: 850px) {
        width: auto;
      }
    }
  }
`;
