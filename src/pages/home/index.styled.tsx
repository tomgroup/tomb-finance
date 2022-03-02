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
  @media (min-width: 600px) {
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
    
    @media (min-width: 600px) {
      
      .MuiGrid-grid-sm-4 {
        flex-grow: 0;
        max-width: 33.333333%;
        flex-basis: 33.333333%;
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
      padding: 20px;
      display: flex;
      justify-content: center;
      .MuiPaper-root{
        font-weight: 500;
        background-color: #ff9800;
        display: flex;
        padding: 6px 16px;
        font-size: 0.875rem;
        font-family: "Poppins",sans-serif;
        line-height: 1.43;
        border-radius: 4px;
        box-shadow: none;
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        color: #2c2560!important;
        justify-content: center;
        .MuiAlert-icon{
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
    }
    .stake-panel {
      padding: 32px;
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
        margin-left: 20px;
        margin-right: 20px;
      }
    }
  }
`;
