import styled from 'styled-components'

const BalanceItemHeader = ({ itemTitle, showMenu, onMenuButtonClick }) => {
  return (
    <BalanceItemHeaderDiv>
      <h4 className="balance-item__title">{itemTitle}</h4>
      <BalanceItemShowMenu onClick={onMenuButtonClick}>
        {showMenu ? '-' : '+'}
      </BalanceItemShowMenu>
    </BalanceItemHeaderDiv>
  )
}

const BalanceItemHeaderDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const BalanceItemShowMenu = styled.button`
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
