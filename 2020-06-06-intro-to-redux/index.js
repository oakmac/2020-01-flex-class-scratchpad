// -----------------------------------------------------------------------------
// Util

function byId (id) {
  return document.getElementById(id)
}

// make a fresh copy of an object or array
function deepCopy (x) {
  return JSON.parse(JSON.stringify(x))
}

// -----------------------------------------------------------------------------
// Initial Value + Reducer function

const initialState = {
  count: 0,
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
  }

  return nextState
}

const testState1 = {
  count: 12,
  items: ['a', 'b']
}

console.assert(reducer(testState1, {type: 'DECREMENT', amount: 4}).count === 8)
console.assert(
  JSON.stringify(reducer(testState1, {type: 'ADD_ITEM', item: 'c'}).items) === JSON.stringify(['a', 'b', 'c'])
)

// -----------------------------------------------------------------------------
// The Store

// Initialize the Redux store by passing it our reducer function
const theStore = window.Redux.createStore(reducer)

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (ie: updateDOM)
theStore.subscribe(updateDOM)
theStore.subscribe(logCurrentStoreValue)

// -----------------------------------------------------------------------------
// DOM Events + Dispatch

const incrementBtnEl = byId('incrementBtn')
const decrementBtnEl = byId('decrementBtn')
const addFiveBtnEl = byId('addFiveBtn')
const minusFiveBtnEl = byId('minusFiveBtn')
const addListemItemBtnEl = byId('addListItemBtn')
const itemTextInputEl = byId('textInput1')

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

function clickAddListItem () {
  const item = itemTextInputEl.value
  if (item !== '') {
    itemTextInputEl.value = ''
    theStore.dispatch({type: 'ADD_ITEM', item: item})
  }
}

function addEvents () {
  incrementBtnEl.addEventListener('click', clickIncrementBtn)
  decrementBtnEl.addEventListener('click', clickDecrementBtn)
  addFiveBtnEl.addEventListener('click', clickAddFiveBtn)
  minusFiveBtnEl.addEventListener('click', clickMinusFiveBtn)
  addListemItemBtnEl.addEventListener('click', clickAddListItem)
}

// -----------------------------------------------------------------------------
// Rendering

function buildListItemsHTML (items) {
  return items.map(itm => '<li>' + itm + '</li>').join('')
}

function updateDOM () {
  const currentStoreValue = theStore.getState()
  const counterEl = byId('counterValue')
  const itemsListEl = byId('itemsList')

  counterEl.innerHTML = currentStoreValue.count
  itemsListEl.innerHTML = buildListItemsHTML(currentStoreValue.items)

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

  // initialize our store by dispatching a dummy 'INIT' action
  theStore.dispatch({type: 'INIT'})
}

init()
