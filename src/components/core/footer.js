import React, { Component } from "react";

// SCSS
import "../../assets/scss/footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid footer">
        <div className="f-social">
          <a href="mailto:ggordonvi@gmail.com"><i className="fas fa-envelope-square fa-2x"></i></a>
          <div className="f-social-spacer" />
          <a
            className="f-social-link"
            href="https://www.linkedin.com/in/ggordon-vi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <div className="f-social-spacer" />
          <a
            className="f-social-link"
            href="https://github.com/sixtheddie"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github-square fa-2x"></i>
          </a>
          <div className="f-social-spacer" />
          <a
            className="f-social-link"
            href="https://www.facebook.com/eddiegordon6th"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-square fa-2x"></i>
          </a>
          <div className="f-social-spacer" />
          <a
            className="f-social-link"
            href="https://twitter.com/GeorgeGordonVI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter-square fa-2x"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
