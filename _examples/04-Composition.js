import React from 'react';


class Fork extends React.Component {
  render() {
    return (<h1>I am a fork</h1>);
  }
}

class Knife extends React.Component {
  render() {
    return (<h1>I am a knife</h1>);
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
