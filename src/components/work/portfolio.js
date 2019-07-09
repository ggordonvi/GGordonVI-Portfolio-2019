import React, { Component } from 'react';

// Component
import BackToWork from "../core/back-to-work";
import Footer from '../core/footer';

// SCSS
import '../../assets/scss/work-page.scss';

class Portfolio extends Component {
  render() {
    return (
      <div className="works">
        <div className="works">
          <div className="container">
            <div className="work-header">
              <BackToWork />
              <h2>My Portfolio</h2>
            </div>
            <h3>Web Application</h3>
          </div>
          <div className="container-fluid showcase">  
            <div
              id="seatingAppCarousel"
              className="carousel slide mt-4 mb-4"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active" data-interval="10000">
                  <img src={require("../../assets/images/portfolio1.png")} className="d-block" alt="..." />
                </div>
                <div className="carousel-item" data-interval="10000">
                  <img src={require("../../assets/images/portfolio.png")} className="d-block" alt="..." />
                </div>
                <div className="carousel-item" data-interval="10000">
                  <img src={require("../../assets/images/portfolio2.png")} className="d-block" alt="..." />
                </div>
                <div className="carousel-item" data-interval="10000">
                  <img src={require("../../assets/images/portfolio3.png")} className="d-block" alt="..." />
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
          </div>
          <div className="container">  
            <h3>Core Features</h3>
            <ul className="project-info">
              <li>React and Bootstrap.</li>
              <li>React router dom used for component changes and navigation.</li>
              <li>SASS built stylesheets.</li>
              <li>Full mobile to desktop customization.</li>
              <li>AWS S3 bucket hosting.</li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Portfolio;