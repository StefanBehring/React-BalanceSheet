import styled from 'styled-components'
import BalanceItem from '../BalanceItem/BalanceItem'
import BalancePositionHeader from './BalancePositionHeader'

const BalancePosition = ({ onChangePage, onDeleteItem, side, type }) => {
  // Get items from localStorage
  const items = JSON.parse(localStorage.getItem('balance')).items.filter(
    item => item.side === side && item.type === type
  )

  const addItemClickHandler = () => {
    onChangePage('add', side, type, '')
  }

  return (
    <BalancePositionDiv>
      <BalancePositionHeader
        type={type}
        onAddItemButtonClick={addItemClickHandler}
      />
      {items.map(item => {
        return (
          <BalanceItem
            key={item.id}
            itemId={item.id}
            onChangePage={onChangePage}
            onDeleteItem={onDeleteItem}
          />
        )
      })}
    </BalancePositionDiv>
  )
}

const BalancePositionDiv = styled.div`
  background-color: var(--color-primary);
  border: 1px solid var(--color-button-border);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  margin: 1rem auto;
  width: max-content;
  width: 280px;

  @media screen and (min-width: 760px) {
    width: 300px;
  }
`

export default BalancePosition
