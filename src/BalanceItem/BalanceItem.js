import { useState } from 'react';
import './BalanceItem.css';

const BalanceItem = ({ title, description, value }) => {
	const [showMenu, setShowMenu] = useState(false);

	const showMenuButtonClickHandler = () => {
		setShowMenu(!showMenu);
	};

	return (
		<div className='balance-item'>
			<div className='balance-item__header'>
				<h4 className='balance-item__title'>{title}</h4>
				<button
					className='balance-item__show-menu'
					onClick={showMenuButtonClickHandler}
				>
					{showMenu ? '-' : '+'}
				</button>
			</div>
			<p className='balance-item__desc'>{description}</p>
			<p className='balance-item__value'>{value}</p>
			<div
				className={
					showMenu
						? 'balance-item__menu'
						: 'balance-item__menu balance-item__menu--hidden'
				}
			>
				<button className='balance-item__edit'>Edit</button>
				<button className='balance-item__delete'>Delete</button>
			</div>
		</div>
	);
};

export default BalanceItem;
