import React from 'react';

class MyPropertiesExample extends React.Component {
  render() {
    return (
      <div>
        <h1>Properties</h1>
      </div>
    );
  }
}

MyPropertiesExample.defaultProps = {
  dish: 'shrimp with pasta'
};

export default MyPropertiesExample;
