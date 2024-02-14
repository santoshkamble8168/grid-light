import { useState } from "react";
import Box from "./components/Box";
import "./App.css";

const gridConfig = [
	[1, 1, 1],
	[1, 0, 1],
	[1, 1, 1],
];

function App() {
	const [order, setOrder] = useState([]);
	const [deactivates, setDeactivates] = useState(false);

	const handleActivate = (index) => {
		const newOrder = [...order, index];
		setOrder(newOrder);
		console.log(newOrder);

		//check all are Filled?
		if (newOrder.length === gridConfig.flat(1).filter(Boolean).length) {
			handleDeActivate();
		}
	};

	const handleDeActivate = () => {
		setDeactivates(true);
		//deactivating start
		const timer = setInterval(() => {
			setOrder((prevOrder) => {
				const newOrder = prevOrder.slice();
				newOrder.pop();
				if (newOrder.length === 0) {
					clearInterval(timer);
					setDeactivates(false);
				}
				return newOrder;
			});
		}, 300);
	};

	return (
		<>
			<h1>Grid Light</h1>
			<div className="container">
				<div className="grid" style={{ gridTemplateColumns: `repeat(${gridConfig[0].length}, 1fr)` }}>
					{gridConfig
						.flat(1)
						.map((box, i) =>
							box ? <Box key={i} isFilled={order.includes(i)} onClick={() => handleActivate(i)} deactivates={deactivates} /> : <span></span>
						)}
				</div>
			</div>
		</>
	);
}

export default App;
