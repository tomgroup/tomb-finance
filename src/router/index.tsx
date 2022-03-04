import React from "react";
import { Route, Routes } from "react-router-dom";
import Pit from "../pages/pit";
import SBS from "../pages/SBS";
import Home from "../pages/home";
import Regulations from "../pages/regulations";
import Liquidity from "../pages/liquidity";
import Cemetery from "../pages/cemetery";
import Masonry from "../pages/masonry";
import SubCemetry from "../pages/subcemetry";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pit" element={<Pit />} />
      <Route path="/sbs" element={<SBS />} />
      <Route path="/regulations" element={<Regulations />} />
      <Route path="/liquidity" element={<Liquidity />} />
      <Route path="/cemetery" element={<Cemetery />} />
      <Route path="/masonry" element={<Masonry />} />
      <Route path="/cemetery/:name" element={<SubCemetry />} />
    </Routes>
  );
};

export default Router;
