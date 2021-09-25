import styled from 'styled-components/macro'

const Header = () => {
  return (
    <header>
      <AppTitle>Balance Sheet</AppTitle>
    </header>
  )
}

const AppTitle = styled.h1`
  color: var(--color-secondary);
  text-align: center;
`

export default Header
