import styled from 'styled-components/macro'
import { IBalance } from '../../App/balanceTypes'
import OverviewTotals from '../OverviewTotals/OverviewTotals'

interface IOverviewPageProps {
  balance: IBalance
}

type sideTotal = { side: string; amount: number }

const calcTotal = (balanceObj: IBalance, side: string) => {
  const filteredItems = balanceObj.items.filter(item => item.side === side)
  let total = 0
  filteredItems.forEach(item => (total += Number.parseFloat(item.amount)))
  return total
}

const OverviewPage = ({ balance }: IOverviewPageProps) => {
  const totals: sideTotal[] = []
  balance.sides.forEach(side =>
    totals.push({ side: side, amount: calcTotal(balance, side) })
  )
  return (
    <Main>
      <OverviewTotals totals={totals} />
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

export default OverviewPage
