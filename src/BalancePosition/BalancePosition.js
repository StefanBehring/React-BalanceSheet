import BalanceItem from '../BalanceItem/BalanceItem'
import './BalancePosition.css'

const BalancePosition = ({
  balanceLocalStorage,
  onChangePage,
  onDeleteItem,
  side,
  type,
}) => {
  // Get items from localStorage
  let items = balanceLocalStorage.items
  items = items.filter(item => item.side === side && item.type === type)

  const onAddItemClickHandler = () => {
    onChangePage('add', side, type, '')
  }

  return (
    <div className="balance-position">
      <div className="balance-position__header">
        <h3 className="balance-position__title">{type}</h3>
        <button
          className="balance-position__add-item"
          onClick={onAddItemClickHandler}
        >
          Add
        </button>
      </div>
      {items.map(item => {
        return (
          <BalanceItem
            key={item.id}
            itemId={item.id}
            onChangePage={onChangePage}
            onDeleteItem={onDeleteItem}
          />
        )
      })}
    </div>
  )
}

export default BalancePosition
