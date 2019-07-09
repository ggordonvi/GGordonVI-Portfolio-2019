import React, { Component } from "react";

// Footer
import Footer from "../core/footer";

// SCSS
import "../../assets/scss/about.scss";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about-content container">
          <h2>Hello! I'm a web developer primarily focused on UI / UX development.</h2>
          <div className="row">
            <div className="col-sm-12 col-lg-12">
              <h3 className="pt-4 pb-2">My story.</h3>
              <p>
                My name is George Gordon VI but to make easier just call me Eddie.  I was born and raised in Southern California. I graduated from the
                University of South Carolina with a bachelor’s degree in Computer
                Information Systems and Business Information Management. I have been
                extremely fortunate to travel and live on both sides of the country.
                I have a love for sports, especially if you mention beach
                volleyball.
              </p>
            </div>
            <div className="col-sm-12 col-lg-12">
              <h3 className="pt-4 pb-2">My passion.</h3>
              <p>
                I am immensely passionate about every aspect of web development. I
                have always had the “let’s see if I can do it” mentality. I started
                publishing content online when I was 14 years old. From portfolio
                websites built in simple HTML and CSS, to websites built with
                server-side logic like PHP. Then moving on to more structured
                frameworks and libraries like Angular and React, along with using
                more flexible server-side frameworks like Node.js. The entire
                process from concept, to design, to functionality and usability, and
                eventually deployment absolutely intrigues me. I am a front-end web
                developer with full stack knowledge.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
