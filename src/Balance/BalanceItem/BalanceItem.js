import { useState } from 'react'
import styled from 'styled-components'

const BalanceItem = ({ onChangePage, onDeleteItem, itemId }) => {
  // Get item by id from localStorage
  const item = JSON.parse(localStorage.getItem('balance')).items.find(
    itemFind => itemFind.id === itemId
  )

  const [showMenu, setShowMenu] = useState(false)

  const showMenuButtonClickHandler = () => {
    setShowMenu(!showMenu)
  }

  const editItemClickHandler = () => {
    onChangePage('edit', item.side, item.type, itemId)
  }

  const deleteItemClickHandler = () => {
    onDeleteItem(itemId)
  }

  const BalanceItemDiv = styled.div`
    background-color: var(--color-light);
    border: 1px solid var(--color-button-border);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    margin: 0.5rem auto;
    width: 260px;

    @media screen and (min-width: 760px) {
      width: 280px;
    }
  `

  const BalanceItemHeader = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
  `

  const BalanceItemShowMenu = styled.button`
    background-color: var(--color-button-blue);
    border: 1px solid var(--color-button-border);
    color: var(--color-light);
    font-family: var(--font-family);
    padding: 0.3rem 0.5rem;
    width: fit-content;
    transition: all 0.3s ease-in;

    &:hover {
      background-color: var(--color-button-blue-hover);
    }
  `

  const BalanceItemDesc = styled.p`
    text-align: left;
  `

  const BalanceItemValue = styled.p`
    text-align: right;
  `

  const BalanceItemMenu = styled.div`
    display: flex;
    justify-content: space-evenly;
  `

  const BalanceItemEdit = styled.button`
    background-color: var(--color-button-grey);
    border: 1px solid var(--color-button-border);
    border-radius: 20px;
    color: var(--color-light);
    font-family: var(--font-family);
    padding: 0.6rem 0.8rem;
    transition: all 0.3s ease-in;

    &:hover {
      background-color: var(--color-button-grey-hover);
    }
  `

  const BalanceItemDelete = styled.button`
    background-color: var(--color-button-red);
    border: 1px solid var(--color-button-border);
    border-radius: 20px;
    color: var(--color-light);
    font-family: var(--font-family);
    padding: 0.6rem 0.8rem;
    transition: all 0.3s ease-in;

    &:hover {
      background-color: var(--color-button-red-hover);
    }
  `

  return (
    <BalanceItemDiv>
      <BalanceItemHeader>
        <h4 className="balance-item__title">{item.title}</h4>
        <BalanceItemShowMenu onClick={showMenuButtonClickHandler}>
          {showMenu ? '-' : '+'}
        </BalanceItemShowMenu>
      </BalanceItemHeader>
      <BalanceItemDesc>{item.description}</BalanceItemDesc>
      <BalanceItemValue>{item.amount} €</BalanceItemValue>
      {showMenu && (
        <BalanceItemMenu>
          <BalanceItemEdit onClick={editItemClickHandler}>Edit</BalanceItemEdit>
          <BalanceItemDelete onClick={deleteItemClickHandler}>
            Delete
          </BalanceItemDelete>
        </BalanceItemMenu>
      )}
    </BalanceItemDiv>
  )
}

export default BalanceItem
