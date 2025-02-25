import './Contact.css';

function Contact() {
	return (
		<div className='contact-container'>
			<section className='contact-me-section'>
				<h1>Contact Me</h1>
				<p>
					If you’re interested in discussing an employment opportunity,
					collaborating on an exciting project, or simply have a question you would
					like to ask, please don’t hesitate to reach out! I am always open to
					new connections, creative ventures, and meaningful conversations. I
					look forward to connecting and exploring potential opportunities
					together.
				</p>

				<p>Fill out the form below or email me directly at <a href="mailto:josh@jrobertson.io">josh@jrobertson.io</a>.</p>
			</section>
			<section className='contact-form-section'>
				<form action="">
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" name="name" required />
					<label htmlFor="email">Email:</label>
					<input type="email" id="email" name="email" required />
					<label htmlFor="message">Message:</label>
					<textarea id="message" cols={75} rows={5} name="message" required></textarea>
					<button type="submit">Send Message</button>
				</form>
			</section>
		</div>
	);
}
export default Contact;
