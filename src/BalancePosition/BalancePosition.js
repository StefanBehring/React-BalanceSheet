import BalanceItem from '../BalanceItem/BalanceItem';
import './BalancePosition.css';

const BalancePosition = ({ side, type }) => {
	// Get items from localStorage
	let items = JSON.parse(localStorage.getItem('balance')).items;
	items = items.filter((item) => item.side === side && item.type === type);

	return (
		<div className='balance-position'>
			<div className='balance-position__header'>
				<h3 className='balance-position__title'>{type}</h3>
				<button className='balance-position__add-item'>Add</button>
			</div>
			{items.map((item) => {
				return <BalanceItem key={item.id} itemId={item.id} />;
			})}
		</div>
	);
};

export default BalancePosition;
