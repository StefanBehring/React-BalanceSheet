import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const FormularTitle = ({ title }) => {
  return <Title>{title}</Title>
}

FormularTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

const Title = styled.h2`
  margin: 0.5rem 0.3rem 0.3rem;
  padding: 0;
`

export default FormularTitle
