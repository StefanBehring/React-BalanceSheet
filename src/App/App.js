import './App.css';
import BalanceSheet from '../BalanceSheet/BalanceSheet';

function App() {
	return (
		<div className='app'>
			<header className='app__header'>
				<h1 className='app__title'>Balance Sheet</h1>
			</header>
			<BalanceSheet />
			<footer className='app__footer'>
				<a
					href='https://github.com/StefanBehring/React-Privatbilanz'
					target='_blank'
					rel='noreferrer'
				>
					A github project
				</a>
				<p>by: Stefan Behring</p>
			</footer>
		</div>
	);
}

export default App;
