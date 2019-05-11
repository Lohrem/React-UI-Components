import React from 'react';
import './Display.css';
import NumberBtns from '../ButtonComponents/NumberButton'
import ActionBtns from '../ButtonComponents/ActionButton'

const CalcDisplay = () => {
  return (
    <div className="calc-display">
      <input className="total" type="number"></input>
      <div id="buttons">
        <NumberBtns />
        <ActionBtns />
      </div>
    </div>
  )
}

export default CalcDisplay