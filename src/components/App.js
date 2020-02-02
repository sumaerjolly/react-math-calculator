import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { total: null, next: null, operation: null };
  }

  handleClick = (buttonName) => {
    const changeState = calculate(this.state, buttonName);
    this.setState({...changeState});
  }

  render() {
    const { total,next } = this.state;
    return (
      <div className="app">
        <h1>React Calculator</h1>
        <Display result={total || next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
