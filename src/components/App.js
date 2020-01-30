import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { result: '0' };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="app">
        <h1>React Calculator</h1>
        <Display result={result} />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
