import React, { Component } from "react";

// SCSS
import "../assets/scss/banner.scss";

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="banner-content container-fluid text-center">
          <h1>Hello! I'm a web developer.</h1>
          <p>
            Focused on Front End UI / UX Development with Full Stack Knowledge.
          </p>
          <button type="button" className="btn btn-outline-primary">
            Get to know me.
          </button>
        </div>
      </div>
    );
  }
}

export default Banner;
