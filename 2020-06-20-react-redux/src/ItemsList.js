import React from 'react';
import { connect } from 'react-redux'

function SingleItem (props) {
  const clickDeleteButton = () => {
    props.dispatch({type: 'REMOVE_ITEM', idx: props.idx})
  }

  return (
    <li key={props.idx}>{props.item} <button onClick={clickDeleteButton}>Del</button></li>
  )
}

const ConnectedSingleItem = connect()(SingleItem)

function ItemsList (props) {
  return (
    <ul>{props.items.map((itm, idx) => {
      return <ConnectedSingleItem key={idx} idx={idx} item={itm} />
    })}</ul>
  )
}

function mapStateToProps (currentReduxStoreState, _ownProps) {
  return {
    items: currentReduxStoreState.items
  }
}

const ConnectedItemsList = connect(mapStateToProps)(ItemsList)

export default ConnectedItemsList
