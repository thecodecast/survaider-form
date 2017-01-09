import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../actions';

import TitleView from './titleView';

const End = ({state}) => {

  let generatedOutput = () => {
    let output = {};

    output['rating'] = state.rating;
    output['response_text'] = state.feedback;
    output['respondent'] = state.contact;
    output['disliked_aspects'] = [];

    output['disliked_aspects'] = state.choosen_aspects && state.choosen_aspects.map((aspect) => {
      let newObject = {
        aspect: '',
        selected_options: []
      };

      newObject['aspect'] = aspect.split('-').map((s)=>{ return s.charAt(0).toUpperCase() + s.slice(1) }).join(' ');

      newObject['selected_options'] =  state.choosen_aspects_options && state.choosen_aspects_options[aspect] && state.choosen_aspects_options[aspect].map((optionIndex) => {
        return { [optionIndex+1]: state.aspects_options[aspect][optionIndex] }
      });

      return newObject;
    });

    setTimeout(() => {
      fetch(`http://35.154.105.198/survey/${state.selectedUnit.survey_id}`, {
        method: 'POST',
        body: JSON.stringify(output)
      })
      .then(() => {
        // setTimeout(() => {
        //   window.location = '/';
        // }, 2000);
      })
      .catch((err) => {
        // setTimeout(() => {
        //   window.location = '/';
        // }, 2000);
        // console.log(err);
      })


    }, 10);

  }


  return (
    <section className="end-slide">

      <div className="main-form">

        <div className="question-view">
          <h1>
            Thanks a lot for your feedback.
          </h1>
          <h1>
            Please visit <b>Sterling Holidays</b> again!
          </h1>
        </div>

        <pre>
          {generatedOutput()}
        </pre>

      </div>
    </section>
  );
}


const mapStateToProps = (state, props) => {
  return {
    state
  }
};

export default connect(mapStateToProps, actionCreators)(End);
