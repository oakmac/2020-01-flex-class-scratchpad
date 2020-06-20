import React, { useState } from 'react';
import { connect } from 'react-redux'

function AddItemForm (props) {
  const [itemInput, setItemInput] = useState('')

  const onSubmitForm = (evt) => {
    evt.preventDefault()
    props.dispatch({type: 'ADD_ITEM', item: itemInput})
    setItemInput('')
  }

  const changeInputField = (evt) => {
    const newValue = evt.currentTarget.value
    setItemInput(newValue)
  }

  return (
    <form onSubmit={onSubmitForm}>
      <fieldset>
        <legend>Add Item:</legend>
        <input type="text" name="item" onChange={changeInputField} value={itemInput} />
        <button type="submit">Add Item</button>
      </fieldset>
    </form>
  )
}

export default connect()(AddItemForm)
