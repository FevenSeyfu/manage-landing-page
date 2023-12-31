import React, { useState } from "react";
import Hamburger from "../assets/images/icon-hamburger.svg";
import Close from "../assets/images/icon-close.svg";
import Logo from "../assets/images/logo.svg";
import Modal from "react-modal";
Modal.setAppElement("#root");

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleclick = () => setNav(!nav);

  return (
    <div className="flex w-full justify-between md:justify-evenly items-center py-8 px-2">
      <div className="">
        <img src={Logo} alt="site Logo" />
      </div>

      {/* menu */}
      <ul className="hidden md:flex gap-4">
        <li>Pricing</li>
        <li>Product</li>
        <li>About Us</li>
        <li>Careers</li>
        <li>Community</li>
      </ul>
        <div className="hidden md:flex">
            <button className="bg-primary-bright-red hover:bg-neutral-pale-red text-white  py-2 px-4 rounded-full">
                Get started
            </button>
        </div>
      {/* Hamburger */}
      <div onClick={handleclick} className="md:hidden z-10">
        {!nav ? (
          <img src={Hamburger} alt="hamburger icon" />
        ) : (
          <img src={Close} alt="hamburger icon" cla />
        )}
      </div>

      {/* Mobile menu */}
      <Modal
        isOpen={true}
        contentLabel="Mobile Menu"
        className={
          !nav
            ? "hidden"
            : "fixed top-24 left-0 w-full h-full flex justify-center"
        }
        overlayClassName={
          !nav
            ? "hidden"
            : "fixed top-0 left-0 w-full h-full  bg-gradient-to-b to-black/50 from-transparent  flex justify-center items-center"
        }
      >
        <ul className="absolute w-4/5 h-64 flex flex-col justify-center items-center bg-white rounded-lg gap-4  text-lg font-medium">
          <li className="hover:text-primary-bright-red">Pricing</li>
          <li className="hover:text-primary-bright-red">Product</li>
          <li className="hover:text-primary-bright-red">About Us</li>
          <li className="hover:text-primary-bright-red">Careers</li>
          <li className="hover:text-primary-bright-red">Community</li>
        </ul>
      </Modal>
    </div>
  );
};

export default Navbar;
