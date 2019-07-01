import React, { Component } from 'react';

// SCSS
import '../assets/scss/contact.scss';

class Contact extends Component {
  render() {
    return (
        <div className="contact">
            <div className="container-fluid text-center">      
                <h2>Get to know me.</h2>
            </div>
            <div className="container pt-4">
                <h4>Where am I from?  What's my story?</h4>
                <p>I was born and raised in Southern California.  I graduated from the University of South Carolina with a bachelor’s degree in Computer Information Systems and Business Information Management.  I have been extremely fortunate to travel and live on both sides of the country.  I have a love for sports, especially if you mention beach volleyball.</p>
            </div>
            <div className="container pt-4">
                <h4>Why web development?</h4>
                <p>I am immensely passionate about every aspect of web development.  I have always had the “let’s see if I can do it” mentality.  I started publishing content online when I was 14 years old.  From portfolio websites built in simple HTML and CSS, to websites built with server-side logic like PHP. Then moving on to more structured frameworks and libraries like Angular and React, along with using more flexible server-side frameworks like Node.js. The entire process from concept, to design, to functionality and usability, and eventually deployment absolutely intrigues me.  I am a front-end web developer with full stack knowledge.</p>
            </div>
        </div>
    );
  }
}

export default Contact;