import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import cart from './reducers/cart';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ cart });

const configureStore = () => {
	const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));
	return store;
};

export default configureStore;
