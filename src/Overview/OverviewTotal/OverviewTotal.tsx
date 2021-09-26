import styled from 'styled-components/macro'

interface IOverviewTotalProps {
  total: { side: string; amount: number }
}

const OverviewTotal = ({ total }: IOverviewTotalProps) => {
  return (
    <Wrapper>
      <span>{total.side}</span>
      <span>{total.amount} €</span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--color-primary);
  border: 1px solid var(--color-button-border);
  border-radius: 20px;
  color: var(--color-light);
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  margin: 0.5rem auto;
  width: max-content;
  width: 280px;

  @media screen and (min-width: 760px) {
    width: 660px;
  }
`

export default OverviewTotal
