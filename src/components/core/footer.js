import React, { Component } from "react";

// SCSS
import "../../assets/scss/footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid footer">
        <p className="f-email">
          <a href="mailto:ggordonvi@gmail.com">ggordonvi@gmail.com</a>
        </p>
        <div className="f-social">
          <a
            className="f-social-link"
            href="https://www.linkedin.com/in/ggordon-vi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <div className="f-social-spacer">/</div>
          <a
            className="f-social-link"
            href="https://github.com/sixtheddie"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <div className="f-social-spacer">/</div>
          <a
            className="f-social-link"
            href="https://www.facebook.com/eddiegordon6th"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <div className="f-social-spacer">/</div>
          <a
            className="f-social-link"
            href="https://twitter.com/GeorgeGordonVI"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
