import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {indexOf} from 'ramda';

import * as actionCreators from '../actions';
import * as selectors from '../selectors';

import TitleView from './titleView';
import OptionView from './optionView';
import Footer from './footer';

class AspectResponse extends Component{
  constructor(){
    super();
  }

  componentWillReceiveProps(nextProps){
    let indexOfThis = indexOf(this.props.params.aspect, nextProps.choosen_aspects);
    let nextLink = '';
    if (indexOfThis+1 === nextProps.choosen_aspects.length) {
      nextLink = '/feedback';
    }
    else{
      nextLink = `/aspects/${nextProps.choosen_aspects[indexOfThis+1]}`
    }
    nextProps.setNextLink(nextLink);
  }

  render(){

    let optionsViews = this.props.options.map((title, index) => {
      if (this.props.choosen_aspect_options && indexOf(index, this.props.choosen_aspect_options) !== -1) {
        return <OptionView checked={true} onClick={this.props.selectAspectOption.bind(this, this.props.params.aspect, index)} index={index} key={index} title={title} />
      }
      else{
        return <OptionView checked={false} onClick={this.props.selectAspectOption.bind(this, this.props.params.aspect, index)} index={index} key={index} title={title} />
      }
    });


    return (
      <section className="survaider-home-main">
        <div className="main-form">
          <TitleView title={this.props.positiveTitle} />
          <div className="response-view">
            <div className="sub-question-view">
              <h2>{this.props.negativeTitle}</h2>
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
      </section>
    );
  }

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
