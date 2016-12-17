import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../actions';
import * as selectors from '../selectors';

import Footer from './footer';
import TitleView from './titleView';
import StarView from './star';

const Home = ({rating, questionRated}) => {

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

  if (rating === undefined) var nextLink = '';
  else{
    if (rating > 3) nextLink = 'feedback';
    else nextLink = 'aspects';
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
      <Footer nextLink={nextLink} />
    </section>
  );
}

const mapStateToProps = (state, props) => {
  return {
    rating: state.rating
  }
};

export default connect(mapStateToProps, actionCreators)(Home);
