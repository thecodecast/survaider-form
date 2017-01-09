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

  componentDidMount(){
    let nextLink = '/contact';
    this.props.setNextLink(nextLink);

    this.setState({
      feedback: this.props.feedback
    });
  }

  onChange(e){
    this.setState({
      feedback: e.target.value
    });
    this.props.giveFeedback(e.target.value);
  }

  render(){
    return (
      <section className="survaider-home-main">
        <div className="main-form">
          <TitleView title="Thank you! Also, please let me know how we can improve." />
          <div className="response-view feedback-response">
            <div className="feedback-textarea">
              <textarea onChange={this.onChange.bind(this)} value={this.state.feedback} name="feedback" rows="10" cols="80" placeholder="Your thoughts here..."></textarea>
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
    feedback: state.feedback
  }
};

export default connect(mapStateToProps, actionCreators)(Feedback);
