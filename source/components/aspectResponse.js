import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {indexOf} from 'ramda';

import * as actionCreators from '../actions';
import * as selectors from '../selectors';

import TitleView from './titleView';
import OptionView from './optionView';
import Footer from './footer';

const AspectResponse = ({options, choosen_aspects, props}) => {

  let optionsViews = options.map((title, index) => {
    return <OptionView index={index} key={index} title={title} />
  });

  let indexOfThis = indexOf(props.params.aspect, choosen_aspects);
  let nextLink = '';
  if (indexOfThis+1 === choosen_aspects.length) {
    nextLink = 'feedback';
  }
  else{
    nextLink = `aspects/${choosen_aspects[indexOfThis+1]}`
  }

  return (
    <section className="survaider-home-main">

      <div className="main-form">

        <TitleView title="We apologize for not being able to delight you." />

        <div className="response-view">
          <div className="sub-question-view">
            <h2>What did you not like about?</h2>
            <div className="option-hollow">
              <span>{props.params.aspect.split('-').map((s)=>{ return s.charAt(0).toUpperCase() + s.slice(1) }).join(' ')}</span>
            </div>
            <div className="sub-response-view">
              <div className="radio-options-group">
                {optionsViews}
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer nextLink={nextLink} />
    </section>
  );
}

const mapStateToProps = (state, props) => {
  return {
    options: selectors.getAspectOptions(state, props.params.aspect),
    choosen_aspects: selectors.getChoosenAspects(state),
    props
  }
};

export default connect(mapStateToProps, actionCreators)(AspectResponse);
