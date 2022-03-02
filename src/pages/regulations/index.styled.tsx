import styled from "styled-components";

export const RegulationsContainer = styled.div`
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
  .MuiTableContainer-root {
    width: 100%;
    overflow-x: auto;
    .MuiTable-root{
      width: 100%;
      display: table;
      border-spacing: 0;
      border-collapse: collapse;
      box-sizing: border-box;
      text-indent: initial;
      border-color: grey;
      .MuiTableHead-root{
        display: table-header-group;
        width: 100%;
        .MuiTableRow-root {
          color: inherit;
          display: table-row;
          outline: 0;
          vertical-align: middle;
          .MuiTableCell-root {
            color: #2c2560;
            font-size: 18px;
            font-weight: bolder;
            background-color: rgba(255, 255, 255, 0.9);
            text-align: center;
            padding: 16px;
          }
        }
      }
    }
  }
`;
