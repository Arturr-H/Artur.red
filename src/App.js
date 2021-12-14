import './App.css';
import React, { useState } from "react";

const App = () => {

	const[click, setClick] = useState(0);
	
	return (
		<div className="App">
			<nav>
				<div className="left">
					<h2 className="logo">ARTUR RED</h2>
				</div>
				<div className="right">
					<a href="https://artur.red/">Home</a>
					<a href="https://artur.red/about">About</a>
					<a href="https://artur.red/contact">Contact</a>
					<a href="https://artur.red/blog">Blog</a>
					<a href="https://artur.red/projects">Projects</a>
				</div>
			</nav>

			<button onClick={() => setClick(click+1)}>{click}</button>
		</div>
	);
}

export default App;
