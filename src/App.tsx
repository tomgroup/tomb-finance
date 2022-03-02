import Footer from "./pages/layout/footer";
import Header from "./pages/layout/header";
import Router from "./router";
import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
