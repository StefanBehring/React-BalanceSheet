import { useState } from 'react';
import './ItemFormular.css';

const ItemFormular = ({ job, side, type, id }) => {
	console.log(id);
	let item = null;
	if (id !== undefined) {
		// Get item by id from localStorage
		item = JSON.parse(localStorage.getItem('balance')).items.find(
			(itemFind) => itemFind.id === id
		);
	}

	const [formJob, setFormJob] = useState(job);
	const [formSide, setFormSide] = useState(
		side !== undefined ? side : item.side
	);
	const [formType, setFormType] = useState(
		type !== undefined ? type : item.type
	);
	const [formId, setFormId] = useState(id);
	const [title, setTitle] = useState(item !== null ? item.title : '');
	const [description, setDescription] = useState(
		item !== null ? item.description : ''
	);
	const [amount, setAmount] = useState(
		item !== null ? Number.parseFloat(item.amount) : 0
	);

	const changeTitleHandler = (event) => {
		setTitle(event.target.value);
	};

	const changeDescriptionHandler = (event) => {
		setDescription(event.target.value);
	};

	const changeAmountHandler = (event) => {
		setAmount(event.target.value);
	};

	const editButtonClick = () => {
		const editObj = {
			id: formId,
			side: formSide,
			type: formType,
			title: title,
			description: description,
			amount: Number.parseFloat(amount).toString(),
		};

		const balance = JSON.parse(localStorage.getItem('balance'));
		const itemIndex = balance.items.map((el) => el.id).indexOf(formId);
		balance.items[itemIndex] = editObj;
		localStorage.setItem('balance', JSON.stringify(balance));
	};

	const addButtonClick = () => {
		const addObj = {
			id: Math.random(),
			side: formSide,
			type: formType,
			title: title,
			description: description,
			amount: Number.parseFloat(amount).toString(),
		};
		const balance = JSON.parse(localStorage.getItem('balance'));
		balance.items.push(addObj);
		console.table(addObj);
		alert('WAIT');
		localStorage.setItem('balance', JSON.stringify(balance));
	};

	const jobText = formJob.charAt(0).toUpperCase() + formJob.substring(1);

	return (
		<main className='main'>
			<section className='item-formular'>
				<h2 className='item-formular__title'>{jobText} Item</h2>
				<form className='item-formular__form'>
					<label className='item-formular__label' htmlFor='title'>
						Title
					</label>
					<input
						className='item-formular__input'
						type='text'
						id='title'
						name='title'
						onChange={changeTitleHandler}
						value={title}
					/>
					<label className='item-formular__label' htmlFor='description'>
						Description
					</label>
					<textarea
						className='item-formular__input'
						id='description'
						name='description'
						onChange={changeDescriptionHandler}
						rows='4'
						cols='50'
						value={description}
					/>
					<label className='item-formular__label' htmlFor='amount'>
						Amount
					</label>
					<input
						className='item-formular__input'
						type='number'
						id='amount'
						name='amount'
						onChange={changeAmountHandler}
						step='0.01'
						min='0.01'
						value={amount}
					/>
					{formId ? (
						<input type='hidden' name='id' defaultValue={formId} />
					) : (
						''
					)}
					{formSide ? (
						<input type='hidden' name='side' defaultValue={formSide} />
					) : (
						''
					)}
					{formType ? (
						<input type='hidden' name='type' defaultValue={formType} />
					) : (
						''
					)}
					<button
						className='item-formular__button'
						onClick={formJob === 'edit' ? editButtonClick : addButtonClick}
					>
						{jobText} item
					</button>
				</form>
			</section>
		</main>
	);
};

export default ItemFormular;
