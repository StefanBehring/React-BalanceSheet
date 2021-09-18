import BalanceItem from '../BalanceItem/BalanceItem';
import './BalancePosition.css';

const BalancePosition = (title, items) => {
	return (
		<div className='balance-position'>
			<div className='balance-position__header'>
				<h3 className='balance-position__title'>Title</h3>
				<button className='balance-position__add-item'>Add</button>
			</div>
			<BalanceItem />
			<BalanceItem />
			<BalanceItem />
		</div>
	);
};

export default BalancePosition;
