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
          <div className="row">
            <div className="col-sm-12 col-lg-6 col-work text-white">
              <NavLink
                exact
                activeClassName="active"
                to="/work/seating-app"
                className="nav-text"
              >
                <div className="card bg-red-orange shadow h-mobile">
                  <div className="card-img img-seating-app" />
                  <div className="card-shade">
                    <div className="card-body">
                      <h4 className="card-text">Seating App</h4>
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
                <div className="card bg-beige shadow h-mobile">
                  <div className="card-img img-jill" />
                  <div className="card-shade">
                    <div className="card-body">
                      <h4 className="card-text">Jill Sells the Carolinas</h4>
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
                <div className="card bg-sky-blue shadow h-mobile">
                  <div className="card-img img-my-portfolio-old" />
                  <div className="card-shade">
                    <div className="card-body">
                      <h4 className="card-text">My Portfolio - Old</h4>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>  
            <div className="col-sm-12 col-lg-6 col-work text-white mtb-auto">
              <NavLink
                exact
                activeClassName="active"
                to="/work/portfolio"
                className="nav-text"
              >
                <div className="card bg-deep shadow h-mobile">
                  <div className="card-img img-my-portfolio" />
                  <div className="card-shade">
                    <div className="card-body">
                      <h4 className="card-text">My Portfolio</h4>
                    </div>
                  </div>
                </div>
              </NavLink>
              <NavLink
                exact
                activeClassName="active"
                to="/work/healthy-tid-bits-brochure"
                className="nav-text"
              >
                <div className="card bg-aqua shadow h-mobile">
                  <div className="card-img img-healthy-tid-bits" />
                  <div className="card-shade">
                    <div className="card-body">
                      <h4 className="card-text">Healthy Tid Bits</h4>
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
