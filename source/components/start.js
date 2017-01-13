import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../actions';
import * as selectors from '../selectors';

import Footer from './footer';
import TitleView from './titleView';
import Feedback from './feedback';
import StarView from './star';

class Start extends Component {


  constructor(){
    super();

    this.state = {
      numberOfStars: 5
    }
  }

  componentWillMount() {
    this.props.removeFooter();
  }

  componentWillReceiveProps(nextProps){
    let {rating, setNextLink, threshold} = nextProps;
    if (rating === 0) var nextLink = '';
    else{
      if (rating > threshold) nextLink = '/feedback';
      else nextLink = '/aspects';
    }

    this.props.router.push(nextLink);
  }

  onStarClick(index){
    this.props.questionRated(index+1);
  };

  render(){
    let starViews = [];
    for (var i = 0; i < this.state.numberOfStars; i++) {
      if (i < this.props.rating) {
        starViews.push(<StarView onClick={this.onStarClick.bind(this)} value={i} key={i} fill={true} />);
      }
      else{
        starViews.push(<StarView onClick={this.onStarClick.bind(this)} value={i} key={i} fill={false} />);
      }
    }


    return (
      <section className="survaider-home-main">
        <div className="main-form">
          <TitleView title="How likely are you to recommend this experience to your friends?" />
          <div className="response-view rating-response">
            <div className="stars-group">
              {starViews}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    rating: state.rating,
    threshold: state.rating_threshold,
    props
  }
};

export default connect(mapStateToProps, actionCreators)(Start);
