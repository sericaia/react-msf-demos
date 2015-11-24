import React from 'react';
import ReactDOM, { render } from 'react-dom';

import { Router, Route, Link } from 'react-router';

import App from './App.js';
import MyFirstComponent from './01-MyFirstComponent.js';
import MyProps from './02-Properties.js';
import MyState from './03-State.js';
import Composition from './04-Composition.js';
import Events from './05-Events.js';
import Lifecycle from './06-Lifecycle.js';
import NotFound from './NotFound.js';

let routes = (
  <Router>
    <Route path="/" component={App}>
      <Route path="myFirstComponent" component={MyFirstComponent}/>
      <Route path="myProps" component={MyProps}/>
      <Route path="myState" component={MyState}/>
      <Route path="composition" component={Composition}/>
      <Route path="events" component={Events}/>
      <Route path="lifecycle" component={Lifecycle}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
