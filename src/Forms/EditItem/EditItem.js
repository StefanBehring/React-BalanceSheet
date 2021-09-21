import { useState } from 'react'
import { useParams } from 'react-router'

import './EditItem.css'

const EditItem = () => {
  // Get item by id from localStorage
  const { itemId } = useParams()

  const item = JSON.parse(localStorage.getItem('balance')).items.find(
    itemFind => itemFind.id === Number.parseInt(itemId)
  )

  const [title, setTitle] = useState(item.title)
  const [description, setDescription] = useState(item.description)
  const [amount, setAmount] = useState(Number.parseFloat(item.amount))

  const changeTitleHandler = event => {
    setTitle(event.target.value)
  }

  const changeDescriptionHandler = event => {
    setDescription(event.target.value)
  }

  const changeAmountHandler = event => {
    setAmount(event.target.value)
  }

  const editItemHandler = () => {
    const editObj = {
      id: itemId,
      side: item.side,
      type: item.type,
      title: title,
      description: description,
      amount: Number.parseFloat(amount).toString(),
    }

    const balance = JSON.parse(localStorage.getItem('balance'))
    const itemIndex = balance.items
      .map(el => el.id)
      .indexOf(Number.parseInt(itemId))
    balance.items[itemIndex] = editObj
    localStorage.setItem('balance', JSON.stringify(balance))
  }

  return (
    <main className="main">
      <section className="item-formular">
        <h2 className="item-formular__title">Edit Item</h2>
        <form
          className="item-formular__form"
          action="/"
          onSubmit={editItemHandler}
        >
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
          <button className="item-formular__button">Edit Item</button>
        </form>
      </section>
    </main>
  )
}

export default EditItem
