import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


import * as actionCreators from '../actions';
import * as selectors from '../selectors';

import Footer from './footer';
import TitleView from './titleView';
import Feedback from './feedback';
import StarView from './star';

const Home = (props) => {

  return (
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>

      {React.cloneElement(props.children, {
        key: location.pathname
      })}
    </ReactCSSTransitionGroup>
  );
}

export default Home;
