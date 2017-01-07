import React, {Component} from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

import Header from './header';
import Home from './home';
import ChooseAspects from './chooseAspects';
import AspectResponse from './aspectResponse';
import Feedback from './feedback';
import Contact from './contact';
import Start from './start';
import SelectUnit from './selectUnit';
import End from './end';
import NotFound from './404';

const Container = ({isParent}) => {
  return (
    <div className="survaider-home">
      <Header />
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
          <IndexRoute component={Start} />
          { isParent ? <Route path="/select-unit" component={SelectUnit} /> : '' }
          <Route path="/aspects" component={ChooseAspects} />
          <Route path="/aspects/(:aspect)" component={AspectResponse} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/contact" component={Contact} />
          <Route path="/thank-you" component={End} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    </div>
  );
}

export default Container;
