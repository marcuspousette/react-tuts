import './index.css';

const Card = ({ title, description, price, setCartItems }) => {
	const addItem = () => {
		setCartItems({ title, description, price });
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
