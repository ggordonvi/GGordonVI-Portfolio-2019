import React, { Component } from 'react';

// Component
import BackToWork from "../core/back-to-work";
import Footer from '../core/footer';

// SCSS
import '../../assets/scss/work-page.scss';

class HtbBrochure extends Component {
  render() {
    return (
      <div className="works">
        <div className="container">
          <div className="work-header">
            <BackToWork />
            <h2>Healthy Tid Bits</h2>
          </div>
          <h3>Mission Statement / Client Brochure</h3>
        </div>
        <div className="container-fluid showcase">  
          <img src={require("../../assets/images/healthyvending1.png")} className="d-block" alt="..." />
        </div>
        <div className="container">  
          <h3>Core Features</h3>
          <ul className="project-info">
            <p>Company needed rebranding on brochures for potential new clients. Graphics were highly important to Tid Bits. The need to emphasize machine requirements, specifications, and an ability to tailor items to clients' needs -- while still conveying a message of a healthy alternative -- were key.</p>
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HtbBrochure;