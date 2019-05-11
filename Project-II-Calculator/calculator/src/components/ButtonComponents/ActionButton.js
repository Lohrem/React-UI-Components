import React from 'react';
import './Button.css';

const ActionBtns = () => {
  return (
    <div className="action-btns">
      <button className="actionBtn btn" value="/" name="divide">/</button>
      <button className="actionBtn btn" value="*" name="times">*</button>
      <button className="actionBtn btn" value="-" name="minus">-</button>
      <button className="actionBtn btn" value="+" name="plus">+</button>
      <button className="actionBtn btn" value="=" name="equal">=</button>
    </div>
  )
}

export default ActionBtns