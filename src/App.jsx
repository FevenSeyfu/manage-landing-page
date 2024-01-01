import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Home />
      <div
      className="lg:bg-[url('/src/assets/images/bg-tablet-pattern.svg')] h-full w-full bg-no-repeat mb-18 lg:mb-1 lg:bg-auto lg:bg-[left_-30rem_top_12rem]">
        <About />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default App;
