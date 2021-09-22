import styled from 'styled-components/macro'

const SubmitButton = ({ title }) => {
  return <Button>{title}</Button>
}

const Button = styled.button`
  align-self: center;
  background-color: var(--color-button-green);
  border: 1px solid var(--color-button-border);
  border-radius: 20px;
  color: var(--color-light);
  font-family: var(--font-family);
  font-size: 1rem;
  padding: 0.3rem 0.5rem;
  width: fit-content;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: var(--color-button-green-hover);
  }
`

export default SubmitButton
