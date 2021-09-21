import styled from 'styled-components'
import BalanceSide from '../BalanceSide/BalanceSide'

const BalanceSheet = ({ onChangePage, onDeleteItem }) => {
  // Get sides from localStorage
  const sides = JSON.parse(localStorage.getItem('balance')).sides

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
    <Main>
      {sides.map(side => (
        <BalanceSide
          key={side}
          side={side}
          onChangePage={onChangePage}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </Main>
  )
}

export default BalanceSheet
