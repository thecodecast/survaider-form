import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


import * as actionCreators from '../actions';
import * as selectors from '../selectors';

import Footer from './footer';
import TitleView from './titleView';
import Feedback from './feedback';
import StarView from './star';

class Home extends Component{

  constructor(){
    super();
  }

  render(){
    return (
      <div className="survaider-home-main-wrapper">
        {React.cloneElement(this.props.children, {
          key: location.pathname
        })}
      </div>
    );
  }

}

export default Home;
