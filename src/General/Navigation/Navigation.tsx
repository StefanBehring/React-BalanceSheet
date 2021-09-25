import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <Nav>
      <StyledLink to="/">Overview</StyledLink>
      <StyledLink to="/details">Details</StyledLink>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`

const StyledLink = styled(Link)`
  background-color: #1266f1;
  border: 1px solid #000;
  border-radius: 25px;
  color: white;
  font-family: var(--font-family);
  padding: 0.3rem 0.5rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in;
  width: fit-content;

  &:hover {
    background-color: #0d47a1;
    color: white;
  }
`

export default Navigation
