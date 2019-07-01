import React, { Component } from 'react';

// SCSS
import '../assets/scss/contact.scss';

class Contact extends Component {
  render() {
    return (
        <div className="contact">
            <div className="container height-100">
            <div className="row height-100">              
                <div className="col-sm-12 col-md-6 mtb-auto">
                    <h2>Let's get in touch!</h2>
                    <h3>I just graduated and am pursuing a career in web development!</h3>
                    <p>Please contact me at ggordonvi@gmail.com</p>
                    
                </div>
            </div>
            </div>
        </div>
    );
  }
}

export default Contact;