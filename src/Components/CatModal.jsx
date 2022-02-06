import React, { useState } from 'react';
import Modal from 'react-modal';

function CatModal({ basketItems }) {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const setModalIsOpenToTrue = () => {
		setModalIsOpen(true);
	};

	const setModalIsOpenToFalse = () => {
		setModalIsOpen(false);
	};

	return (
		<div className="CatModal">
			<button onClick={setModalIsOpenToTrue}>Basket</button>

			<Modal isOpen={modalIsOpen}>
				<button onClick={setModalIsOpenToFalse}>x</button>
				{basketItems.map(({ catName, image, price }) => (
					<div>
						<h3>{catName}</h3>
						<img src={image} alt="a cat" />
						<p>£{price}</p>
					</div>
				))}
			</Modal>
		</div>
	);
}

export default CatModal;
