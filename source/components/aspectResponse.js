import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {indexOf} from 'ramda';

import * as actionCreators from '../actions';
import * as selectors from '../selectors';

import TitleView from './titleView';
import OptionView from './optionView';
import Footer from './footer';

const AspectResponse = ({options, positiveTitle, negativeTitle, choosen_aspects, props, choosen_aspect_options, selectAspectOption}) => {

  let optionsViews = options.map((title, index) => {
    if (choosen_aspect_options && indexOf(index, choosen_aspect_options) !== -1) {
      return <OptionView checked={true} onClick={selectAspectOption.bind(this, props.params.aspect, index)} index={index} key={index} title={title} />
    }
    else{
      return <OptionView checked={false} onClick={selectAspectOption.bind(this, props.params.aspect, index)} index={index} key={index} title={title} />
    }
  });

  let indexOfThis = indexOf(props.params.aspect, choosen_aspects);
  let nextLink = '';
  if (indexOfThis+1 === choosen_aspects.length) {
    nextLink = '/feedback';
  }
  else{
    nextLink = `/aspects/${choosen_aspects[indexOfThis+1]}`
  }

  return (
    <section className="survaider-home-main">

      <div className="main-form">

        <TitleView title={positiveTitle} />

        <div className="response-view">
          <div className="sub-question-view">
            <h2>{negativeTitle}</h2>
            { /*<div className="option-hollow">
              <span>{props.params.aspect.split('-').map((s)=>{ return s.charAt(0).toUpperCase() + s.slice(1) }).join(' ')}</span>
            </div> */}
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
    choosen_aspect_options: selectors.getChoosenAspectOptions(state, props.params.aspect),
    positiveTitle: selectors.getChoosenAspectQuestionPositive(state, props.params.aspect),
    negativeTitle: selectors.getChoosenAspectQuestionNegative(state, props.params.aspect),
    props
  }
};

export default connect(mapStateToProps, actionCreators)(AspectResponse);
