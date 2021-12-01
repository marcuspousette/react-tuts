import * as actionTypes from '../actions/actionTypes';

const initialState = {
	totalPrice: 0,
	products: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.RESET_CART:
			return {
				...state
			};

		case actionTypes.CALCULATE_TOTAL_CART_AMOUNT:
			return {
				...state,
				totalPrice: action.payload
			};

		case actionTypes.INCREMENT_PRODUCT:
			return {
				...state,
				products: [...state.products, action.payload]
			};

		default:
			return state;
	}
};

export default reducer;