import React from 'react';

class Events extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      color: 'red'
    };
  }

  changeColor(ev) {
    this.setState({
      color: ev.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Events</h1>

        {
          (this.state.color === 'red') ?
          'I dont like red!' : this.state.color
        }

        <input value={this.state.color} onChange={this.changeColor.bind(this)} />
      </div>
    );
  }
}

export default Events;
