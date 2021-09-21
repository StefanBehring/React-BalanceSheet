import styled from 'styled-components'
import BalanceSide from '../BalanceSide/BalanceSide'

const BalanceSheet = ({ balanceLocalStorage, onChangePage, onDeleteItem }) => {
  // Get sides from localStorage
  const sides = balanceLocalStorage.sides

  const Main = styled.main`
    background-color: var(--color-light);
    border: 1px solid var(--color-button-border);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    margin: 1rem auto;
    width: 320px;

    @media screen and (min-width: 760px) {
      flex-direction: row;
      width: 720px;
    }
  `

  return (
    <main className="main">
      {sides.map(side => (
        <BalanceSide
          key={side}
          side={side}
          balanceLocalStorage={balanceLocalStorage}
          onChangePage={onChangePage}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </main>
  )
}

export default BalanceSheet
