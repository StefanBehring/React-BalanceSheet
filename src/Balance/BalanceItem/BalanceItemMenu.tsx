import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

interface IBalanceItemMenuProps {
  editPath: string
  onDeleteItemClick: () => void
}

const BalanceItemMenu = ({
  editPath,
  onDeleteItemClick,
}: IBalanceItemMenuProps) => {
  return (
    <Wrapper>
      <EditLink to={editPath}>Edit</EditLink>
      <DeleteButton onClick={onDeleteItemClick}>Delete</DeleteButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 0.5rem;
`

const EditLink = styled(Link)`
  background-color: var(--color-button-grey);
  border: 1px solid var(--color-button-border);
  border-radius: 20px;
  color: var(--color-light);
  font-family: var(--font-family);
  padding: 0.6rem 0.8rem;
  text-decoration: none;
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
