import React, {Component} from 'react';
import { Router, Route, browserHistory, hashHistory } from 'react-router';

import Header from './header';
import Home from './home';
import ChooseAspects from './chooseAspects';
import AspectResponse from './aspectResponse';
import Feedback from './feedback';
import Contact from './contact';
import End from './end';
import NotFound from './404';

class Container extends Component{
  render(){
    return (
      <div className="survaider-home">
        <Header />
        <Router history={hashHistory}>
          <Route path="/" component={Home} />
          <Route path="/aspects" component={ChooseAspects} />
          <Route path="/aspects/(:aspect)" component={AspectResponse} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/contact" component={Contact} />
          <Route path="/thank-you" component={End} />
          <Route path="*" component={NotFound} />
        </Router>
      </div>
    );
  }
}

export default Container;
