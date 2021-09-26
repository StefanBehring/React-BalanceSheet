import styled from 'styled-components/macro'
import { IBalance } from '../../App/balanceTypes'

interface IOverviewPageProps {
  balance: IBalance
}

const OverviewPage = ({ balance }: IOverviewPageProps) => {
  return <Main></Main>
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
