import styled from 'styled-components/macro'

interface IFormularTitleProps {
  title: string
}

const FormularTitle = ({ title }: IFormularTitleProps) => {
  return <Title>{title}</Title>
}

const Title = styled.h2`
  margin: 0.5rem 0.3rem 0.3rem;
  padding: 0;
`

export default FormularTitle
