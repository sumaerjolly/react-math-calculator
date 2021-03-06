import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { total: null, next: null, operation: null };
  }

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  }

  render() {
    // test
    const { total, next } = this.state;
    const result = next || total;
    if (result) {
      return (
        <div className="app">
          <h1>React Calculator</h1>
          <Display result={result} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      );
    }
    return (
      <div className="app">
        <h1>React Calculator</h1>
        <Display />
        <ButtonPanel
          clickHandler={buttonName => this.handleClick(buttonName)}
        />
      </div>
    );
  }
}

export default App;
