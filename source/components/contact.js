import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../actions';
import * as selectors from '../selectors';

import Footer from './footer';

class Contact extends Component{

  constructor(){
    super();

    this.state = {
      name: '',
      email: '',
      mobile: ''
    }
  }

  componentDidMount(){
    let nextLink = '/thank-you';
    this.props.setNextLink(nextLink);

    this.setState({
      name: this.props.contact.name,
      email: this.props.contact.email,
      mobile: this.props.contact.mobile
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.contact.name.length > 0 && nextProps.contact.email.length > 0 && nextProps.contact.mobile.length > 0) {
      this.props.activateFooter();
    }
  }

  onNameChange(e){
    this.setState({
      name: e.target.value
    });
    this.props.onContactNameChange(e.target.value);
    if (e.target.value.length === 0) {
      this.props.deactivateFooter();
    }
  }

  onEmailChange(e){
    this.setState({
      email: e.target.value
    });
    this.props.onContactEmailChange(e.target.value);
    if (e.target.value.length === 0) {
      this.props.deactivateFooter();
    }
  }

  onMobileChange(e){
    this.setState({
      mobile: e.target.value
    });
    this.props.onContactMobileChange(e.target.value);
    if (e.target.value.length === 0) {
      this.props.deactivateFooter();
    }
  }

  render(){
    return (
      <section className="survaider-home-main">
        <div className="main-form">
          <div className="contact-form">
            <div className="form-field">
              <input value={this.state.name} onChange={this.onNameChange.bind(this)} type="text" name="name" id="name" placeholder="Name:" required="required" />
              <label htmlFor="name">Name:</label>
            </div>
            <div className="form-field">
              <input value={this.state.email} onChange={this.onEmailChange.bind(this)} type="email" name="email" id="email" placeholder="Email:" required="required" />
              <label htmlFor="email">Email:</label>
            </div>
            <div className="form-field">
              <input value={this.state.mobile} onChange={this.onMobileChange.bind(this)} type="text" name="mobile" id="mobile" placeholder="Phone:" required="required" />
              <label htmlFor="mobile">Mobile:</label>
            </div>
          </div>
        </div>
      </section>
    );
  }

}


const mapStateToProps = (state, props) => {
  return {
    props,
    contact: state.contact || {name:'', email:'', mobile: ''}
  }
};

export default connect(mapStateToProps, actionCreators)(Contact);
