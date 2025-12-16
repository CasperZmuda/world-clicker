import { useEffect, useState } from "react";
import "./App.css";

function App() {
	return (
		<>
			<TotalClicks />
			<Button />
			<footer>
				<p>World Clicker 🌍 collects all clicks from whole world.</p>
			</footer>
		</>
	);
}

function TotalClicks() {
	// Total clicks muszą być GET z serwera
	return (
		<>
			<p className="total-clicks">123,411,516</p>
			<p>total clicks</p>
		</>
	);
}

function Button() {
	const [count, setCount] = useState(0);
	// useEffect() = localStorage(?)
	// count musi być POST na serwer
	const sth: number = Number(localStorage.getItem("clicked"));

	useEffect(() => {
		localStorage.setItem("clicked", String(count));
	}, [count]);

	return (
		<>
			<button onClick={() => setCount(count => count + 1)}>Click me!</button>
			<p>You've clicked {sth} times</p>
		</>
	);
}

export default App;
