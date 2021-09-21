import { useState } from 'react'
import { useParams } from 'react-router'
import { v4 as uuidv4 } from 'uuid'

import './AddItem.css'

const AddItem = () => {
  const { side, type } = useParams()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0)

  const changeTitleHandler = event => {
    setTitle(event.target.value)
  }

  const changeDescriptionHandler = event => {
    setDescription(event.target.value)
  }

  const changeAmountHandler = event => {
    setAmount(event.target.value)
  }

  const addItemHandler = () => {
    const addObj = {
      id: uuidv4(),
      side: side,
      type: type,
      title: title,
      description: description,
      amount: Number.parseFloat(amount).toString(),
    }
    const balance = JSON.parse(localStorage.getItem('balance'))
    balance.items.push(addObj)
    localStorage.setItem('balance', JSON.stringify(balance))
  }

  return (
    <main className="main">
      <section className="item-formular">
        <h2 className="item-formular__title">Add Item</h2>
        <form className="item-formular__form" onSubmit={addItemHandler}>
          <label className="item-formular__label" htmlFor="title">
            Title
          </label>
          <input
            className="item-formular__input"
            type="text"
            id="title"
            name="title"
            onChange={changeTitleHandler}
            value={title}
          />
          <label className="item-formular__label" htmlFor="description">
            Description
          </label>
          <textarea
            className="item-formular__input"
            id="description"
            name="description"
            onChange={changeDescriptionHandler}
            rows="4"
            cols="50"
            value={description}
          />
          <label className="item-formular__label" htmlFor="amount">
            Amount
          </label>
          <input
            className="item-formular__input"
            type="number"
            id="amount"
            name="amount"
            onChange={changeAmountHandler}
            step="0.01"
            min="0.01"
            value={amount}
          />
          <button className="item-formular__button">Add Item</button>
        </form>
      </section>
    </main>
  )
}

export default AddItem
