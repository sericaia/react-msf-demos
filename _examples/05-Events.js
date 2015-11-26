import React from 'react';

class Events extends React.Component {
  constructor() {
    super();
    this.state = {
      color: 'red'
    };
  }

  showColor(ev) {
    this.setState({
      color: ev.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Events</h1>
        {(this.state.color === 'red') ?
          (<h2>I don't like Red</h2>) :
          (<h2>{this.state.color}</h2>)
        }

        <input value={this.state.color} onChange={this.showColor.bind(this)} />
      </div>
    );
  }
}

export default Events;
