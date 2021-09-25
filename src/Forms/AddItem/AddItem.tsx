import { useState } from 'react'
import { Redirect, useParams } from 'react-router'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import BackButton from '../Utility/BackButton/BackButton'
import FormularTitle from '../Utility/FormularTitle/FormularTitle'
import SubmitButton from '../Utility/SubmitButton/SubmitButton'

const AddItem = ({ onAddSubmit }) => {
  const { side, type } = useParams()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0)
  const [submitDone, setSubmitDone] = useState(false)

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
    const addItem = {
      id: uuidv4(),
      side: side,
      type: type,
      title: title,
      description: description,
      amount: Number.parseFloat(amount).toString(),
    }
    onAddSubmit(addItem)
    setSubmitDone(true)
  }

  if (submitDone) {
    return <Redirect to="/" />
  }

  return (
    <Main>
      <ItemFormular>
        <FormularTitle title={`Add Item - ${side} ${type}`} />
        <ItemFormularForm onSubmit={addItemHandler}>
          <label className="item-formular__label" htmlFor="title">
            Title
          </label>
          <ItemFormularInput
            type="text"
            id="title"
            name="title"
            onChange={changeTitleHandler}
            value={title}
          />
          <label className="item-formular__label" htmlFor="description">
            Description
          </label>
          <ItemFormularTextarea
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
          <ItemFormularInput
            type="number"
            id="amount"
            name="amount"
            onChange={changeAmountHandler}
            step="0.01"
            min="0.01"
            value={amount}
          />
          <ButtonMenu>
            <SubmitButton title="Add Item" />
            <BackButton />
          </ButtonMenu>
        </ItemFormularForm>
      </ItemFormular>
    </Main>
  )
}

AddItem.propTypes = {
  onAddSubmit: PropTypes.func.isRequired,
}

const Main = styled.main`
  background-color: var(--color-light);
  border: 1px solid var(--color-button-border);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  padding: 0.5rem;
  width: 320px;

  @media screen and (min-width: 760px) {
    flex-direction: row;
    width: 720px;
  }
`

const ItemFormular = styled.section`
  background-color: var(--color-secondary);
  border: 1px solid var(--color-button-border);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0.5rem;
  width: 300px;

  @media screen and (min-width: 760px) {
    width: 700px;
  }
`

const ItemFormularForm = styled.form`
  background-color: var(--color-primary);
  border: 1px solid var(--color-button-border);
  border-radius: 20px;
  color: var(--color-light);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0.5rem;
  width: 280px;

  @media screen and (min-width: 760px) {
    width: 680px;
  }
`

const ItemFormularInput = styled.input`
  font-family: var(--font-family);
  margin-bottom: 0.5rem;
`

const ItemFormularTextarea = styled.textarea`
  font-family: var(--font-family);
  margin-bottom: 0.5rem;
`

const ButtonMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export default AddItem
