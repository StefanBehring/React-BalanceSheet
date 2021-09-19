import { useState } from 'react';
import './BalanceItem.css';

const BalanceItem = ({ onChangePage, itemId }) => {
	// Get item by id from localStorage
	const item = JSON.parse(localStorage.getItem('balance')).items.find(
		(itemFind) => itemFind.id === itemId
	);

	const [showMenu, setShowMenu] = useState(false);

	const showMenuButtonClickHandler = () => {
		setShowMenu(!showMenu);
	};

	const editItemClickHandler = () => {
		onChangePage('edit', item.side, item.type, item.id);
	};

	return (
		<div className='balance-item'>
			<div className='balance-item__header'>
				<h4 className='balance-item__title'>{item.title}</h4>
				<button
					className='balance-item__show-menu'
					onClick={showMenuButtonClickHandler}
				>
					{showMenu ? '-' : '+'}
				</button>
			</div>
			<p className='balance-item__desc'>{item.description}</p>
			<p className='balance-item__value'>{item.amount} €</p>
			<div
				className={
					showMenu
						? 'balance-item__menu'
						: 'balance-item__menu balance-item__menu--hidden'
				}
			>
				<button className='balance-item__edit' onClick={editItemClickHandler}>
					Edit
				</button>
				<button className='balance-item__delete'>Delete</button>
			</div>
		</div>
	);
};

export default BalanceItem;
