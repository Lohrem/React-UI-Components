import React from 'react';
import './Button.css';

export const ActionBtns = props => {
  return (
    <button className="actionBtn btn" onClick={() => props.handleClick(props.children)}>{props.children}</button>
  )
}