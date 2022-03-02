import React from "react";
import { Route, Routes } from "react-router-dom";
import FAQ from "../pages/FAQ";
import Home from "../pages/home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  );
};

export default Router;
