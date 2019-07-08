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
          <div
            id="seatingAppCarousel"
            className="carousel slide mt-4 mb-4"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-interval="10000">
                <img src={require("../../assets/images/healthyvending.png")} className="d-block" alt="..." />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#seatingAppCarousel"
              role="button"
              data-slide="prev"
            >
              <i className="fas fa-chevron-left fa-2x"></i>
              {/* <span className="carousel-control-prev-icon" aria-hidden="true" /> */}
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#seatingAppCarousel"
              role="button"
              data-slide="next"
            >
              <i className="fas fa-chevron-right fa-2x"></i>
              {/* <span className="carousel-control-next-icon" aria-hidden="true" /> */}
              <span className="sr-only">Next</span>
            </a>
          </div>
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