import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../actions';
import * as selectors from '../selectors';


import Footer from './footer';
import TitleView from './titleView';

class Feedback extends Component{

  constructor(){
    super();

    this.state = {
      feedback: ''
    }
  }


  componentWillMount() {
    this.props.showFooter();
    this.props.deactivateFooter();
  }

  componentDidMount(){
    let nextLink = '/contact';
    this.props.setNextLink(nextLink);

    this.setState({
      feedback: this.props.feedback
    });
  }

  componentWillReceiveProps(nextProps){
    this.checkFooter(nextProps.feedback);
  }

  onChange(e){
    this.setState({
      feedback: e.target.value
    });
    this.props.giveFeedback(e.target.value);
  }

  checkFooter(feedback){
    if (feedback.length > 0) this.props.activateFooter();
    else this.props.deactivateFooter();
  }

  render(){
    return (
      <section className="survaider-home-main">
        <div className="main-form">
          <TitleView title={this.props.title} />
          <div className="response-view feedback-response">
            <div className="feedback-textarea">
              <textarea onChange={this.onChange.bind(this)} value={this.state.feedback} name="feedback" placeholder="Your thoughts here..."></textarea>
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
    feedback: state.feedback,
    title: state.aspect_question_positive
  }
};

export default connect(mapStateToProps, actionCreators)(Feedback);
