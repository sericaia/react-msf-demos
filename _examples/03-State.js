import React from 'react';

class State extends React.Component {
  constructor() {
    super();
    this.state = {
      isLampActive: true
    };
  }

  toggleLamp() {
    this.setState({
      isLampActive: !this.state.isLampActive
    });
  }

  render() {
    return (
      <div>
        <h1>State</h1>
        Lamp state is {this.state.isLampActive.toString()}.

        <button onClick={this.toggleLamp.bind(this)}>toggle!</button>
      </div>
    );
  }
}

export default State;
