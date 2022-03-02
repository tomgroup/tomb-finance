import React from "react";
import { Route, Routes } from "react-router-dom";
import FAQ from "../pages/FAQ";
import SBS from "../pages/SBS";
import Home from "../pages/home";
import Regulations from "../pages/regulations";
import Liquidity from "../pages/liquidity";
import Cemetery from "../pages/cemetery";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/sbs" element={<SBS />} />
      <Route path="/regulations" element={<Regulations />} />
      <Route path="/liquidity" element={<Liquidity />} />
      <Route path="/cemetery" element={<Cemetery />} />
    </Routes>
  );
};

export default Router;
