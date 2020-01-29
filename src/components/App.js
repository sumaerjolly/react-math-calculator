import React, { Component } from 'react'
import Display from './Display';
import ButtonPanel from "./ButtonPanel";

export class App extends Component {
  state = {
    result: '0'
  }
  render() {
    return (
      <div className="app">
        <h1>React Calculator</h1>
        <Display result={this.state.result} />
        <ButtonPanel />
      </div>
    )
  }
}

export default App