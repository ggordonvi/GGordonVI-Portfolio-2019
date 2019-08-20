import React, { Component } from "react";

// Component
import BackToWork from "../core/back-to-work";
import Footer from "../core/footer";

// SCSS
import "../../assets/scss/work-page.scss";

class SeatingApp extends Component {
  render() {
    return (
      <div className="works">
        <div className="container-fluid">
          <div className="work-header">
            <BackToWork />
          </div>
          <div className="header-text">
            <h2>Seating App</h2>
            <h3>MEAN Stack Web Application</h3>
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
                  src={require("../../assets/images/seatingapp.png")}
                  className="d-block"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-interval="10000">
                <img
                  src={require("../../assets/images/seatingapp1.png")}
                  className="d-block"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-interval="10000">
                <img
                  src={require("../../assets/images/seatingapp2.png")}
                  className="d-block"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-interval="10000">
                <img
                  src={require("../../assets/images/seatingapp4.png")}
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
        <div className="container">
          <h3>Core Features</h3>
          <ul className="project-info">
            <li>Angular 7, Node.js, Express, Mongoose</li>
            <li>Password hashing and session tokens</li>
            <li>Fluid UI reactions to user selection</li>
            <li>RESTful API and CRUD database operations</li>
            <li>Jasmine and Karma unit testing</li>
            <li>Selenium behavioral testing</li>
            <li>Interactive floorplans built with Fabric.js framework</li>
            <li>AWS Elastic Beanstalk and MongoDB hosting</li>
          </ul>
          <div className="project-links">
            <a
              className="btn btn-plink"
              href="https://github.com/sixtheddie/Seating-App"
              role="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
            <a
              className="btn btn-plink"
              href="http://seating-app.us-east-1.elasticbeanstalk.com/landing"
              role="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SeatingApp;
