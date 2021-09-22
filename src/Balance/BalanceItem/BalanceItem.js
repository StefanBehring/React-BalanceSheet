import { useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import BalanceItemHeader from './BalanceItemHeader'
import BalanceItemMenu from './BalanceItemMenu'

const BalanceItem = ({ onDeleteItem, itemId }) => {
  // Get item by id from localStorage
  const item = JSON.parse(localStorage.getItem('balance')).items.find(
    itemFind => itemFind.id === itemId
  )

  const [showMenu, setShowMenu] = useState(false)

  const history = useHistory()

  const showMenuButtonClickHandler = () => {
    setShowMenu(!showMenu)
  }

  const editItemClickHandler = () => {
    let path = `/edit/` + itemId
    history.push(path)
  }

  const deleteItemClickHandler = () => {
    onDeleteItem(itemId)
  }

  return (
    <Wrapper>
      <BalanceItemHeader
        itemTitle={item.title}
        showMenu={showMenu}
        onMenuButtonClick={showMenuButtonClickHandler}
      />
      <Description>{item.description}</Description>
      <ItemValue>{item.amount} €</ItemValue>
      {showMenu && (
        <BalanceItemMenu
          onEditItemClick={editItemClickHandler}
          onDeleteItemClick={deleteItemClickHandler}
        />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
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

const Description = styled.p`
  text-align: left;
`

const ItemValue = styled.p`
  text-align: right;
`

export default BalanceItem
