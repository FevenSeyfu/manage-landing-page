import React from "react";
import Navbar from "./Navbar";
import BgImage from "/src/assets/images/bg-tablet-pattern.svg";
const Home = () => {
  return (
    <div
      name="home"
      className="bg-[url('/src/assets/images/bg-tablet-pattern.svg')] h-screen w-full bg-no-repeat bg-auto bg-right-bottom top-0 left-0"
    >
      <Navbar />
      <div className="flex flex-col lg:flex-row lg:justify-evenly lg:px-40 lg:py-12">
        <div className="flex flex-col justify-center w-3/5 gap-8 text-left">
          <h1 className="font-bold text-5xl text-primary-dark-blue"> Bring everyone together to build better products.</h1>
          <p className="text-neutral-grayish-blue font-light text-md pr-36">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className="bg-primary-bright-red hover:bg-neutral-pale-red text-white  py-2 px-4 w-32 rounded-full shadow-md shadow-primary-bright-red">
            Get Started
          </button>
        </div>
        <div>
          <img src="/src/assets/images/illustration-intro.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Home;
