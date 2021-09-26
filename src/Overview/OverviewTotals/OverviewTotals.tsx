import styled from 'styled-components/macro'
import OverviewTotal from '../OverviewTotal/OverviewTotal'

interface IOverviewTotalsProps {
  totals: sideTotal[]
}

type sideTotal = { side: string; amount: number }

const calcNetworth = (totals: sideTotal[]) => {
  let networth = 0
  totals.forEach(total => {
    if (total.side === 'activa') {
      networth += total.amount
    } else {
      networth -= total.amount
    }
  })
  return networth
}

const OverviewTotals = ({ totals }: IOverviewTotalsProps) => {
  return (
    <Wrapper>
      <Title>Overview</Title>
      {totals.map(total => (
        <OverviewTotal total={total} />
      ))}
      <OverviewTotal
        total={{ side: 'networth', amount: calcNetworth(totals) }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.section`
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
    width: 760px;
  }
`

const Title = styled.h2`
  margin: 0.5rem 0.3rem 0.3rem;
  padding: 0;
`

export default OverviewTotals
