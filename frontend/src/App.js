import React, { Fragment, useState } from 'react';
import './App.css';

const App = () => {
	// useEffect(() => {
	// 	getAPI();
	// }, []);

	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	const getAPI = () => {
		const affirmation = Math.round(Math.random() * 19 + 1);
		// console.log(affirmation);

		const API = `http://localhost:8080/${affirmation}`;

		fetch(API)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setLoading(false);
				setData(data);
				// console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Fragment>
			<div className="flex mb-4">
				<div className="w-full bg-gray-100 h-auto p-10 flex justify-center">
					<div>
						<div className="rounded overflow-hidden shadow-lg w-auto p-6">
							<div>
								<h1 className="text-2xl text-center uppercase tracking-wider">Generate a Random Affirmation</h1>
							</div>
							<div className="px-6 py-4 text-center">
								<div>
									{loading ? (
										<div></div>
									) : (
										<div>
											<div className="flex justify-center">
												<img className="w-full max-w-2xl" src={data.img} alt={data.name} />
											</div>

											<blockquote className="text-gray-700 text-base mt-10 mb-10 text-4xl">
												<span className="text-4xl">"</span>
												{data.name}
												<span className="text-4xl">"</span>
											</blockquote>
										</div>
									)}
								</div>
								<button
									className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded uppercase tracking-wider text-2xl"
									onClick={getAPI}
								>
									Get an Affirmation
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default App;
