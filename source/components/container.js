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

  let indexRoute = <IndexRoute component={Start} />
  let startRoute = '';

  if (isParent) {
    indexRoute = <IndexRoute component={SelectUnit} />;
    startRoute = <Route path="/rate" component={Start} />;
  }

  return (
    <div className="survaider-home">
      <Header />
      <Router history={browserHistory}>
        <Route path="/">
          {indexRoute}
          {startRoute}
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
