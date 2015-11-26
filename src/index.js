import React from 'react';
import ReactDOM, { render } from 'react-dom';

import { Router, Route, Link } from 'react-router';

import App from './App.js';
import MyFirstComponent from './01-MyFirstComponent.js';
import MyProps from './02-Properties.js';
import MyState from './03-State.js';
import Composition from './04-Composition.js';
import Events from './05-Events.js';
import LifecycleMounting from './06-LifecycleMounting.js';
import LifecycleUpdate from './07-LifecycleUpdate.js';
import LifecycleUnmounting from './08-LifecycleUnmounting.js';
import NotFound from './NotFound.js';

let routes = (
  <Router>
    <Route path="/" component={App}>
      <Route path="myFirstComponent" component={MyFirstComponent}/>
      <Route path="myProps" component={MyProps}/>
      <Route path="myState" component={MyState}/>
      <Route path="composition" component={Composition}/>
      <Route path="events" component={Events}/>
      <Route path="lifecycleMounting" component={LifecycleMounting}/>
      <Route path="lifecycleUpdate" component={LifecycleUpdate}/>
      <Route path="lifecycleUnmounting" component={LifecycleUnmounting}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
