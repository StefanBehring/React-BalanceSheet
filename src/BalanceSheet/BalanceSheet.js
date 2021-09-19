import BalanceSide from '../BalanceSide/BalanceSide';
import './BalanceSheet.css';

const BalanceSheet = ({ balanceLocalStorage, onChangePage, onDeleteItem }) => {
	// Get sides from localStorage
	const sides = balanceLocalStorage.sides;

	return (
		<main className='main'>
			{sides.map((side) => (
				<BalanceSide
					key={side}
					side={side}
					balanceLocalStorage={balanceLocalStorage}
					onChangePage={onChangePage}
					onDeleteItem={onDeleteItem}
				/>
			))}
		</main>
	);
};

export default BalanceSheet;
