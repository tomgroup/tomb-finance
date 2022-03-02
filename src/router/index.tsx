import React from "react";
import { Route, Routes } from "react-router-dom";
import FAQ from "../pages/FAQ";
import SBS from "../pages/SBS";
import Home from "../pages/home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/sbs" element={<SBS />} />
    </Routes>
  );
};

export default Router;
