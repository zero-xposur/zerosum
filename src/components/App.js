import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Clever name for beer app</h1>
        <Router />
      </div>
    );
  }
}

export default App;
