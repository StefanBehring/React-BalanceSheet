import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import BalanceItemHeader from './BalanceItemHeader'
import BalanceItemMenu from './BalanceItemMenu'

const BalanceItem = ({ balance, itemId, onDeleteItem }) => {
  // Get item by id from localStorage
  const item = balance.items.find(itemFind => itemFind.id === itemId)

  const [showMenu, setShowMenu] = useState(false)

  const showMenuButtonClickHandler = () => {
    setShowMenu(!showMenu)
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
      <ItemValue>{Number.parseFloat(item.amount).toFixed(2)} €</ItemValue>
      {showMenu && (
        <BalanceItemMenu
          editPath={`/edit/` + itemId}
          onDeleteItemClick={deleteItemClickHandler}
        />
      )}
    </Wrapper>
  )
}

BalanceItem.propTypes = {
  onDeleteItem: PropTypes.func.isRequired,
  itemId: PropTypes.string.isRequired,
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
  margin: 0.3rem 0;
  text-align: right;
`

export default BalanceItem
