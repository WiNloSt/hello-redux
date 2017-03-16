import React from 'react'

const Counter = ({
  label,
  counter,
  addCounter
}) => (
  <div className="counter">
    <h1>{label}</h1>
    <h2>{counter}</h2>
    <button onClick={addCounter}>+1</button>
  </div>
)

export default Counter
