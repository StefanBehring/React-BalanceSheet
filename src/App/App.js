import './App.css';
import BalanceSheet from '../BalanceSheet/BalanceSheet';
import LocalStorageInit from './LocalStorageInit';
import { useState } from 'react';

function App() {
	// LocalStorage init
	LocalStorageInit();

	const [page, setPage] = useState('main');

	const changePageHandler = (job, side, type, id) => {
		setPage(job);
	};

	return (
		<div className='app'>
			<header className='app__header'>
				<h1 className='app__title'>Balance Sheet</h1>
			</header>
			{page === 'main' ? <BalanceSheet onChangePage={changePageHandler} /> : ''}
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
