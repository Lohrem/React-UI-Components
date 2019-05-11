import React from 'react';
import './Button.css';

const NumberBtns = () => {
  return (
    <div className="number-btns">
      <button className="clear-btn btn">Clear</button>
      <div className="number-row">
        <button className="btn numbers" value="7">7</button>
        <button className="btn numbers" value="8">8</button>
        <button className="btn numbers" value="9">9</button>
      </div>
      <div className="number-row">
        <button className="btn numbers" value="4">4</button>
        <button className="btn numbers" value="5">5</button>
        <button className="btn numbers" value="6">6</button>
      </div>
      <div className="number-row">
        <button className="btn numbers" value="1">1</button>
        <button className="btn numbers" value="2">2</button>
        <button className="btn numbers" value="3">3</button>
      </div>
      <button id="zero" value="0" className="btn numbers">0</button>
    </div>
  )
}

export default NumberBtns