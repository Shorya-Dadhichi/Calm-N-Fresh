import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Banner from "./HeaderBanner";

const App = () => {
  return (
    <main className="">
      <Navbar />
      <Banner/>
      <Home />
      <Footer/>
    </main>
  )
};

export default App;