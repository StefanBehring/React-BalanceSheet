import styled from 'styled-components/macro'
import BackButton from '../../Forms/Utility/BackButton/BackButton'

const PageNotFound = () => {
  return (
    <Main>
      <h2>Error 404</h2>
      <p>Page not found..</p>
      <ButtonPlacer>
        <BackButton />
      </ButtonPlacer>
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
    width: 720px;
  }
`

const ButtonPlacer = styled.p`
  margin: 0 0.5rem;
  text-align: right;

  @media screen and (min-width: 760px) {
    text-align: center;
  }
`

export default PageNotFound
