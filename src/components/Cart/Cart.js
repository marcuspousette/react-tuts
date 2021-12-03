import './Cart.css';
import { connect } from 'react-redux';
import { resetCart } from '../../reduxStore/actions/cart';
import { useEffect } from 'react';

const Cart = ({ cartItems, resetCart }) => {
	useEffect(() => {
		console.log(cartItems);
	}, [cartItems]);

	const onResetCart = () => {
		resetCart();
	};

	const renderItems = () => {
		return cartItems.map((data, i) => <li key={i}>Title: {data.title}</li>);
	};

	return (
		<div id="Cart">
			<h1>Cart</h1>
			<ul>{renderItems()}</ul>
			<button onClick={onResetCart}>Reset Cart</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cartItems: state.cart.products
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		resetCart: () => dispatch(resetCart())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
