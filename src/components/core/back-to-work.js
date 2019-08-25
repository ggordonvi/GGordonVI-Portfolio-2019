import React, { Component } from "react";
import { Link } from "react-router-dom";

// SCSS
import "../../assets/scss/work-page.scss";

class BackToWork extends Component {
  render() {
    return (
        <Link to="/work">
            <button
                className="btn btn-plink"
                type="button"
            >
                <i className="far fa-arrow-alt-circle-left fa-2x"></i>
              Back to Work
            </button>
        </Link>
    );
  }
}

export default BackToWork;