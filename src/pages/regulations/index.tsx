import React, { useEffect } from "react";
import { RegulationsContainer } from "./index.styled";
import bg from "../../assets/regulations_bg.png";

const Regulations = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url('${bg}')`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }, []);
  return (
    <RegulationsContainer>
      <h3>Graveyard regulations</h3>
      <div className="MuiTableContainer-root">
        <table className="MuiTable-root">
          <thead className="MuiTableHead-root">
            <tr className="MuiTableRow-root">
              <th className="MuiTableCell-root">Epoch</th>
              <th className="MuiTableCell-root">Masonry funding</th>
              <th className="MuiTableCell-root">DAO funding</th>
              <th className="MuiTableCell-root">DEV funding</th>
              <th className="MuiTableCell-root">Total</th>
              <th className="MuiTableCell-root">Bonds Bought</th>
              <th className="MuiTableCell-root">Bonds Redeemed</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    </RegulationsContainer>
  );
};

export default Regulations;
