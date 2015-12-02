import React from 'react';

class State extends React.Component {
  constructor() {
    super();
    this.state = {
      lamp: 'ON'
    };
  }

  toggleLamp() {
    var lampState = (this.state.lamp === 'ON') ? 'OFF' : 'ON';

    this.setState({
      lamp: lampState
    });
  }

  render() {
    return (
      <div>
        <h1>State</h1>
        Lamp state is {this.state.lamp.toString()}.

        <button onClick={this.toggleLamp.bind(this)}>toggle!</button>
      </div>
    );
  }
}

export default State;
