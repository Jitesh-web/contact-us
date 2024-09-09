import React from "react";
import "./navigation.css";
import Logo from "/images/logo.png";

const Navigation = () => {
  return (
    <>
      <nav className="container">
        <div className="logoImg">
          <img src={Logo} alt="logo" />
        </div>
        <ul className="navMenu">
          <li href="#">HOME</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
