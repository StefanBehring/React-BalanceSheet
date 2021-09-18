import './BalanceItem.css';

const BalanceItem = ({ title, description, value }) => {
	return (
		<div className='balance-item'>
			<div className='balance-item__header'>
				<h4 className='balance-item__title'>Item</h4>
				<button className='balance-item__show-menu'>+</button>
			</div>
			<p className='balance-item__desc'>Description</p>
			<p className='balance-item__value'>21.324,99 €</p>
			<div className='balance-item__menu'>
				<button className='balance-item__edit'>Edit</button>
				<button className='balance-item__delete'>Delete</button>
			</div>
		</div>
	);
};

export default BalanceItem;
