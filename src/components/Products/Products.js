import './Products.css';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import { useEffect, useState } from 'react';

const Products = (props) => {
	const [products, setProducts] = useState(null);
	const [cartItems, setCartItems] = useState([]);

	const getProducts = () => {
		setTimeout(() => {
			fetch('/products.json')
				.then((res) => res.json())
				.then((data) => setProducts(data.products));
		}, 2000);
	};

	useEffect(getProducts, []);

	const addItem = (item) => {
		setCartItems((oldCartItems) => {
			return [...oldCartItems, item];
		});
	};

	const renderProducts = () => {
		if (products === null) return <h1 style={{ color: 'white' }}>Loading ...</h1>;
		return products.map((product, i) => {
			return (
				<Card
					id={i}
					key={i}
					title={product.title}
					description={product.description}
					price={product.price}
					onAddItem={addItem}
				/>
			);
		});
	};

	return (
		<div className="Products">
			<Cart />
			{renderProducts()}
		</div>
	);
};

export default Products;
