import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col h-screen w-full border-2">
      <div className="bg-primary-bright-red text-white flex justify-evenly">
        <h2>Simplify how your team works today.</h2>
        <button>Get Started</button>
      </div>
      <div className="bg-primary-dark-blue text-white">
        <div>
          <input type="text" placeholder="Updates in your inbox…" />
          <button>Go</button>
        </div>
        <div id="site-map">
          <ul>
            <li>Home</li>
            <li>Pricing</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Community</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div id="social">
          <a href="#">
            <img src="../assets/images/icon-facebook.svg" alt="" />
          </a>
          {/* youtube */}
          <a href="#">
            <img src="../assets/images/icon-youtube.svg" alt="" />
          </a>
          {/* twitter */}
          <a href="#">
            <img src="../assets/images/icon-twitter.svg" alt="" />
          </a>
          {/* pinterest */}
          <a href="#">
            <img src="../assets/images/icon-pinterest.svg" alt="" />
          </a>
          {/* instagram */}
          <a href="#">
            <img src="../assets/images/icon-instagram.svg" alt="" />
          </a>
        </div>
        <div id="logo">
          <img src="../assets/images/logo.svg" alt="Logo" />
        </div>
        <div id="copyright">
          <p>Copyright 2020. All Rights Reserved</p>
          <div class="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="#">Your Name Here</a>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
