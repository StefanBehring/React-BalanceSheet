import { useState } from 'react'
import { Redirect, useParams } from 'react-router'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import BackButton from '../Utility/BackButton/BackButton'
import FormularTitle from '../Utility/FormularTitle/FormularTitle'
import SubmitButton from '../Utility/SubmitButton/SubmitButton'
import { IBalance, IItem } from '../../App/balanceTypes'

interface IEditItemProps {
  balance: IBalance
  onEditSubmit: (item: IItem) => void
}
interface IEditItemParams {
  itemId: string
}

const EditItem = ({ balance, onEditSubmit }: IEditItemProps) => {
  // Get item by id from localStorage
  const { itemId } = useParams<IEditItemParams>()

  const item = balance.items.find(
    itemFind => itemFind.id.toString() === itemId.toString()
  )!

  const [title, setTitle] = useState(item.title)
  const [description, setDescription] = useState(item.description)
  const [amount, setAmount] = useState(Number.parseFloat(item.amount))
  const [submitDone, setSubmitDone] = useState(false)

  const changeTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const changeDescriptionHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value)
  }

  const changeAmountHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number.parseFloat(event.target.value))
  }

  const editItemHandler = () => {
    const editedItem = {
      id: itemId,
      side: item.side,
      type: item.type,
      title: title,
      description: description,
      amount: amount.toString(),
    }
    onEditSubmit(editedItem)
    setSubmitDone(true)
  }

  if (submitDone) {
    return <Redirect to="/" />
  }

  return (
    <Main>
      <ItemFormular>
        <FormularTitle title="Edit Item" />
        <ItemFormularForm onSubmit={editItemHandler}>
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
            rows={4}
            cols={50}
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
            <SubmitButton title="Edit Item" />
            <BackButton />
          </ButtonMenu>
        </ItemFormularForm>
      </ItemFormular>
    </Main>
  )
}

EditItem.propTypes = {
  balance: PropTypes.object.isRequired,
  onEditSubmit: PropTypes.func.isRequired,
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

export default EditItem
