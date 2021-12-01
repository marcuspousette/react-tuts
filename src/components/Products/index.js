import './index.css';
import Card from '../Card';
import { useEffect, useState } from 'react';

const Products = (props) => {
	const [products, setProducts] = useState(null);
	const [cartItems, setCartItems] = useState();

	const getProducts = () => {
		setTimeout(() => {
			fetch('/products.json')
				.then((res) => res.json())
				.then((data) => setProducts(data.products));
		}, 2000);
	};

	useEffect(getProducts, []);

	useEffect(() => {
		console.log(cartItems);
	}, [cartItems]);

	const renderProducts = () => {
		if (products === null) return <h1 style={{ color: 'white' }}>Loading ...</h1>;
		return products.map((product, i) => {
			return (
				<Card
					key={i}
					title={product.title}
					description={product.description}
					price={product.price}
					setCartItems={setCartItems}
				/>
			);
		});
	};

	return <div className="Products">{renderProducts()}</div>;
};

export default Products;
