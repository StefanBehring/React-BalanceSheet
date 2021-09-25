import styled from 'styled-components/macro'
import BalanceSide from '../BalanceSide/BalanceSide'
import { FDeleteItem, IBalance } from '../../App/balanceTypes'

interface IBalanceSheetProps {
  balance: IBalance
  onDeleteItem: FDeleteItem
}

const BalanceSheet = ({ balance, onDeleteItem }: IBalanceSheetProps) => {
  // Get sides from localStorage
  const sides = balance.sides

  return (
    <Main>
      {sides.map(side => (
        <BalanceSide
          key={side}
          balance={balance}
          side={side}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </Main>
  )
}

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

export default BalanceSheet
