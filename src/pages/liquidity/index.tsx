import React, { useEffect } from "react";
import StyledButton from "../../components/button";
import { LiquidityContainer } from "./index.styled";
import bg from "../../assets/home.png";

const Liquidity = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url('${bg}')`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }, []);
  return (
    <LiquidityContainer>
      <h3>Provide Liquidity</h3>
      <div className="MuiGrid-root MuiGrid-container MuiGrid-justify-xs-center">
        <div className="MuiBox-root">
          <div className="MuiPaper-root">
            <div className="MuiAlert-icon">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path>
              </svg>
            </div>
            <div className="MuiAlert-message">
              <b>
                This and{" "}
                <a
                  href="https://spookyswap.finance/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Spookyswap
                </a>{" "}
                are the only ways to provide Liquidity on TOMB-FTM pair without
                paying tax.
              </b>
            </div>
          </div>

          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12">
            <div className="MuiPaper-elevation1">
              <div className="padding32">
                <div className="MuiGrid-root MuiGrid-container">
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                    <div>
                      <div className="tomb_available">
                        0.0000 TOMB Available
                      </div>
                      <div className="max_available">
                        <input placeholder="0" type="number" />
                        <div className="max_button_container">
                          <div>
                            <button>
                              <span>MAX</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="tomb_available">0.0000 FTM Available</div>
                      <div className="max_available">
                        <input placeholder="0" type="number" />
                        <div className="max_button_container">
                          <div>
                            <button>
                              <span>MAX</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                    <p>1 TOMB = 1.00 FTM</p>
                    <p>1 FTM = 1.00 TOMB</p>
                    <p>LP tokens ≈ 219411.53</p>
                  </div>

                  <div className="MuiGrid-root MuiGrid-grid-xs-12 approve-button">
                    <button>
                      <span>APPROVE</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LiquidityContainer>
  );
};

export default Liquidity;
