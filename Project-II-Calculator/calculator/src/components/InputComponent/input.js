import React from 'react'
import './input.css'

export const Input = props => {
  return (
    <input className="total" type="number">{props.input}</input>
  )
}