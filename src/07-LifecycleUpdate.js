import React from 'react';

class LifecycleUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLampActive: true
    };
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return false;//
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');

  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  toggleLamp() {
    this.setState({
      isLampActive: !this.state.isLampActive
    });
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1>Lifecycle - Update</h1>
        <p>Color: {this.props.lampColor}</p>
        <p>Active? {this.state.isLampActive.toString()}</p>
        <button onClick={this.toggleLamp.bind(this)}>Toggle</button>
      </div>
    );
  }
}

LifecycleUpdate.defaultProps = {
  lampColor: 'green'
};

export default LifecycleUpdate;
