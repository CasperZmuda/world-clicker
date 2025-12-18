import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState<number>(0);

	return (
		<div className="content">
			<div className="total-clicks">
				<p className="counter">{String(count)}</p>
				<p className="text">total clicks</p>
			</div>

			{/* <button onClick={() => setCount(count => count + 1)}>Click me!</button> */}
			<button onClick={() => setCount(count + 1)}>Click me!</button>

			<p className="personal-clicks">
				You've clicked <span>{count}</span> times
			</p>

			<footer>
				<p>World Clicker 🌍 collects all clicks from whole world.</p>
			</footer>
		</div>
	);
}

export default App;
