import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../actions';

import TitleView from './titleView';

class End extends Component {

  constructor() {
    super();
  }

  componentWillMount() {
    this.props.removeFooter();
  }

  generatedOutput() {
    let output = {};

    output['rating'] = this.props.state.rating;
    output['response_text'] = this.props.state.feedback;
    output['respondent'] = this.props.state.contact;
    output['disliked_aspects'] = [];

    output['disliked_aspects'] = this.props.state.choosen_aspects && this.props.state.choosen_aspects.map((aspect) => {
      let newObject = {
        aspect: '',
        selected_options: {}
      };

      newObject['aspect'] = aspect.split('-').map((s)=>{ return s.charAt(0).toUpperCase() + s.slice(1) }).join(' ');

      this.props.state.choosen_aspects_options && this.props.state.choosen_aspects_options[aspect] && this.props.state.choosen_aspects_options[aspect].forEach((optionIndex) => {
        newObject.selected_options[optionIndex+1] = this.props.state.aspects_options[aspect][optionIndex];
      });

      return newObject;
    });

    setTimeout(() => {
      fetch(`http://35.154.105.198/survey/${this.props.state.selectedUnit.survey_id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(output)
      })
      .then(() => {
        setTimeout(() => {
          window.location = '/';
        }, 5000);
      })
      .catch((err) => {
        setTimeout(() => {
          window.location = '/';
        }, 5000);
        console.log(output);
        console.log(err);
      })


    }, 10);

  }

  render() {
    return (
      <section className="end-slide">
        <div className="main-form">
          <div className="question-view">
            <h1>
              Thanks a lot for your feedback.
            </h1>
            <h1>
              Please visit <b>{this.props.unit_name}</b> again!
            </h1>
          </div>
          <pre>
            {this.generatedOutput()}
          </pre>
        </div>
      </section>
    );
  }
}


const mapStateToProps = (state, props) => {
  return {
    state,
    unit_name: state.selectedUnit.unit_name
  }
};

export default connect(mapStateToProps, actionCreators)(End);
