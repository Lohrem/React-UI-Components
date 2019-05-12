import React from 'react';
import './Button.css';

const isZero = val => {
  return val === 0
}
export const NumberBtns = props => {
  return (
  <button className="btn numbers" id={`${isZero ? 'zero' : null}`} onClick={() => props.handleClick(props.children)}>{props.children}</button>
  )
}