import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

import MyFirstComponent from './01-MyFirstComponent.js';


class App extends React.Component {

  render() {

    let links = [
      { to: "/myFirstComponent", value: "01 - MyFirstComponent"},
      { to: "/myProps", value: "02 - Properties"},
      { to: "/myState", value: "03 - State"},
      { to: "/composition", value: "04 - Composition"},
      { to: "/events", value: "05 - Events"},
      { to: "/lifecycleMounting", value: "06 - Lifecycle - Mounting"},
      { to: "/lifecycleUpdate", value: "07 - Lifecycle - Update"}
    ];

    return (
      <div>
        {links.map(function(item) {
          return (<li key={item.to}><Link to={item.to}>{item.value}</Link></li>);
        })}

        {this.props.children}
      </div>
    );
  }
}

export default App;
