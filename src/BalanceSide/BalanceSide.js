import BalancePosition from '../BalancePosition/BalancePosition';
import './BalanceSide.css';

const BalanceSide = () => {
	return (
		<section className='balance-side'>
			<h2 className='balance-side__title'>Title</h2>
			<BalancePosition />
			<BalancePosition />
			<BalancePosition />
		</section>
	);
};

export default BalanceSide;