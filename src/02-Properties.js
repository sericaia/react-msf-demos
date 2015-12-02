import React from 'react';

class MyPropertiesExample extends React.Component {
  render() {
    return (
      <div>
        <h1>Properties</h1>
        My favourite dish is {this.props.dish}.
      </div>
    );
  }
}

MyPropertiesExample.defaultProps = {
  dish: 'shrimp with pasta'
};

MyPropertiesExample.propTypes = {
  dish: React.PropTypes.string.isRequired
};

class MyVodooComponent extends React.Component {
  render() {
    return (
      <MyPropertiesExample dish="chicken"/>
    );
  }
}

export default MyPropertiesExample;
