import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


import * as actionCreators from '../actions';
import * as selectors from '../selectors';

import Footer from './footer';
import TitleView from './titleView';
import Feedback from './feedback';
import StarView from './star';

const Home = ({rating, questionRated, props}) => {

  let numberOfStars = 5;
  let starViews = [];
  let onStarClick = (index) => {
    questionRated(index+1);
  };

  for (var i = 0; i < numberOfStars; i++) {
    if (i < rating) {
      starViews.push(<StarView onClick={onStarClick.bind(this)} value={i} key={i} fill={true} />);
    }
    else{
      starViews.push(<StarView onClick={onStarClick.bind(this)} value={i} key={i} fill={false} />);
    }
  }

  if (rating === 0) var nextLink = '';
  else{
    if (rating > 3) nextLink = '/feedback';
    else nextLink = '/aspects';
  }

  if (rating > 0) {

  }

  return (

    // <ReactCSSTransitionGroup
    //   transitionName="example"
    //   transitionEnterTimeout={500}
    //   transitionLeaveTimeout={500}>
    //
    //   {React.cloneElement(props.children, {
    //     key: location.pathname
    //   })}
    // </ReactCSSTransitionGroup>

    rating > 0 && props.children || <section className="survaider-home-main">
      <div className="main-form">
        <TitleView title="How likely are you to recommend this experience to your friends?" />
        <div className="response-view rating-response">
          <div className="stars-group">
            {starViews}
          </div>
        </div>
      </div>
      <Footer nextLink={nextLink} />
    </section>
  );
}

const mapStateToProps = (state, props) => {
  return {
    rating: state.rating,
    props
  }
};

export default connect(mapStateToProps, actionCreators)(Home);
