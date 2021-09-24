import styled from 'styled-components/macro'
import BalancePosition from '../BalancePosition/BalancePosition'
import PropTypes from 'prop-types'

const BalanceSide = ({ balance, side, onDeleteItem }) => {
  // Get types from localStorage
  const types = balance.types

  return (
    <Wrapper>
      <Title>{side}</Title>
      {types.map(type => (
        <BalancePosition
          key={`${side}-${type}`}
          balance={balance}
          side={side}
          type={type}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </Wrapper>
  )
}

BalanceSide.propTypes = {
  balance: PropTypes.object.isRequired,
  side: PropTypes.string.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
}

const Wrapper = styled.section`
  background-color: var(--color-secondary);
  border: 1px solid var(--color-button-border);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  margin: 0.5rem auto;
  width: max-content;
  min-width: 300px;

  @media screen and (min-width: 760px) {
    width: 320px;
  }
`

const Title = styled.h2`
  margin: 0.5rem 0.3rem 0.3rem;
  padding: 0;
`

export default BalanceSide
