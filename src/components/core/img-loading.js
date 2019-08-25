import React, { Component } from "react";

// SCSS
import "../../assets/scss/work-page.scss";

class ImgLoading extends Component {
  render() {
    return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
    );
  }
}

export default ImgLoading;