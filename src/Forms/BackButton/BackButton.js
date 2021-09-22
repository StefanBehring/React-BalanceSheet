import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

const BackButton = () => {
  return <StyledLink to="/">Back</StyledLink>
}

const StyledLink = styled(Link)`
  background-color: #1266f1;
  border: 1px solid #000;
  border-radius: 25px;
  color: white;
  font-family: var(--font-family);
  padding: 0.3rem 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: #0d47a1;
    color: white;
  }
`
export default BackButton
