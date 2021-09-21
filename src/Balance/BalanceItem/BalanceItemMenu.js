import styled from 'styled-components'

const BalanceItemMenu = ({ onEditItemClick, onDeleteItemClick }) => {
  return (
    <BalanceItemMenuDiv>
      <BalanceItemEdit onClick={onEditItemClick}>Edit</BalanceItemEdit>
      <BalanceItemDelete onClick={onDeleteItemClick}>Delete</BalanceItemDelete>
    </BalanceItemMenuDiv>
  )
}

const BalanceItemMenuDiv = styled.div`
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

export default BalanceItemMenu
