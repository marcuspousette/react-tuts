import * as actionTypes from './actionTypes';

export const resetCart = () => {
	return {
		type: actionTypes.RESET_CART
	};
};

export const calculateTotalCartAmount = () => {
	return (dispatch, getState) => {
		const reducer = (rev, curr) => rev.price + curr.price;
		const state = getState();
		const totalPrice = state.products.reduce(reducer);
		dispatch({
			type: actionTypes.CALCULATE_TOTAL_CART_AMOUNT,
			payload: totalPrice
		});
	};
};

export const incrementProduct = (payload) => {
	return {
		type: actionTypes.INCREMENT_PRODUCT,
		payload
	};
};
