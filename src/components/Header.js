import React from "react";

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
            <a
              className="nav-link navbar-brand"
              style={{ fontWeight: "bold", color: "white" }}
              href="#"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link navbar-brand"
              style={{ fontWeight: "bold", color: "white" }}
              href="#"
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link navbar-brand"
              style={{ fontWeight: "bold", color: "white" }}
              href="#"
            >
              Archives
            </a>
          </li>
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
            <a className="nav-link">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <i className="fab fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
