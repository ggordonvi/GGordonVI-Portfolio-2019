import React, { Component } from "react";

// Component
import BackToWork from "../core/back-to-work";
import Footer from "../core/footer";

// SCSS
import "../../assets/scss/work-page.scss";

class JillSellsTheCarolinas extends Component {
  render() {
    return (
      <div className="works">
        <div className="container">
          <div className="work-header">
            <BackToWork />
            <h2>Jill Sells the Carolinas</h2>
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
                <img
                  src={require("../../assets/images/jillrealtor.png")}
                  className="d-block"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-interval="10000">
                <img
                  src={require("../../assets/images/jillrealtor2.png")}
                  className="d-block"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-interval="10000">
                <img
                  src={require("../../assets/images/jillrealtor3.png")}
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
            <li>Angular 7, Node.js, Bootstrap</li>
            <li>Local property listings pulled from listings API</li>
            <li>
              Contact forms to retrieve potential client information made with
              Nodemailer and AWS-SDK
            </li>
            <li>Contact form validation includes Google reCaptcha</li>
            <li>SEO optimization and Google Analytics</li>
            <li>AWS ElasticBeanstalk and AWS SES hosting</li>
          </ul>
          <div className="project-links">
            <a
              class="btn btn-plink"
              href="https://github.com/sixtheddie/jillsellsthecarolinas"
              role="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
            <a
              class="btn btn-plink"
              href="http://www.jillsellsthecarolinas.com"
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

export default JillSellsTheCarolinas;
