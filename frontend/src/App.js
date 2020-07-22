import React, { Fragment, useEffect, useState } from 'react';

const App = () => {
	// useEffect(() => {
	// 	getAPI();
	// }, []);

	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	const getAPI = () => {
		const affirmation = Math.round(Math.random() * 19 + 1);
		console.log(affirmation);

		const API = `http://localhost:8080/${affirmation}`;

		fetch(API)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setLoading(false);
				setData(data);
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Fragment>
			<h1>Generate a Random Affirmation</h1>
			<div>
				{loading ? (
					<div></div>
				) : (
					<div>
						<p>{data.name}</p>
					</div>
				)}
			</div>
			<button onClick={getAPI}>Get an Affirmation</button>
		</Fragment>
	);
};

export default App;
