import Footer from "./pages/layout/footer";
import Header from "./pages/layout/header";
import Router from "./router";
import React from "react";

const App = () => {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
};

export default App;
