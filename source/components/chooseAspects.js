import React, {Component} from 'react';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import {connect} from 'react-redux';
import {indexOf} from 'ramda';

import * as actionCreators from '../actions';
import * as selectors from '../selectors';

import TitleView from './titleView';
import AspectView from './aspectView';
import Footer from './footer';

class ChooseAspects extends Component{

  constructor(){
    super();
  }

  componentWillReceiveProps(nextProps){
    let nextLink = '';
    if (nextProps.choosen_aspects.length > 0) {
      nextLink = `/aspects/${nextProps.choosen_aspects[0]}`;
    }
    nextProps.setNextLink(nextLink);
  }

  render(){

    let previous_aspects = this.props.choosen_aspects.map((s) => { return s.split('-').map((s)=>{ return s.charAt(0).toUpperCase() + s.slice(1) }).join(' ') });
    let aspectViews = this.props.aspects.map((name, index) => {
      if (indexOf(name, previous_aspects) !== -1) {
        return <AspectView checked={true} onClick={this.props.choseAspect.bind(this)} name={name} key={index} index={index} />;
      }
      else{
        return <AspectView checked={false} onClick={this.props.choseAspect.bind(this)} name={name} key={index} index={index} />;
      }
    });

    return (
      <section className="survaider-home-main">
        <div className="main-form">
          <TitleView title="I am so sorry to hear that what went wrong?" />
          <div className="response-view options-response">
            <div className="options-group">
              {aspectViews}
            </div>
          </div>
        </div>
      </section>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    aspects: selectors.getAspects(state),
    choosen_aspects: selectors.getChoosenAspects(state)
  }
};

export default connect(mapStateToProps, actionCreators)(ChooseAspects);
