import React from 'react';
import { connect } from 'react-redux'

function CounterValue (props) {
  return (
    <h1>{props.label} {props.count}</h1>
  )
}

function mapStateToProps (currentReduxStoreState, ownProps) {
  return {
    count: currentReduxStoreState.count,
    label: ownProps.label
  }
}

const ConnectedCounterValue = connect(mapStateToProps)(CounterValue)

export default ConnectedCounterValue
