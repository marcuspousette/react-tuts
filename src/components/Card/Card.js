import './Card.css';

const Card = ({ title, description, price, onAddItem, id }) => {
	const addItem = () => {
		onAddItem({ title, description, price, id });
	};

	return (
		<div className="Card">
			<h3 className="Card__title">{title}</h3>
			<p className="Card__desc">{description}</p>
			<div className="Card__price">{price} kr</div>
			<button onClick={addItem} className="Card__button">
				Add
			</button>
		</div>
	);
};

export default Card;
