import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

// SCSS
import '../assets/scss/work.scss';

class Work extends Component {
  render() {
    return (
      <div className="work">
        <div className="container">      
          <div className="card-columns text-white">
            <NavLink exact activeClassName="active" to="/work/seating-app" className="nav-text">
              <div className="card h-400 blue-bg shadow h-mobile">
                <div className="card-img img-seating-app"></div>
                <div className="card-shade">
                  <div className="card-body">
                    <h4 className="card-text">Seating App</h4>
                    <p className="card-text">MEAN Stack Web Application</p>
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink exact activeClassName="active" to="/work/jill-sells-the-carolinas" className="nav-text">
              <div className="card h-500 purple-bg shadow h-mobile">
                <div className="card-img img-jill"></div>
                <div className="card-shade">
                  <div className="card-body">
                    <h4 className="card-text">Jill Sells the Carolinas</h4>
                    <p className="card-text">Web Application</p>
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink exact activeClassName="active" to="/work/portfolio-old" className="nav-text">
              <div className="card h-450 yellow-bg shadow h-mobile">
                <div className="card-img img-my-portfolio-old"></div>
                <div className="card-shade">
                  <div className="card-body">
                    <h4 className="card-text">My Portfolio - Old</h4>
                    <p className="card-text">Web Application</p>
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink exact activeClassName="active" to="/work/portfolio" className="nav-text">
              <div className="card h-450 green-bg shadow h-mobile">
                <div className="card-img img-my-portfolio"></div>
                <div className="card-shade">
                  <div className="card-body">
                    <h4 className="card-text">My Portfolio</h4>
                    <p className="card-text">Web Application</p>
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink exact activeClassName="active" to="/work/healthy-tid-bits-brochure" className="nav-text">
              <div className="card h-400 coral-bg shadow h-mobile">
                <div className="card-img img-healthy-tid-bits"></div>
                <div className="card-shade">
                  <div className="card-body">
                    <h4 className="card-text">Healthy Tid Bits</h4>
                    <p className="card-text">Mission Statement / Client Brochure</p>
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink exact activeClassName="active" to="/healthy-tid-bits-brochure" className="nav-text">
              <div className="card h-500 orange-bg shadow h-mobile">
                <div className="card-img img-healthy-tid-bits-brochure"></div>
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
      </div>
    );
  }
}

export default Work;