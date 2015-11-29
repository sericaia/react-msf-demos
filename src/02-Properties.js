import React from 'react';


class MyDish extends React.Component {
  render() {
    return (
      <h2>{this.props.food}</h2>
    );
  }
}

MyDish.propTypes = {
  food: React.PropTypes.string.isRequired
};

MyDish.defaultProps = {

};

class MyPropertiesExample extends React.Component {
  render() {
    return (
      <div>
        <h1>Properties</h1>
        <MyDish  />
      </div>
    );
  }
}

MyPropertiesExample.defaultProps = {
  dish: 'shrimp with pasta'
};

export default MyPropertiesExample;
