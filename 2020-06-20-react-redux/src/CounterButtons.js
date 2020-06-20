import React from 'react';
import { connect } from 'react-redux'

function CounterButtons (props) {
  // if (typeof props.dispatch === 'function') {
  //   alert("props.dispatch is a function!")
  // }

  const clickIncrementOne = () => props.dispatch({type: 'INCREMENT'})
  const clickDecrementOne = () => props.dispatch({type: 'DECREMENT'})
  const clickAddFive = () => props.dispatch({type: 'INCREMENT', amount: 5})
  const clickDecrementFive = () => props.dispatch({type: 'DECREMENT', amount: 5})

  return (
    <div>
      <button onClick={clickIncrementOne}>+1</button>
      <button onClick={clickDecrementOne}>-1</button>
      <button onClick={clickAddFive}>+5</button>
      <button onClick={clickDecrementFive}>-5</button>
    </div>
  )
}

export default connect()(CounterButtons)
