import React from 'react';

var brandList = [
  'Windows',
  'Apple',
];

class Brand extends React.Component {
  componentDidMount() {
    console.log('Brand mounted');
  }
  render() {
    console.log('Brand rendering');
    return (<p>{this.props.type}</p>);
  }
}

class Lifecycle extends React.Component {

  constructor() {
    super();
    this.state = {
      type: ''
    };
  }
  tick() {
    this.setState({
      type: brandList[Math.floor(Math.random() * 2)]
    });
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    return (
      <div>
        <h1>Lifecycle</h1>
        <Brand type={this.state.type} />
      </div>
    );
  }
}

export default Lifecycle;
