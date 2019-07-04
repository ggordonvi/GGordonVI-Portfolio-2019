import React, { Component } from "react";
import { Link } from "react-router-dom";

// SCSS
import "../assets/scss/navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="navbar-brand">
          <Link to="/" className="navbar-brand"></Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-chevron-circle-down fa-lg" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <a className="mobile-nav-close" data-toggle="collapse" data-target="#navbarTogglerDemo01">X</a>
            <div className="mobile-nav">
              <li className="nav-item">
                <div className="nav-link" data-toggle="collapse" data-target="#navbarTogglerDemo01">
                  <Link to="about" className="nav-text">ABOUT</Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" data-toggle="collapse" data-target="#navbarTogglerDemo01">
                  <Link to="projects" className="nav-text">WORK</Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" data-toggle="collapse" data-target="#navbarTogglerDemo01">
                  <Link to="contact" className="nav-text">CONTACT</Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" data-toggle="collapse" data-target="#navbarTogglerDemo01">
                  <a className="nav-text" href="https://drive.google.com/file/d/1XQmz_h5gamx_kyRe1S1SzcPHLdaTTbiC/view?usp=sharing" target="_blank" rel="noopener noreferrer">RESUME</a>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
