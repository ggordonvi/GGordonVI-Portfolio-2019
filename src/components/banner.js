import React, { Component } from "react";

// SCSS
import "../assets/scss/banner.scss";

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        {/* <div className="banner-img"></div> */}
        <div className="banner-content container">
          <h1 className="header-pb">Hello! I'm a web developer.</h1>
          <h4 className="text-pb">My name is George Edward Gordon VI but you can call me Eddie.</h4>
          <h4>I consider myself a jack of all trades with anything web dev but my primary focus is in front end UI / UX development.</h4>
        </div>
      </div>
    );
  }
}

export default Banner;
