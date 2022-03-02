import styled from "styled-components";

export const LiquidityContainer = styled.div`
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

  h3 {
    color: #fff;
    margin-bottom: 1.35rem;
    text-align: center;
    font-size: 3rem;
    font-family: "Amarante",cursive!important;
    font-weight: 400;
    line-height: 1.167;
  }
  .MuiGrid-justify-xs-center {
    justify-content: center;
  }
  .MuiGrid-grid-xs-12 {
    flex-grow: 0;
    max-width: 100%;
    flex-basis: 100%;
  }
  .MuiGrid-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    .MuiBox-root{
      width: 600px;
      .MuiPaper-root{
        margin-bottom: 10px;
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

      .MuiGrid-root {
        @media (min-width: 600px)
        .MuiGrid-grid-sm-12 {
          flex-grow: 0;
          max-width: 100%;
          flex-basis: 100%;
        }
        margin: 0;
        box-sizing: border-box;
        .MuiPaper-elevation1 {
          box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
          transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          background-color: rgba(255, 255, 255, 0.9);
          margin-top: 32px;
          border-radius: 4px;
          .padding32{
            padding: 32px;

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
                  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
                  font-family: "Poppins",sans-serif;
                  font-weight: 500;
                  line-height: 1.75;
                  border-radius: 4px;
                  color: white;
                  border: 0;
                }
              }
            }

            .approve-button {
              text-align: center;
              button {
                color: #000;
                background-color: #f44336;
                box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
                padding: 6px 16px;
                font-size: 0.875rem;
                min-width: 64px;
                box-sizing: border-box;
                transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                font-family: "Poppins",sans-serif;
                font-weight: 500;
                line-height: 1.75;
                border-radius: 4px;
                text-transform: uppercase;
                border: 0;
              }
            }
          }
        }
      }
    }
  }
`;
