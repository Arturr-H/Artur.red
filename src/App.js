import './App.css';
import React from "react";
import ContentMockup from "./assets/images/content-mockup.png";

const App = () => {

	const [messages, setMessages] = React.useState([]);
	const ChatContentEnd = React.useRef();

	const Link = (p) => <a
		className={p.active?"stroke":""}
		href={"https://artur.red/" + p.location}
		{...p}
	>
		{p.children}
	</a>;


	const submitChatForm = (e) => {
		e.preventDefault();
		
		const form = e.target;
		const message = 
			new Date().getHours()
			+ ":" + 
			new Date().getMinutes()

			 + " - "
			
			+ form.message.value;

		if(message.length > 0) {
			setMessages([...messages, message]);
			form.message.value = "";

			ChatContentEnd.current.scrollIntoView({ behavior: 'smooth' })
		}
	};
	
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

			<div className="b2x1">
				<div>
					<img className="mockup" src={ContentMockup} alt="Iphone mockup" />
					<div className="mockup-content">
						<div className="chat-container">
							<div className="chat-content">
								{
									messages.map((message, index) => 
										<div className="message" key={index}>
											{message}
										</div>
									)
								}
								<div ref={ChatContentEnd}></div>
							</div>
							
							<form autoComplete="off" id="chat-form" action="/" onSubmit={(e) => submitChatForm(e)}>
								<input autocomplete="false" name="message" type="text" placeholder="Type a message..." />
								<input type="submit" value="Send" />
							</form>
						</div>
					</div>

				</div>
				<div>
					<p>Hejsan jag gillar kakor med sås eftersom det är gott som fan.</p>
				</div>
			</div>
		</div>
	);
}

export default App;
