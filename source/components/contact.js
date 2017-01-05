import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../actions';
import * as selectors from '../selectors';

import Footer from './footer';

const Contact = ({contact = {}, props, onContactNameChange, onContactEmailChange, onContactMobileChange}) => {

  let nextLink = '/thank-you';

  let onNameChange = (e) => {
    onContactNameChange(e.target.value);
  }

  let onEmailChange = (e) => {
    onContactEmailChange(e.target.value);
  }

  let onMobileChange = (e) => {
    onContactMobileChange(e.target.value);
  }

  return (
    <section className="survaider-home-main">

      <div className="main-form">

        <div className="contact-form">
          <div className="form-field">
            <input value={contact.name} onChange={onNameChange} type="text" name="name" id="name" placeholder="Name:" required="required" />
            <label htmlFor="name">Name:</label>
          </div>
          <div className="form-field">
            <input value={contact.email} onChange={onEmailChange} type="email" name="email" id="email" placeholder="Email:" required="required" />
            <label htmlFor="email">Email:</label>
          </div>
          <div className="form-field">
            <input value={contact.mobile} onChange={onMobileChange} type="text" name="mobile" id="mobile" placeholder="Phone:" required="required" />
            <label htmlFor="mobile">Mobile:</label>
          </div>
        </div>


      </div>
      <Footer nextLink={nextLink} />

    </section>
  );
}


const mapStateToProps = (state, props) => {
  return {
    props,
    contact: state.contact
  }
};

export default connect(mapStateToProps, actionCreators)(Contact);
