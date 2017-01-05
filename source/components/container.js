import React, {Component} from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

import Header from './header';
import Home from './home';
import ChooseAspects from './chooseAspects';
import AspectResponse from './aspectResponse';
import Feedback from './feedback';
import Contact from './contact';
import Start from './start';
import End from './end';
import NotFound from './404';

class Container extends Component{
  
  render(){
    return (
      <div className="survaider-home">
        <Header />
        <Start />
      </div>
    );
  }
}

export default Container;
