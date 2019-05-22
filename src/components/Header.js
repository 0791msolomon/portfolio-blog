import React from "react";
import { Link } from "react-router-dom";
const Header = props => {
  return (
    <nav
      className="navbar  navbar-expand-lg navbar-dark pink scrolling-navbar"
      style={{ backgroundColor: " #79bfd1" }}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item  ">
            <Link
              className="nav-link navbar-brand"
              style={{ fontWeight: "bold", color: "white" }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link navbar-brand"
              style={{ fontWeight: "bold", color: "white" }}
              to="/about"
            >
              About
            </Link>
          </li>
          {/* <li className="nav-item">
            <a
              className="nav-link navbar-brand"
              style={{ fontWeight: "bold", color: "white" }}
              href="#"
            >
              Archives
            </a>
          </li> */}
          <li className="nav-item">
            <a
              className="nav-link navbar-brand"
              style={{ fontWeight: "bold", color: "white" }}
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
        <ul className="navbar-nav nav-flex-icons">
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.facebook.com/mateo.solomon.16"
              target="_blank"
            >
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://github.com/0791msolomon"
              target="_blank"
            >
              <i className="fab fa-github" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.instagram.com/mateo_solomon/?hl=en"
              target="_blank"
            >
              <i className="fab fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
