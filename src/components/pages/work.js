import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// SCSS
import "../../assets/scss/work.scss";

// Component
import Footer from "../core/footer";

class Work extends Component {
  render() {
    return (
      <div>
        <div className="container work">
          <h2 className="intro-text">Click on the pictures below to see my work, or <a href="/about">get to know me</a>.  And when you're ready <a href="/about">contact me</a>!</h2>
          <div className="row">
            <div className="col-sm-12 col-lg-6 col-work text-white">
              <NavLink
                exact
                activeClassName="active"
                to="/work/seating-app"
                className="nav-text"
              >
                <div className="card bg-red-orange shadow">
                  <div className="card-img img-seating-app" />
                  <div className="card-body">
                    <div className="card-text">
                      <h4 className="card-title">Seating App</h4>
                      <h5 className="card-info">MEAN Stack Web Application</h5>
                    </div>
                  </div>
                </div>
              </NavLink>
              <NavLink
                exact
                activeClassName="active"
                to="/work/jill-sells-the-carolinas"
                className="nav-text"
              >
                <div className="card bg-sky-blue shadow">
                  <div className="card-img img-jill" />
                  <div className="card-body">
                    <div className="card-text">
                      <h4 className="card-title">Jill Sells the Carolinas</h4>
                      <h5 className="card-info">Angular &#38; Node Web Application</h5>
                    </div>
                  </div>
                </div>
              </NavLink>
              <NavLink
                exact
                activeClassName="active"
                to="/work/portfolio"
                className="nav-text"
              >
                <div className="card bg-beige shadow">
                  <div className="card-img img-my-portfolio" />
                  <div className="card-body">
                    <div className="card-text">
                      <h4 className="card-title">My Portfolio</h4>
                      <h5 className="card-info">React Website</h5>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>  
            <div className="col-sm-12 col-lg-6 col-work text-white mtb-auto">
            <NavLink
                exact
                activeClassName="active"
                to="/work/graphics"
                className="nav-text"
              >
                <div className="card bg-deep shadow">
                  <div className="card-img img-graphics" />
                  <div className="card-body">
                    <div className="card-text">
                      <h4 className="card-title">Graphics</h4>
                      <h5 className="card-info">UI Designs &#38; Graphic Work</h5>
                    </div>
                  </div>
                </div>
              </NavLink>
              <NavLink
                exact
                activeClassName="active"
                to="/work/portfolio-old"
                className="nav-text"
              >
                <div className="card bg-aqua shadow">
                  <div className="card-img img-my-portfolio-old" />
                  <div className="card-body">
                    <div className="card-text">
                      <h4 className="card-title">My Portfolio - Old</h4>
                      <h5 className="card-info">React Website</h5>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Work;
