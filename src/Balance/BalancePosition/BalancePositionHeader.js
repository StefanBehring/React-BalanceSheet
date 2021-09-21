import styled from 'styled-components'

const BalancePositionHeader = ({ type, onAddItemButtonClick }) => {
  return (
    <BalancePositionHeaderDiv>
      <BalancePositionTitle>{type}</BalancePositionTitle>
      <BalancePositionAddItem onClick={onAddItemButtonClick}>
        Add
      </BalancePositionAddItem>
    </BalancePositionHeaderDiv>
  )
}

const BalancePositionHeaderDiv = styled.div`
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

export default BalancePositionHeader
