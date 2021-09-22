import styled from 'styled-components/macro'

const FormularTitle = ({ title }) => {
  return <Title>{title}</Title>
}

const Title = styled.h2`
  margin: 0.5rem 0.3rem 0.3rem;
  padding: 0;
`

export default FormularTitle
