import React, { Component } from 'react';
import './Display.css';
import '../ButtonComponents/Button.css'
import { NumberBtns } from '../ButtonComponents/NumberButton'
import { Input } from '../InputComponent/input'
import * as math from 'mathjs'
// import ActionBtns from '../ButtonComponents/ActionButton'

export class Display extends Component {
  constructor (props) {
    super(props)
    this.state = {
      input: ''
    }
  }
  addToInput = val => {
    this.setState({
      input: this.state.input + val
    })
  }
  handleEqual = () => {
    this.setState({
      input: math.eval(this.state.input)
    })
  }
  render() {
    return (
        <div className="calc-display">
          <Input input={this.input} />
          <div id="buttons">
            <div className="number-btns">
              <button className="clear-btn btn" onClick={() => this.setState({ input: "" })}>Clear</button>
              <div className="number-row">
                <NumberBtns className="btn numbers" handleClick={this.addToInput}>7</NumberBtns>
                <NumberBtns className="btn numbers" handleClick={this.addToInput}>8</NumberBtns>
                <NumberBtns className="btn numbers" handleClick={this.addToInput}>9</NumberBtns>
              </div>
              <div className="number-row">
                <NumberBtns className="btn numbers" handleClick={this.addToInput}>4</NumberBtns>
                <NumberBtns className="btn numbers" handleClick={this.addToInput}>5</NumberBtns>
                <NumberBtns className="btn numbers" handleClick={this.addToInput}>6</NumberBtns>
              </div>
              <div className="number-row">
                <NumberBtns className="btn numbers" handleClick={this.addToInput}>1</NumberBtns>
                <NumberBtns className="btn numbers" handleClick={this.addToInput}>2</NumberBtns>
                <NumberBtns className="btn numbers" handleClick={this.addToInput}>3</NumberBtns>
              </div>
              <NumberBtns id="zero" className="btn numbers" handleClick={this.addToInput}>0</NumberBtns>
          </div>
          <div className="action-btns">
            <button className="actionBtn btn" value="/" name="divide">/</button>
            <button className="actionBtn btn" value="*" name="times">*</button>
            <button className="actionBtn btn" value="-" name="minus">-</button>
            <button className="actionBtn btn" value="+" name="plus">+</button>
            <button className="actionBtn btn" value="=" name="equal" onClick={() => this.handleEqual()}>=</button>
          </div>
          </div>
        </div>
      )
  }
}