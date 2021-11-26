import './App.css';
import { useState, useEffect } from 'react';

function App(props) {
	const [users, setUsers] = useState(null);

	const apiCall = () => {
		setTimeout(() => {
			fetch('/data.json')
				.then((res) => res.json())
				.then((data) => {
					console.log(data.people);
					setUsers(data.people);
				});
		}, 2000);
	};

	useEffect(apiCall, []);

	const renderUsers = (users) => {
		if (users === null) return <h1>Loading...</h1>;

		const array = users.map((user, i) => {
			return (
				<div key={i}>
					<div>ID: {user.id}</div>
					<div>
						Name: {user.first_name} {user.last_name}
					</div>
				</div>
			);
		});
		return array;
	};

	return <div className="App">{renderUsers(users)}</div>;
}

export default App;
