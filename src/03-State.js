import React from 'react';

class State extends React.Component {
  constructor() {
    super();

    this.state = {
      lamp: 'ON'
    };
  }

  toggleLamp() {
    var newLampState = (this.state.lamp === 'ON') ? 'OFF' : 'ON';
    this.setState({
      lamp: newLampState
    });
  }

  render() {
    return (
      <div>
        <h1>State</h1>
        Lamp State: {this.state.lamp}

        <button onClick={this.toggleLamp.bind(this)}>toggleLamp!</button>
      </div>
    );
  }
}

export default State;
