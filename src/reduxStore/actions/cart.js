import * as actionTypes from './actionTypes';

export const resetCart = () => {
	return {
		type: actionTypes.RESET_CART
	};
};

export const incrementProduct = (payload) => {
	return {
		type: actionTypes.INCREMENT_PRODUCT,
		payload
	};
};
