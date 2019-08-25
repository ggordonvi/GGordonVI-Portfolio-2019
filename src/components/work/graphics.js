import React, { Component } from 'react';

// Component
import BackToWork from "../core/back-to-work";
import ImgLoading from '../core/img-loading';
import Footer from '../core/footer';

// SCSS
import '../../assets/scss/work-page.scss';

class Graphics extends Component {
  render() {
    return (
      <div className="works">
        <div className="container">
          <div className="header-text">
            <h2>Graphics</h2>
            <h3>UI Designs &#38; Graphic Work</h3>
          </div>
        </div>
        <div className="container graphics">
          <img src={require("../../assets/images/dailyui-001.png")} className="graphics-img" alt="..." />
          <img src={require("../../assets/images/healthyvending1.png")} className="graphics-img" alt="..." />
          <img src={require("../../assets/images/dailyui-002-1.png")} className="graphics-img" alt="..." />
          <img src={require("../../assets/images/togo-menu-v3.png")} className="graphics-img" alt="..." />
        </div>
        <div className="project-nav">
          <BackToWork></BackToWork>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Graphics;