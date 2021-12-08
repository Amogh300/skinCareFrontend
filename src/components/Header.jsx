import React from "react";
import { Link } from "react-router-dom";
import logo from "./styles/images/logo.png";

import "./styles/Header.css";

function Header(props) {
  return (
    <div>
      <div className="logo">
        <Link to="/">
          <img
            className="logo"
            // className="header__logo"
            style={{ height: "56px" }}
            src={logo}
            alt="logo"
          />
        </Link>
      </div>
      <div className="nav-wrapper">
        <div className="nav">
          <ul className="nav-menu menu-main">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/checkout">Cart({props.count})</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contactUs">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
