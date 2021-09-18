import './ItemFormular.css';

const ItemFormular = ({ job, side, type, id }) => {
	return (
		<main className='main'>
			<section className='item-formular'>
				<h2 className='item-formular__title'>Add Item</h2>
				<form className='item-formular__form'>
					<label className='item-formular__label' for='title'>
						Title
					</label>
					<input className='item-formular__input' type='text' id='title' />
					<label className='item-formular__label' for='description'>
						Description
					</label>
					<textarea
						className='item-formular__input'
						id='description'
						rows='4'
						cols='50'
					></textarea>
					<label className='item-formular__label' for='value'>
						Value
					</label>
					<input
						className='item-formular__input'
						type='number'
						id='value'
						step='0.01'
						min='0.01'
					/>
					<button className='item-formular__button'>Add item</button>
				</form>
			</section>
		</main>
	);
};

export default ItemFormular;
