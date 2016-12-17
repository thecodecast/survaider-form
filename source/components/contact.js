import React, {Component} from 'react';

import Footer from './footer';

const Contact = () => {

  let nextLink = 'thank-you';

  return (
    <section className="survaider-home-main">

      <div className="main-form">

        <div className="contact-form">
          <div className="form-field">
            <input type="text" name="name" id="name" required="required" />
            <label htmlFor="name">Name:</label>
          </div>
          <div className="form-field">
            <input type="email" name="email" id="email" required="required" />
            <label htmlFor="email">Email:</label>
          </div>
          <div className="form-field">
            <input type="text" name="mobile" id="mobile" required="required" />
            <label htmlFor="mobile">Mobile:</label>
          </div>
        </div>

      </div>
      <Footer nextLink={nextLink} />

    </section>
  );
}

export default Contact;
