import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col h-screen w-full">
      <div className="bg-primary-bright-red text-white flex flex-col items-center justify-center p-12 text-center gap-4 ">
        <h2 className="text-3xl font-medium tracking-wider">
          Simplify how your team works today.
        </h2>
        <button className="bg-neutral-pale-red hover:bg-neutral-pale-red text-primary-bright-red  py-2 px-4 w-32 rounded-full shadow-md shadow-neutral-pale-red font-medium">
          Get Started
        </button>
      </div>
      <div className="bg-primary-dark-blue text-white flex flex-col gap-8 items-center px-2 py-6">
        <div>
          <input
            type="text"
            placeholder="Updates in your inbox…"
            className="p-2 rounded-full mr-2 pr-12"
          />
          <button className="bg-primary-bright-red text-white rounded-full px-6 py-2">
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
        <div id="social" >
          <ul className="flex flex-row items-center gap-8">
            <li>
              <a href="#">
                <img
                  src="src/assets/images/icon-facebook.svg"
                  alt="youtube icon"
                  className="h-8"
                />
              </a>
            </li>
            <li>
              {/* youtube */}
              <a href="#">
                <img src="src/assets/images/icon-youtube.svg" alt="social icon" className="h-8" />
              </a>
            </li>
            <li>
              {/* twitter */}
              <a href="#">
                <img src="src/assets/images/icon-twitter.svg" alt="social icon" className="h-8" />
              </a>
            </li>
            <li>
              {/* pinterest */}
              <a href="#">
                <img src="src/assets/images/icon-pinterest.svg" alt="social icon" className="h-8" />
              </a>
            </li>
            <li>
              {/* instagram */}
              <a href="#">
                <img src="src/assets/images/icon-instagram.svg" alt="social icon" className="h-8" />
              </a>
            </li>
          </ul>
        </div>
        <div id="logo" >
          <img src="src/assets/images/logo-white.svg" alt="Logo" />
        </div>
        <div id="copyright" className="flex flex-col items-center text-sm text-primary-grayish-blue">
          <p>Copyright 2020. All Rights Reserved</p>
          <div class="attribution px-12 text-center">
            Challenge by 
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              className="hover:underline hover:text-primary-bright-red "
            >
              Frontend Mentor
            </a>
            . Coded by <a href="https://www.frontendmentor.io/profile/FevenSeyfu" className="hover:underline hover:text-primary-bright-red "> Feven Seyfu</a>.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
