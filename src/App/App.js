import './App.css';
import BalanceSheet from '../BalanceSheet/BalanceSheet';

function App() {
	// LocalStorage init
	if (localStorage.getItem('balance') === null) {
		const newBalance = [
			{
				side: ['activa', 'passiva'],
				types: ['long-term', 'mid-term', 'short-term'],
				items: [
					{
						id: 0,
						side: 'activa',
						type: 'long-term',
						title: 'appartment',
						description: 'my appartment',
						value: '23.123,89',
					},
					{
						id: 1,
						side: 'activa',
						type: 'mid-term',
						title: 'appartment',
						description: 'my appartment',
						value: '23.123,89',
					},
					{
						id: 2,
						side: 'activa',
						type: 'short-term',
						title: 'appartment',
						description: 'my appartment',
						value: '23.123,89',
					},
					{
						id: 3,
						side: 'passiva',
						type: 'long-term',
						title: 'appartment',
						description: 'my appartment',
						value: '23.123,89',
					},
					{
						id: 4,
						side: 'passiva',
						type: 'mid-term',
						title: 'appartment',
						description: 'my appartment',
						value: '23.123,89',
					},
					{
						id: 5,
						side: 'passiva',
						type: 'short-term',
						title: 'appartment',
						description: 'my appartment',
						value: '23.123,89',
					},
				],
			},
		];
		localStorage.setItem('balance', JSON.stringify(newBalance));
	}
	console.table(JSON.parse(localStorage.getItem('balance')));
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
