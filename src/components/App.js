import React, { useState, useEffect } from "react";
import Route from "./Route";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import Banner from "./HeaderBanner";
import Contact from "./Contact";

const App = () => {
  
  const [scroll, setScroll] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
      });
    }, []);

  return (
    <main>
      <Navbar />
      <Banner />

      <Route path="/">
        <Home/>
        <a href="tel:+919991060450" className={scroll ? 'text-white bg-red-500 fixed z-30 bottom-10 md:bottom-12 right-2 md:right-6 w-30 hover:scale-105 px-4 py-3 font-semibold rounded-full shadow-xl transition-all' : 'hidden'}><i className="fa-solid fa-phone-volume text-xl -rotate-45"></i></a>
      </Route>

      <Route path="/about">
        <About/>
      </Route>

      <Route path="/contact">
        <Contact/>
      </Route>
      <Footer/>
    </main>
  )
};

export default App;