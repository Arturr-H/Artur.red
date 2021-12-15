import './App.css';
// import { Python, Javascript, React, Rust, Docker, Node } from  './assets/icons/icons';

const App = () => {

	const Link = (p) => <a
		className={p.active?"stroke":""}
		href={"https://artur.red/" + p.location}
		{...p}
	>
		{p.children}
	</a>;
	
	return (
		<div className="App">
			<nav>

				{/* Artur.red's logga */}
				<div className="left">
					<h2 className="logo">
						<span>{"||"}</span>
						ARTUR RED
					</h2>
				</div>

				<div className="right">

					{/* Använder mig av lambda funktionen
					som jag tidigare skapade. */}
					<Link location="#" active={true}>Home</Link>
					<Link location="about">About</Link>
					<Link location="contact">Contact</Link>
					<Link location="blog">Blog</Link>
					<Link location="projects">Projects</Link>

					{/* Kommer inte vara synlig tills användaren
					har en tillräckligt liten skärm. */}
					<h2 className="logo">
						<span>{"||"}</span>
					</h2>
				</div>
			</nav>

		</div>
	);
}

export default App;
