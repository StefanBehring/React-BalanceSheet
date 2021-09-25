import styled from 'styled-components/macro'

interface IBalancePositionHeaderProps {
  type: string
  onAddItemButtonClick: () => void
}

const BalancePositionHeader = ({
  type,
  onAddItemButtonClick,
}: IBalancePositionHeaderProps) => {
  return (
    <Wrapper>
      <Title>{type}</Title>
      <AddItemButton onClick={onAddItemButtonClick}>Add</AddItemButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const Title = styled.h3`
  color: var(--color-secondary);
`

const AddItemButton = styled.button`
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
