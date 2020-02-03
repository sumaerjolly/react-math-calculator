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
    console.log("I am in here")
    const { total, next, operation } = this.state;
    const data = { total, next, operation };

    const newData = calculate(data, buttonName);
    this.setState({
      total: newData.total,
      next: newData.next,
      operation: newData.operation,
    });
  }


    render() {
    const { total, next } = this.state;
    const result = next || total;
    if (result) {
      return (
        <div className="app">
          <Display result={result} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      );
    }
    return (
      <div className="app">
        <Display />
        <ButtonPanel clickHandler={(buttonName) => this.handleClick(buttonName)} />
      </div>
    );
  }
}


export default App;
