import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";

function Header(props) {
  return (
    <div className="stick-navigation">
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 d-flex">
        <Link className="navbar-brand" to="/">
          Neutrogena
        </Link>
        <div className="align-self-end">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse float-right"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav ">
              <Link className="nav-link active" to="/">
                Home
              </Link>
              <Link className="nav-link active" to="/checkout">
                Cart({props.count})
              </Link>
              <Link className="nav-link active" to="/about">
                About Us
              </Link>
              <Link className="nav-link active" to="/contactUs">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
