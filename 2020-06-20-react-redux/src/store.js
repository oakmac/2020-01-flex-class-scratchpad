import { createStore } from 'redux'

function toString (s) {
  return s + ''
}

// make a fresh copy of an object or array
function deepCopy (x) {
  return JSON.parse(JSON.stringify(x))
}

const initialState = {
  count: 21,
  items: ['Apple', 'Banana', 'Cherry']
}

const reducer = (currentState, action) => {
  // set the state to initialState if this is our first run
  if (!currentState) currentState = initialState

  let nextState = deepCopy(currentState)

  const type = action.type
  // sanity-check that the action.type is a string
  if (action && typeof type !== 'string') {
    console.error('[Developer Error] action.type is not a string:', action)
  }

  if (type === 'INCREMENT') {
    if (typeof action.amount !== 'number') action.amount = 1
    nextState.count = nextState.count + action.amount
  } else if (type === 'DECREMENT') {
    if (typeof action.amount !== 'number') action.amount = 1
    nextState.count = nextState.count - action.amount
  } else if (type === 'ADD_ITEM') {
    nextState.items.push(action.item)
  } else if (type === 'REMOVE_ITEM') {
    const newItems = []
    nextState.items.forEach((itm, idx) => {
      if (toString(idx) !== toString(action.idx)) newItems.push(itm)
    })
    nextState.items = newItems
  }

  return nextState
}

const theStore = createStore(reducer)

// theStore.subscribe(logCurrentStoreValue)

function logCurrentStoreValue () {
  const currentValue = theStore.getState()

  console.log('The store value changed:')
  console.log(currentValue)
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
}

// -----------------------------------------------------------------------------
// Public API

export default theStore
