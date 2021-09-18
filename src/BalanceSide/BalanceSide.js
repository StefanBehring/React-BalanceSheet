import BalancePosition from '../BalancePosition/BalancePosition';
import './BalanceSide.css';

const BalanceSide = ({ onChangePage, side }) => {
	// Get types from localStorage
	const types = JSON.parse(localStorage.getItem('balance')).types;

	return (
		<section className='balance-side'>
			<h2 className='balance-side__title'>{side}</h2>
			{types.map((type) => (
				<BalancePosition
					key={`${side}-${type}`}
					side={side}
					type={type}
					onChangePage={onChangePage}
				/>
			))}
		</section>
	);
};

export default BalanceSide;
