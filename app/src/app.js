import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Redirect, browserHistory, hashHistory } from 'react-router';
import Container from './Container';
import About from './About';
import Home from './Home';
import Name from './Name';
import Portfolio from './Portfolio';


render(
  <Router history={browserHistory}>
    <Route path="/" component={Container}>
      <IndexRoute component={Home} />
      <Route path="about" component={About}>
        <Route path="name" component={Name} />
        <Route path="redirect0"
               onEnter={(nextState, replace) => replace('/portfolio/0')}
        />
        <Redirect from="redirect1" to="/portfolio/1" />
      </Route>
      <Route path="portfolio(/:id)" component={Portfolio} />
    </Route>
  </Router>
  ,document.getElementById('app')
);