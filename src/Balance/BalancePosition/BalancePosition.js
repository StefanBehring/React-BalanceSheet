import styled from 'styled-components'
import BalanceItem from '../BalanceItem/BalanceItem'

const BalancePosition = ({ onChangePage, onDeleteItem, side, type }) => {
  // Get items from localStorage
  const items = JSON.parse(localStorage.getItem('balance')).items.filter(
    item => item.side === side && item.type === type
  )

  const onAddItemClickHandler = () => {
    onChangePage('add', side, type, '')
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

  const BalancePositionHeader = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
  `

  const BalancePositionTitle = styled.h3`
    color: var(--color-secondary);
  `

  const BalancePositionAddItem = styled.button`
    background-color: var(--color-button-green);
    border: 1px solid var(--color-button-border);
    border-radius: 20px;
    color: var(--color-light);
    font-family: var(--font-family);
    padding: 0.6rem 0.8rem;
    width: fit-content;
    transition: all 0.3s ease-in;
    &:hover {
      background-color: var(--color-button-green-hover);
    }
  `

  return (
    <BalancePositionDiv>
      <BalancePositionHeader>
        <BalancePositionTitle>{type}</BalancePositionTitle>
        <BalancePositionAddItem onClick={onAddItemClickHandler}>
          Add
        </BalancePositionAddItem>
      </BalancePositionHeader>
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

export default BalancePosition
