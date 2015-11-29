import React from 'react';

class Fork extends React.Component {
  render() {
    return (<h1>Fork</h1>);
  }
}

class Knife extends React.Component {
  render() {
    return (<h1>Knife</h1>);
  }
}

class Composition extends React.Component {
  render() {
    return (
      <div>
        <h1>Composition</h1>
        <Knife/>
        <Fork/>
      </div>
  );
  }
}

export default Composition;
