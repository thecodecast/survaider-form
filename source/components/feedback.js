import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../actions';
import * as selectors from '../selectors';


import Footer from './footer';
import TitleView from './titleView';

const Feedback = ({props, giveFeedback, feedback}) => {

  let nextLink = '/contact';

  let onChange = (e) => {
    giveFeedback(e.target.value);
  }

  return (
    <section className="survaider-home-main">

      <div className="main-form">

        <TitleView title="Thank you! Also, please let me know how we can improve." />

        <div className="response-view feedback-response">
          <div className="feedback-textarea">
            <textarea onChange={onChange} value={feedback} name="feedback" rows="10" cols="80" placeholder="Your thoughts here..."></textarea>
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
    feedback: state.feedback
  }
};

export default connect(mapStateToProps, actionCreators)(Feedback);
