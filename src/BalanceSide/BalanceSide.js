import styled from 'styled-components'
import BalancePosition from '../BalancePosition/BalancePosition'

const BalanceSide = ({
  balanceLocalStorage,
  onChangePage,
  onDeleteItem,
  side,
}) => {
  // Get types from localStorage
  const types = balanceLocalStorage.types

  const BalanceSideSection = styled.section`
    background-color: var(--color-secondary);
    border: 1px solid var(--color-button-border);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    margin: 0.5rem auto;
    width: max-content;
    min-width: 300px;

    @media screen and (min-width: 760px) {
      width: 320px;
    }
  `

  const BalanceSideTitle = styled.h2`
    margin: 0.5rem 0.3rem 0.3rem;
    padding: 0;
  `

  return (
    <BalanceSideSection>
      <BalanceSideTitle>{side}</BalanceSideTitle>
      {types.map(type => (
        <BalancePosition
          key={`${side}-${type}`}
          side={side}
          type={type}
          balanceLocalStorage={balanceLocalStorage}
          onChangePage={onChangePage}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </BalanceSideSection>
  )
}

export default BalanceSide
