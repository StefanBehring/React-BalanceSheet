import styled from 'styled-components/macro'

const BalanceItemMenu = ({ onEditItemClick, onDeleteItemClick }) => {
  return (
    <Wrapper>
      <EditButton onClick={onEditItemClick}>Edit</EditButton>
      <DeleteButton onClick={onDeleteItemClick}>Delete</DeleteButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const EditButton = styled.button`
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

const DeleteButton = styled.button`
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
