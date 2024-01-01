import React from "react";
import FacebookIcon from "../assets/icons/FacebookIcon";
import YouTubeIcon from "../assets/icons/YouTubeIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";
import PinterestIcon from "../assets/icons/PinterestIcon";
import InstagramIcon from "../assets/icons/InstagramIcon";

const Footer = () => {
  return (
    <footer className="flex flex-col h-full w-full">
      <div className="bg-primary-bright-red text-white flex flex-col items-center justify-center p-12 text-center gap-4 lg:flex-row lg:justify-between">
        <h2 className="text-3xl font-medium tracking-wider lg:text-4xl lg:w-3/5 lg:pr-32 lg:text-left">
          Simplify how your team works today.
        </h2>
        <button className="bg-neutral-pale-red  text-primary-bright-red  py-2 px-4 w-32 rounded-full font-medium shadow-md hover:shadow-neutral-pale-red hover:shadow-md hover:opacity-75">
          Get Started
        </button>
      </div>
      {/* mobile view */}
      <div className="bg-primary-dark-blue text-white flex flex-col justify-center w-full gap-8 items-center px-2 py-6 md:hidden">
        <div>
          <input
            type="text"
            placeholder="Updates in your inbox…"
            className="p-2 rounded-full mr-2 pr-12"
          />
          <button className="bg-primary-bright-red text-white rounded-full px-6 py-2 hover:opacity-75 hover:shadow-md hover:shadow-neutral-pale-red">
            Go
          </button>
        </div>
        <div id="site-map">
          <ul className="flex flex-row justify-center gap-16">
            <div>
              <li>
                <a href="#" className="hover:text-primary-bright-red ">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-bright-red ">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-bright-red ">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-bright-red ">
                  About Us
                </a>
              </li>
            </div>
            <div>
              <li>
                <a href="#" className="hover:text-primary-bright-red ">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-bright-red ">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-bright-red ">
                  Privacy Policy
                </a>
              </li>
            </div>
          </ul>
        </div>
        <div id="social">
          <ul className="flex flex-row items-center gap-8">
            <li>
              <a href="#">
                <FacebookIcon />
              </a>
            </li>
            <li>
              {/* youtube */}
              <a href="#">
                <YouTubeIcon />
              </a>
            </li>
            <li>
              {/* twitter */}
              <a href="#">
                <TwitterIcon />
              </a>
            </li>
            <li>
              {/* pinterest */}
              <a href="#">
                <PinterestIcon />
              </a>
            </li>
            <li>
              {/* instagram */}
              <a href="#">
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </div>
        <div id="logo">
          <img src="src/assets/images/logo-white.svg" alt="Logo" />
        </div>
        <div
          id="copyright"
          className="flex flex-col items-center text-sm text-primary-grayish-blue"
        >
          <p>Copyright 2024. All Rights Reserved</p>
          <div class="attribution px-12 text-center">
            Challenge by
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              className="hover:underline hover:text-primary-bright-red "
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              href="https://www.frontendmentor.io/profile/FevenSeyfu"
              className="hover:underline hover:text-primary-bright-red "
            >
              {" "}
              Feven Seyfu
            </a>
            .
          </div>
        </div>
      </div>
      {/* desktop footer */}
      <div className="hidden bg-primary-dark-blue text-white md:flex flex-row justify-evenly p-12 items-center">
        <div className="flex flex-col items-center gap-12">
          <div id="logo">
            <img src="src/assets/images/logo-white.svg" alt="Logo" />
          </div>
          <div id="social">
            <ul className="flex flex-row items-center gap-2">
              <li>
                <a href="#">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                {/* youtube */}
                <a href="#">
                  <YouTubeIcon />
                </a>
              </li>
              <li>
                {/* twitter */}
                <a href="#">
                  <TwitterIcon />
                </a>
              </li>
              <li>
                {/* pinterest */}
                <a href="#">
                  <PinterestIcon />
                </a>
              </li>
              <li>
                {/* instagram */}
                <a href="#">
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="site-map">
          <ul className="flex flex-row gap-32 text-lg">
            <div className="flex flex-col gap-2">
              <li>
                <a href="#" className="hover:text-primary-bright-red ">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-bright-red ">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-bright-red ">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-bright-red ">
                  About Us
                </a>
              </li>
            </div>
            <div className="flex flex-col gap-2">
              <li>
                <a href="#" className="hover:text-primary-bright-red ">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-bright-red ">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-bright-red ">
                  Privacy Policy
                </a>
              </li>
            </div>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div>
            <input
              type="text"
              placeholder="Updates in your inbox…"
              className="p-2 rounded-full mr-2 pr-12"
            />
            <button className="bg-primary-bright-red hover:opacity-75 hover:shadow-md hover:shadow-neutral-pale-red  text-white rounded-full px-6 py-2">
              Go
            </button>
          </div>
          <div
            id="copyright"
            className="flex flex-col items-center text-sm text-primary-grayish-blue"
          >
            <p>Copyright 2024. All Rights Reserved</p>
            <div class="attribution px-12 text-center">
              Challenge by{" "}
              <a
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
                className="hover:underline hover:text-primary-bright-red "
              >
                Frontend Mentor
              </a>
              . Coded by{" "}
              <a
                href="https://www.frontendmentor.io/profile/FevenSeyfu"
                className="hover:underline hover:text-primary-bright-red "
              >
                Feven Seyfu
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
