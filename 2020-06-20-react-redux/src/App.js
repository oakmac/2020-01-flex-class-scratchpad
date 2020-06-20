import React from 'react';
import { connect } from 'react-redux'
import CounterValue from './CounterValue'
import CounterButtons from './CounterButtons'
import ItemsList from './ItemsList'
import AddItemForm from './AddItemForm'

function App() {
  return (
    <div>
      <CounterValue label="Funny counter value:" />
      <CounterValue label="Red counter value:" />
      <CounterValue label="Blue counter value:" />
      <CounterValue label="Banana counter value:" />
      <hr />
      <CounterButtons />
      <hr />
      <AddItemForm />
      <ItemsList />
    </div>
  );
}

export default App;
