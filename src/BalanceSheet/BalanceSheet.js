import BalanceSide from '../BalanceSide/BalanceSide';
import './BalanceSheet.css';

const BalanceSheet = () => {
	// Get sides from localStorage
	const sides = JSON.parse(localStorage.getItem('balance')).sides;

	return (
		<main className='main'>
			{sides.map((side) => (
				<BalanceSide key={side} side={side} />
			))}
		</main>
	);
};

export default BalanceSheet;
