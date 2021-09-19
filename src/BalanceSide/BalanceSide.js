import BalancePosition from '../BalancePosition/BalancePosition';
import './BalanceSide.css';

const BalanceSide = ({
	balanceLocalStorage,
	onChangePage,
	onDeleteItem,
	side,
}) => {
	// Get types from localStorage
	const types = balanceLocalStorage.types;

	return (
		<section className='balance-side'>
			<h2 className='balance-side__title'>{side}</h2>
			{types.map((type) => (
				<BalancePosition
					key={`${side}-${type}`}
					side={side}
					type={type}
					balanceLocalStorage={balanceLocalStorage}
					onChangePage={onChangePage}
					onDeleteItem={onDeleteItem}
				/>
			))}
		</section>
	);
};

export default BalanceSide;
