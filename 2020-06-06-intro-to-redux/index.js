// -----------------------------------------------------------------------------
// Util

function byId (id) {
  return document.getElementById(id)
}

// -----------------------------------------------------------------------------
// Initial Value + Reducer function

const initialState = {
  count: 0
}

const reducer = (state, action) => {
  // set the state to initialState if this is our first run
  if (!state) state = initialState

  const type = action.type
  // sanity-check that the action.type is a string
  if (action && typeof type !== 'string') {
    console.error('Developer error! action did not have a string .type:', action)
  }

  if (type === 'INCREMENT') {
    if (typeof action.amount !== 'number') action.amount = 1
    state.count = state.count + action.amount
  } else if (type === 'DECREMENT') {
    if (typeof action.amount !== 'number') action.amount = 1
    state.count = state.count - action.amount
  }

  return state
}

const testState1 = {
  count: 12
}

console.assert(reducer(testState1, {type: 'DECREMENT', amount: 4}).count === 8)

// -----------------------------------------------------------------------------
// The Store

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const theStore = window.Redux.createStore(reducer)

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
theStore.subscribe(updateDOM)
// theStore.subscribe(logCurrentStoreValue)

// -----------------------------------------------------------------------------
// DOM Events + Dispatch

const incrementBtnEl = byId('incrementBtn')
const decrementBtnEl = byId('decrementBtn')
const addFiveBtnEl = byId('addFiveBtn')
const minusFiveBtnEl = byId('minusFiveBtn')

function clickIncrementBtn () {
  theStore.dispatch({type: 'INCREMENT'})
}

function clickDecrementBtn () {
  theStore.dispatch({type: 'DECREMENT'})
}

function clickAddFiveBtn () {
  theStore.dispatch({type: 'INCREMENT', amount: 5})
}

function clickMinusFiveBtn () {
  theStore.dispatch({type: 'DECREMENT', amount: 5})
}

function addEvents () {
  incrementBtnEl.addEventListener('click', clickIncrementBtn)
  decrementBtnEl.addEventListener('click', clickDecrementBtn)
  addFiveBtnEl.addEventListener('click', clickAddFiveBtn)
  minusFiveBtnEl.addEventListener('click', clickMinusFiveBtn)
}

// -----------------------------------------------------------------------------
// Rendering

function updateDOM () {
  const currentStoreValue = theStore.getState()
  const counterDOM = document.getElementById('counterValue')
  counterDOM.innerHTML = currentStoreValue.count

  // this could become complex...
  // hint: this is where we will add React.js ...
}

function logCurrentStoreValue () {
  const currentValue = theStore.getState()

  console.log('The store value changed:')
  console.log(currentValue)
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
}

// -----------------------------------------------------------------------------
// Initialization

// global page initialization
function init () {
  addEvents()
}

init()
