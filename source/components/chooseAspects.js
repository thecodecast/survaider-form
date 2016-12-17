import React, {Component} from 'react';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import {connect} from 'react-redux';
import {indexOf} from 'ramda';

import * as actionCreators from '../actions';
import * as selectors from '../selectors';

import TitleView from './titleView';
import AspectView from './aspectView';
import Footer from './footer';




const ChooseAspects = ({ aspects, choosen_aspects, choseAspect }) => {

  let previous_aspects = choosen_aspects.map((s) => { return s.split('-').map((s)=>{ return s.charAt(0).toUpperCase() + s.slice(1) }).join(' ') });

  let aspectViews = aspects.map((name, index) => {
    if (indexOf(name, previous_aspects) !== -1) {
      return <AspectView checked={true} onClick={choseAspect.bind(this)} name={name} key={index} index={index} />;
    }
    else{
      return <AspectView checked={false} onClick={choseAspect.bind(this)} name={name} key={index} index={index} />;
    }
  });

  let nextLink = '';
  if (choosen_aspects.length > 0) {
    nextLink = `/aspects/${choosen_aspects[0]}`;
  }

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

      <Footer nextLink={nextLink} />

    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    aspects: selectors.getAspects(state),
    choosen_aspects: selectors.getChoosenAspects(state)
  }
};

export default connect(mapStateToProps, actionCreators)(ChooseAspects);
