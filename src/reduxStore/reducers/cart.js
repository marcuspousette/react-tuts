import * as actionTypes from '../actions/actionTypes';

const initialState = {
	totalPrice: 0,
	products: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.RESET_CART:
			return {
				...state,
				products: []
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
