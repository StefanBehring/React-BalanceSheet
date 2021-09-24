import { useHistory } from 'react-router'
import styled from 'styled-components/macro'
import BalanceItem from '../BalanceItem/BalanceItem'
import BalancePositionHeader from './BalancePositionHeader'
import PropTypes from 'prop-types'

const BalancePosition = ({ onDeleteItem, side, type }) => {
  // Get items from localStorage
  const items = JSON.parse(localStorage.getItem('balance')).items.filter(
    item => item.side === side && item.type === type
  )

  const history = useHistory()

  const addItemClickHandler = () => {
    let path = `/add/${side}/${type}`
    history.push(path)
  }

  return (
    <Wrapper>
      <BalancePositionHeader
        type={type}
        onAddItemButtonClick={addItemClickHandler}
      />
      {items.map(item => {
        return (
          <BalanceItem
            key={item.id}
            itemId={item.id}
            onDeleteItem={onDeleteItem}
          />
        )
      })}
    </Wrapper>
  )
}

BalancePosition.propTypes = {
  onDeleteItem: PropTypes.func.isRequired,
  side: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

const Wrapper = styled.div`
  background-color: var(--color-primary);
  border: 1px solid var(--color-button-border);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  margin: 0.5rem auto;
  width: max-content;
  width: 280px;

  @media screen and (min-width: 760px) {
    width: 300px;
  }
`

export default BalancePosition
