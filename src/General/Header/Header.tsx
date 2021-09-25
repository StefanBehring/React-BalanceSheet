import styled from 'styled-components/macro'
import Navigation from '../Navigation/Navigation'

const Header = () => {
  return (
    <header>
      <AppTitle>Balance Sheet</AppTitle>
      <Navigation />
    </header>
  )
}

const AppTitle = styled.h1`
  color: var(--color-secondary);
  text-align: center;
`

export default Header
