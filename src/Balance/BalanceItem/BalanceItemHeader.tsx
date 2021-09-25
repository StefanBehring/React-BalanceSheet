import styled from 'styled-components/macro'

interface IBalanceItemHeaderProps {
  itemTitle: string
  showMenu: boolean
  onMenuButtonClick: () => void
}

const BalanceItemHeader = ({
  itemTitle,
  showMenu,
  onMenuButtonClick,
}: IBalanceItemHeaderProps) => {
  return (
    <Wrapper>
      <Title>{itemTitle}</Title>
      <ShowItemMenuButton onClick={onMenuButtonClick}>
        {showMenu ? '-' : '+'}
      </ShowItemMenuButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const Title = styled.h4`
  margin: 0.4rem 0;
`

const ShowItemMenuButton = styled.button`
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

export default BalanceItemHeader
