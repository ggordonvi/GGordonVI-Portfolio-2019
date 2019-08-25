import React, { Component } from "react";

// Component
import BackToWork from "../core/back-to-work";
import Footer from "../core/footer";

// SCSS
import "../../assets/scss/work-page.scss";

class Portfolio extends Component {
  render() {
    return (
      <div className="works">
        <div className="container">
          <div className="header-text">
            <h2>My Portfolio</h2>
            <h3>React Website</h3>
          </div>
        </div>
        <div className="container-fluid showcase">
          <div
            id="seatingAppCarousel"
            className="carousel slide mt-4 mb-4"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-interval="10000">
                <img
                  src={require("../../assets/images/portfolio1.png")}
                  className="d-block"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-interval="10000">
                <img
                  src={require("../../assets/images/portfolio.png")}
                  className="d-block"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-interval="10000">
                <img
                  src={require("../../assets/images/portfolio2.png")}
                  className="d-block"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-interval="10000">
                <img
                  src={require("../../assets/images/portfolio3.png")}
                  className="d-block"
                  alt="..."
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#seatingAppCarousel"
              role="button"
              data-slide="prev"
            >
              <i className="fas fa-chevron-left fa-2x" />
              {/* <span className="carousel-control-prev-icon" aria-hidden="true" /> */}
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#seatingAppCarousel"
              role="button"
              data-slide="next"
            >
              <i className="fas fa-chevron-right fa-2x" />
              {/* <span className="carousel-control-next-icon" aria-hidden="true" /> */}
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="container project-text">
          <h3 className="mb-4">About Project</h3>
          <p className="mb-4">This was a second take on my portfolio.  Instead of having an SPA feel that was chunky and reduced inital load times, I broke sections up into primary categories to create a muiti page UX focused feel with the help of react-router-dom.  From my research of top portfolios for web designers I learned that it was most important to display work first, this was the biggest change between projects allowing me to be more creative with my work section.  This project has a ton of customization from fonts, buttons, divs, mobile nav, and so much more to make this website as mobile friendly as it is on desktop.</p>
          <h3 className="mb-4">Core Features</h3>
          <ul className="project-info">
            <li>React and Bootstrap</li>
            <li>
              React router dom used for component changes and navigation
            </li>
            <li>SASS built stylesheets</li>
            <li>Full mobile to desktop customization</li>
            <li>AWS S3 bucket hosting</li>
          </ul>
        </div>
        <div className="project-nav">
          <BackToWork></BackToWork>
          <a
            className="btn btn-plink"
            href="https://github.com/sixtheddie/ggordonvi.com-new"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source
          </a>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
