import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// SCSS
import "../../assets/scss/work.scss";
import Footer from "../core/footer";

class Work extends Component {
  render() {
    return (
      <div>
        <div className="container work">
          <div className="card-columns text-white">
            <NavLink
              exact
              activeClassName="active"
              to="/work/seating-app"
              className="nav-text"
            >
              <div className="card h-400 blue-bg shadow h-mobile">
                <div className="card-img img-seating-app" />
                <div className="card-shade">
                  <div className="card-body">
                    <h4 className="card-text">Seating App</h4>
                    <p className="card-text">MEAN Stack Web Application</p>
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
              <div className="card h-500 purple-bg shadow h-mobile">
                <div className="card-img img-jill" />
                <div className="card-shade">
                  <div className="card-body">
                    <h4 className="card-text">Jill Sells the Carolinas</h4>
                    <p className="card-text">Web Application</p>
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
              <div className="card h-450 yellow-bg shadow h-mobile">
                <div className="card-img img-my-portfolio-old" />
                <div className="card-shade">
                  <div className="card-body">
                    <h4 className="card-text">My Portfolio - Old</h4>
                    <p className="card-text">Web Application</p>
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
              <div className="card h-450 green-bg shadow h-mobile">
                <div className="card-img img-my-portfolio" />
                <div className="card-shade">
                  <div className="card-body">
                    <h4 className="card-text">My Portfolio</h4>
                    <p className="card-text">Web Application</p>
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
              <div className="card h-400 coral-bg shadow h-mobile">
                <div className="card-img img-healthy-tid-bits" />
                <div className="card-shade">
                  <div className="card-body">
                    <h4 className="card-text">Healthy Tid Bits</h4>
                    <p className="card-text">
                      Mission Statement / Client Brochure
                    </p>
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              to="/healthy-tid-bits-brochure"
              className="nav-text"
            >
              <div className="card h-500 orange-bg shadow h-mobile">
                <div className="card-img img-healthy-tid-bits-brochure" />
                <div className="card-shade">
                  <div className="card-body">
                    <h4 className="card-text">Healthy Tid Bits</h4>
                    <p className="card-text">Web Application</p>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Work;
