import './Card.css';
import { connect } from 'react-redux';
import { incrementProduct } from '../../reduxStore/actions/cart';

const Card = ({ title, description, price, onAddItem, id, incrementProduct }) => {
	const addItem = () => {
		incrementProduct({ title, description, price, id });
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

const mapDispatchToProps = (dispatch) => {
	return {
		incrementProduct: (data) => dispatch(incrementProduct(data))
	};
};

export default connect(null, mapDispatchToProps)(Card);
