import React, { Component } from "react";

// SCSS
import "../../assets/scss/contact.scss";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-content container">
          <h2 className="pb-3">Let's chat.</h2>
          <h3 className="pb-3">Contract work, careers, and collaboration.</h3>
          <p>
            Contact me at{" "}
            <a href="mailto:ggordonvi@gmail.com">ggordonvi@gmail.com</a>
          </p>
          <div className="social">
            <a
              className="social-link"
              href="https://www.linkedin.com/in/ggordon-vi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <div className="social-spacer">/</div>
            <a
              className="social-link"
              href="https://github.com/sixtheddie"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <div className="social-spacer">/</div>
            <a
              className="social-link"
              href="https://www.facebook.com/eddiegordon6th"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <div className="social-spacer">/</div>
            <a
              className="social-link"
              href="https://twitter.com/GeorgeGordonVI"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
