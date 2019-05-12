import React, { Component } from 'react';
import './App.css';
import { Display } from './components/DisplayComponents/CalculatorDisplay';
import * as math from 'mathjs'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }
  addToInput = val => {
    this.setState({input: this.state.input + val})
  }

  handleEqual = () => {
    this.setState({ input: math.eval(this.state.input)})
  }
  render() {
    return (
      <div>
        <Display />
      </div>
    );
  }
}

export default App;
